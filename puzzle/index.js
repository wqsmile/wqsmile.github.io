var puzzle = {
  imgSrc: './img/girl.png',
  width: 1160,
  height: 650,
  rows: 3,
  cols: 3,
  dom: document.getElementsByClassName('wrapper')[0],
  blocks: [],
  winFlag: true,
  timer: null,
  time: 60,
  timeDom: document.getElementsByClassName('time')[0],
  /**
   * 拼图初始化
   */
  init() {
    this.initData();
    this.createDom();
    this.shuffle();
    this.setTime();
    this.handle();
    // this.gameWin();
  },
  /**
   * 初始化拼图主体框架和拼图元素的宽高
   */
  initData() {
    // 最外层div
    this.dom.style.position = 'absolute';
    this.dom.style.width = `${this.width}px`;
    this.dom.style.height = `${this.height}px`;
    this.dom.style.left = `calc(50% - ${this.width / 2}px)`;
    this.dom.style.top = `calc(50% - ${this.height / 2}px)`;
    this.dom.style.border = '2px solid #ccc';
    // 拼图元素的宽高
    this.bWidth = this.width / this.cols;
    this.bHeight = this.height / this.rows;
  },
  /**
   * 创建拼图的dom元素
   */
  createDom() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        this.blocks.push(this.initBlock(i, j));
      }
    }
  },
  /**
   * 打乱拼图元素的顺序
   */
  shuffle() {
    var self = this;
    this.blocks.forEach(function (block) {
      if (block.style.display !== 'none') {
        self.swap(block, self.blocks[self.getRandom()]);
      }
    });
  },
  /**
   * 游戏计时
   */
  setTime() {
    var self = this;
    this.timer = setInterval(() => {
      self.timeDom.innerHTML = `距离结束还有 ${self.time} 秒`;
      if (self.time == 0) {
        self.dom.onclick = null; 
        alert('game over');
        clearInterval(self.timer);
      }
      self.time--;
    }, 1000);
    
  },
  /**
   * 鼠标点击事件
   */
  handle() {
    var self = this;
    this.dom.onclick = function (e) {
      var target = e.target;
      self.blocks.forEach(function (block, index, arr) { 
        var decX = Math.abs(parseInt(target.pos[0]) - parseInt(arr[arr.length - 1].pos[0]));
        var decY = Math.abs(parseInt(target.pos[1]) - parseInt(arr[arr.length - 1].pos[1]));
        if ((decX === 1 && decY === 0) || (decY === 1 && decX === 0)) {
          self.swap(target, arr[arr.length - 1]);
        }
        // self.swap(target, arr[arr.length - 1]); // 测试
      });
      self.gameWin();
    };
    
  },
  /**
   * 判断是不是拼好了，拼好了则把图片补全并消去边框
   */
  gameWin() {
    var temp = 1;
    this.blocks.forEach(function (block) {
      if (block.pos[0] !== block.correctPos[0] || block.pos[1] !== block.correctPos[1]) {
        this.winFlag = false;
        temp = 0;
      }
    });
    if (this.winFlag && temp) {
      this.blocks.forEach(function (block) {
        block.style.border = 'none';
        block.style.display = 'block';
      });
      this.dom.onclick = null;
      clearInterval(this.timer);
      setTimeout(function () {
        alert('u win!!!');
      }, 500);
    }
  },
  /**
   * 初始化拼图元素的样式的构造函数
   * @param {*} i 
   * @param {*} j 
   */
  initBlock(i, j) {
    var block = document.createElement('div');
    block.style.width = `${this.bWidth}px`;
    block.style.height = `${this.bHeight}px`;
    block.style.position = 'absolute';
    block.style.left = `${j * this.bWidth}px`;
    block.style.top = `${i * this.bHeight}px`;
    block.style.border = '1px solid #fff';
    block.style.boxSizing = 'boder-box';
    block.style.transition = '0.5s';
    block.style.background = `url('${this.imgSrc}') ${-j * this.bWidth}px ${-i * this.bHeight}px`;
    block.pos = [i, j];
    block.correctPos = [i, j];
    this.dom.appendChild(block);
    if (i === this.rows - 1 && j === this.cols - 1) {
      block.style.display = 'none';
    }
    return block;
  },
  /**
   * 生成0到拼图数量-2之间的一个随机数，因为最后一个div要为白色
   */
  getRandom() {
    return Math.floor(Math.random() * (this.rows * this.cols - 1));
  },
  /**
   * 交换位置
   * @param {*} a 
   * @param {*} b 
   */
  swap(a, b) {
    var temp = a.style.left;
    a.style.left = b.style.left;
    b.style.left = temp;

    temp = a.style.top;
    a.style.top = b.style.top;
    b.style.top = temp;

    temp = a.pos;
    a.pos = b.pos;
    b.pos = temp;
  }
}

puzzle.init();