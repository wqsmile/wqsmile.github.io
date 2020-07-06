(function () {
  class Slide {
    constructor(options, wrapper) {
      // 最外层
      this.wrap = wrapper;
      // 轮播图图片dom数组
      this.domList = options.domList || [];
      // 轮播长度
      this.len = options.domList.length || 0;
      // 轮播样式
      this.animateType = options.animateType || 'animation';
      // 是否自动轮播
      this.isAuto = options.isAuto === undefined ? true : options.isAuto;
      // 是否显示左右按钮
      this.showBtn = options.showBtn === undefined ? true : options.showBtn;
      // 按钮位置，左，中，右
      this.dotsPos = options.dotsPos || 'center';
      // 是否显示小圆点
      this.showDots = options.showDots === undefined ? true : options.showDots;
      // 鼠标悬停是否暂停动画
      this.isHoverPause = options.isHoverPause === undefined ? true : options.isHoverPause;
      // 按钮没显示时鼠标悬停是否显示左右按钮，默认是显示的
      this.isHoverBtn = options.isHoverBtn === undefined ? false : options.isHoverBtn;
      // 动画时间
      this.animateTime = options.animateTime || 700;
      // 自动轮播时间
      this.autoTime = options.autoTime || 3000;
      // 轮播定时器
      this.autoTimer = null;
      // 当前轮播的索引
      this.curIndex = 0;
      // 轮播区域的宽高
      this.width = options.width || this.wrap.width;
      this.height = options.height || this.wrap.height;
      this.lock = false;
    }
    // 创建轮播图
    createElement() {
      // 轮播图包裹层
      const wrapperDom = $('<div class="my-wrapper">');
      // 图片包裹层
      const imgDom = $('<ul class="my-img">');

      this.domList.each((index, item) => {
        const itemDom = $('<li class="my-item">');
        itemDom.append(item).appendTo(imgDom);
      });
      // 在最后添加第一张图片，实现无缝轮播
      imgDom.append($('<li class="my-item">').append($(this.domList[0]).clone()));
      wrapperDom.append(imgDom).appendTo(this.wrap);
    }
    // 初始化轮播图样式
    initStyle() {
      // $('*').css({
      //   margin: 0,
      //   padding: 0,
      // });
      // 最外层给相对不定位
      this.wrap.css({
        position: 'relative'
      });
      // 轮播区域
      $('.my-wrapper', this.wrap).css({
        width: this.width,
        height: this.height,
        overflow: 'hidden'
      });
      // 图片区域
      $('.my-img', this.wrap).css({
        position: 'relative',
        height: this.height,
        listStyle: 'none'
      })
      $('.my-item', this.wrap).css({
        width: this.width,
        height: this.height
      })
      // 轮播样式，左右滑动则浮动，淡入淡出用绝对定位
      if (this.animateType === 'animation') {
        $('.my-item', this.wrap).css({
          float: 'left'
        });
        $('.my-img', this.wrap).css({
          width: this.width * (this.len + 1),
        })
      } else if (this.animateType === 'fade') {
        $('.my-item', this.wrap).css({
          position: 'absolute',
          // display: 'none'
        });
        // $('.my-item').css({
        //   display: 'block'
        // });
        $('.my-img', this.wrap).css({
          width: this.width,
        })
      }
      // 左右按钮
      // if (this.showBtn) {
        // 左右按钮样式
        const btnStyle = {
          position: 'absolute',
          width: 30,
          height: 40,
          top: 'calc(50% - 20px)',
          border: 'none',
          outline: 'none',
          background: 'rgba(0, 0, 0, .3)',
          color: '#ddd',
          fontSize: '16px',
          cursor: 'pointer',
          // zIndex: 100,
          display: 'none'
        };

        $('<button class="my-btn my-lBtn">&lt;</button>')
          .appendTo(this.wrap)
          .css({
            ...btnStyle,
            left: 0,
            borderRadius: '0 20px 20px 0'
          })
          .hover(() => $('.my-lBtn', this.wrap).css({ background: 'rgba(0, 0, 0, .6)' })
            , () => $('.my-lBtn', this.wrap).css({ background: 'rgba(0, 0, 0, .3)' })
          )

        $('<button class="my-btn my-rBtn">&gt;</button>')
          .appendTo(this.wrap)
          .css({
            ...btnStyle,
            right: 0,
            borderRadius: '20px 0 0 20px'
          })
          .hover(() => $('.my-rBtn', this.wrap).css({ background: 'rgba(0, 0, 0, .6)' })
            , () => $('.my-rBtn', this.wrap).css({ background: 'rgba(0, 0, 0, .3)' })
          )
      // }
      // 小圆点
      if (this.showDots) {
        const dotsDom = $('<ul class="my-dots">')
          .css({
            margin: 0,
            padding: 0,
            position: 'absolute',
            bottom: '10px',
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-between',
            borderRadius: '10px',
            background: 'rgba(0, 0, 0, .2)',
            // zIndex: 100
          })
        if (this.dotsPos === 'center') {
          dotsDom.css({
            left: '50%',
            transform: 'translateX(-50%)',
          })
        }
        if (this.dotsPos === 'left') {
          dotsDom.css({
            left: 10,
          })
        } else if (this.dotsPos === 'right') {
          dotsDom.css({
            right: 10,
          })
        }
        this.domList.each((index, item) => {
          $('<li class="my-dotsItem">')
            .appendTo(dotsDom)
        });
        $(dotsDom).find('.my-dotsItem')
          .css({
            border: '5px solid rgba(255, 255, 255, .5)',
            borderRadius: '50%',
            margin: '5px',
            cursor: 'pointer'
          })
          .eq(0)
          .css('background', 'rgba(255, 255, 255, .8)')

        dotsDom.appendTo(this.wrap);
      }
    }
    // 轮播图的点击事件，按钮和小圆点，还有鼠标悬停要不要停止轮播
    slideEvent() {
      // 是否自动轮播
      if (this.isAuto) {
        clearInterval(this.autoTimer)
        this.startAuto();
        $(this.wrap).hover(
          () => {
            if (this.isHoverPause) clearInterval(this.autoTimer)
          },
          
          () => {
            clearInterval(this.autoTimer)
            this.startAuto()
          }
        );
      }
      if (this.showBtn) {
        $('.my-btn', this.wrap).css('display', 'inline-block')
      }
      if (this.isHoverBtn) {
        $(this.wrap).hover(
          () => $('.my-btn', this.wrap).css('display', 'inline-block'),
          () => $('.my-btn', this.wrap).css('display', 'none')
        )
        this.showBtn = true;
      }
      // 右按钮 
      $('.my-rBtn', this.wrap)
        .on('click', () => {
          if (this.lock) {
            return;
          }
          if (this.curIndex === this.len) {
            this.curIndex = 1;
            if (this.animateType === 'animation') {
              $('.my-img', this.wrap).css({
                left: 0
              });
            }

          } else {
            this.curIndex++;
          }
          this.changeSlide(this.curIndex);
        });
      // 左按钮
      $('.my-lBtn', this.wrap)
        .on('click', () => {
          if (this.lock) {
            return;
          }
          if (this.curIndex === 0) {
            this.curIndex = this.len - 1;
            if (this.animateType === 'animation') {
              $('.my-img', this.wrap).css({
                left: -this.len * this.width
              });
            }
          } else {
            this.curIndex--;
          }
          this.changeSlide(this.curIndex);
        });
      // 悬停小圆点切换图片
      if (this.showDots) {
        $('.my-dotsItem', this.wrap).each((index, item) => {
          $(item).hover(() => {
            this.changeSlide(index)
            $('.my-dotsItem', this.wrap).eq(index).css('background', 'rgba(255, 255, 255, .8)')
          })
        })
      }
    }
    // 根据索引切换图片,以及显示对应的小圆点
    changeSlide(index) {
      this.lock = true;
      if (this.animateType === 'animation') {
        // if (index !== this.len) {
        $('.my-img', this.wrap)
          .animate({
            left: -index * this.width
          }, this.animateTime, () => this.lock = false)
        // }
      } else if (this.animateType === 'fade') {
        $('.my-item', this.wrap).each((i, item) => {
          if (i !== index) {
            $(item).fadeOut();
          }
        })
        $('.my-item', this.wrap).eq(index).fadeIn(this.animateTime, () => this.lock = false);
      }

      if (this.showDots) {
        $('.my-dotsItem', this.wrap).each((index, item) => $(item).css('background', 'rgba(255, 255, 255, .5)'))
        $('.my-dotsItem', this.wrap).eq(index % this.len).css('background', 'rgba(255, 255, 255, .8)')
      }
    }
    // 开启自动轮播
    startAuto() {
      this.autoTimer = setInterval(() => {
        if (this.curIndex === this.len) {
          this.curIndex = 1;
          $('.my-img', this.wrap).css({
            left: 0
          });
        } else {
          this.curIndex++;
        }
        this.changeSlide(this.curIndex);
      }, this.autoTime);
    }
  }

  // 把轮播图封装成jq的一个工具方法，可以直接调用
  $.fn.extend({
    slideshow: function (options) {
      const slide = new Slide(options, this);
      slide.createElement();
      slide.initStyle();
      slide.slideEvent();
    }
  })

}());