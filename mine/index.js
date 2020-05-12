var mine = {
  rows: null,
  cols: null,
  mineNum: null,
  resultNum: 0,
  width: 40,
  height: 40,
  mineArea: [],
  blocks: [],
  mineDom: document.getElementsByClassName('mine')[0],
  mineSurplus: document.getElementsByClassName('mineNum')[0],
  win: 0, // 是否赢了
  /**
   * 扫雷初始化
   * @param {*} level 
   */
  init(level) {
    this.levelInit(level);  // 初始化等级
    this.initData();        // 初始化数据
    this.handle();          // 点击事件
  },
  /**
   * 等级初始化
   * @param {*} level 
   */
  levelInit(level) {
    this.level = level;
    this.rows = this.level.rows;
    this.cols = this.level.cols;
    this.mineNum = this.level.mineNum;
  },
  /**
   * 数据初始化
   */
  initData() {
    this.getMineNum();  // 获取mineNum个随机数
    
    this.win = this.mineNum;
    this.resultNum = this.mineNum; // resultNum为玩家看到的剩余雷数
    // 整个扫雷dom
    this.mineDom.style.width = `${this.width * this.rows}px`;
    this.mineDom.style.height = `${this.height * this.cols}px`;
    this.mineSurplus.innerHTML = `剩余雷数: ${this.mineNum}`;

    this.createDom();   // 根据雷的位置创建dom元素
    this.calcNum();     // 计算雷周围的数字
  },
  /**
   * 鼠标事件
   */
  handle() {
    var self = this;
    this.mineDom.onmousedown = function (e) {
      var target = e.target;
      // 左键鼠标
      if (e.button === 0) {
        target.innerHTML = target.value;
        target.style.background = '#ccc';
        // block为0
        if (target.value === 0) {
          var x = target.pos[0],
              y = target.pos[1];    
          self.zeros(x, y);
        }
        // 踩到雷
        if (target.isMine) {
          self.win = 0; // 输了
          for (var i = 0; i < self.rows; i++) {
            for (var j = 0; j < self.cols; j++) {
              if (self.blocks[i][j].isMine) {
                self.blocks[i][j].style.background = 'yellow';
                self.blocks[i][j].style.color = 'red';
                self.blocks[i][j].innerHTML = self.blocks[i][j].value;
              } else {
                self.blocks[i][j].innerHTML = self.blocks[i][j].value;
              }
            }
          }
          target.style.background = 'black';
          self.gameover();
          this.onmousedown = null;
        }
      }
      // block展开的时候，没有展开或者已经标旗才能点击右键
      if (target.style.background !== 'rgb(204, 204, 204)' || target.style.background === 'yellow') {
        if (e.button === 2) {
          if (target.innerHTML === '旗') {
            target.innerHTML = '';
            target.style.background = '#008c8c';
            ++self.resultNum;
          } else {
            target.style.background = 'yellow';
            target.innerHTML = '旗';
            self.mineSurplus.innerHTML = `剩余雷数: ${--self.resultNum}`;
          }

          if (target.value == '炸') {
            self.win--;
          }

          if (self.resultNum === 0) {
            self.gameover();
            this.onmousedown = null;
          }
        }
      }

    };
    // 取消右键菜单的默认事件
    window.oncontextmenu = function () {
      return false;
    };
  },
  /**
   * x和y为当前0的坐标，递归将连续的0都找出来并展示周围8个数
   * @param {*} x 
   * @param {*} y 
   */
  zeros(x, y) {
    for (var i = x - 1; i <= x + 1; i++) {
      for (var j = y - 1; j <= y + 1; j++) {
        if (x === i && y === j) continue;
        if (i >= 0 && i < this.cols && j >= 0 && j < this.rows) {
          this.blocks[i][j].style.background = '#ccc';
          this.blocks[i][j].innerHTML = this.blocks[i][j].value;
          if (this.blocks[i][j].value === 0) {
            if (this.blocks[i][j].zeroFlag) {
              // 若i j位置为0且展开过，标记为false，下一次就不要展开了
              this.blocks[i][j].zeroFlag = false;
              this.zeros(this.blocks[i][j].pos[0], this.blocks[i][j].pos[1]);
            }

          }
        }
      }
    }
  },
  /**
   * 创建dom元素
   */
  createDom() {
    var temp = 0;
    // 创建每个小方块
    for (var i = 0; i < this.rows; i++) {
      this.blocks[i] = document.createElement('tr');
      for (var j = 0; j < this.cols; j++) {
        var block = document.createElement('td');
        block.style.width = `${this.width}px`;
        block.style.height = `${this.height}px`;
        block.style.lineHeight = `${this.height}px`;
        block.className = 'block';
        block.pos = [i, j];
        block.isMine = false;
        block.zeroFlag = true;
        block.value = 0;
        this.mineArea.forEach(function (item) {
          if (temp === item) {
            block.isMine = true;
            block.value = '炸';
          }
        });
        temp++;
        this.blocks[i][j] = block;
        this.mineDom.appendChild(block);
      }
    }
  },
  /**
   * 随机生成mineNum个雷
   */
  getMineNum() {
    for (var i = 0; i < this.rows * this.cols; i++) {
      this.mineArea.push(i);
    }
    this.mineArea.sort(function () {
      return Math.random() - 0.5;
    }).length = this.mineNum;
  },
  /**
   * 计算雷周围的数字
   */
  calcNum() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        if (this.blocks[i][j].isMine === true) {

          for (var x = i - 1; x <= i + 1; x++) {
            for (var y = j - 1; y <= j + 1; y++) {
              if (x === i && y === j) continue;

              if (x >= 0 && x < this.cols && y >= 0 && y < this.rows) {
                if (!this.blocks[x][y].isMine) this.blocks[x][y].value += 1;
              }
            }
          }
        }
      }
    }
  },
  /**
   * 游戏结束，判断输赢并重置游戏
   */
  gameover() {
    setTimeout(() => {
      if (this.win === this.resultNum) alert('you win');
      else alert('you lose');
      this.restart();
      this.init(this.level);
    }, 100);
  },
  /**
   * 重置游戏
   */
  restart() {
    this.mineArea = [];
    this.blocks = [];
    this.resultNum = this.mineNum;
    this.mineDom.innerHTML = '';
  }
};

// 游戏等级
var gameLevel = [
  { index: 0, rows: 5, cols: 5, mineNum: 5 },
  { index: 1, rows: 9, cols: 9, mineNum: 10 },
  { index: 2, rows: 16, cols: 16, mineNum: 40 },
  { index: 3, rows: 30, cols: 30, mineNum: 99 },
];
var level = gameLevel[0];
// 等级按钮
var levelBtn = document.querySelector('.levelBtn');
var btns = document.querySelectorAll('button');
// 等级按钮事件
levelBtn.onclick = function (e) {
  var target = e.target;
  if (target.tagName === 'BUTTON') {
    Array.from(btns).slice(0, -1).forEach(function (item, index) {
      item.pos = index;
      item.className = '';
    });
    if (target.className !== 'restart') {
      target.className = 'active';
      level = gameLevel[target.pos];
      if (level.mineNum !== mine.level.mineNum) {
        mine.restart();
        mine.init(level);
      }
    } else {
      Array.from(btns).slice(0, -1).forEach(function (item, index) {
        if (index === level.index) {
          item.className = 'active';
        }
      });
      mine.restart();
      mine.init(level);
    }
  }
};

mine.init(level);
