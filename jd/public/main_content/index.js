const Random = Mock.Random;
$('.main_center_item').each(function (index, item) {
  var a = Mock.Random.image('590x470', Random.color(), Random.color(), 'jpg', Random.name())
  $(item).find('a img')[0].src = a
});
$('.main_center2_item').each(function (index, item) {
  $(item).find('a').each(function (index, item) {
    var a = Mock.Random.image('190x150', Random.color(), Random.color(), 'jpg', Random.name())
    $(item).find('img')[0].src = a;
  })
});


$('.main_center').slideshow({
  domList: $('.main_center_slide .main_center_item'),
  animateType: 'fade',
  isAuto: true,
  showBtn: true,
  showDots: true,
  isHoverPause: true,
  autoTime: 4000,
  animateTime: 700,
  dotsPos: 'left',
  width: 590,
  height: 470
});
$('.main_center2').slideshow({
  domList: $('.main_center2_slide .main_center2_item'),
  animateType: 'fade',
  isAuto: true,
  showBtn: false,
  showDots: false,
  isHoverPause: true,
  isHoverBtn: true,
  autoTime: 3000,
  animateTime: 700,
  width: 190,
  height: 470
});

let menuList = [{
  titles: ['家用电器'],
  content: {
    tabs: ['家电馆', '镇乡专卖店', '家电服务'],
    subs: [{
      title: '电视',
      items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
    }, {
      title: '空调',
      items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
    }]
  }
}, {
  titles: ['手机', '运营商', '数码'],
  content: {
    tabs: ['手机'],
    subs: [{
      title: '手机',
      items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
    }, {
      title: '手表',
      items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
    }]
  }
}, {
  titles: ['电脑', '办公'],
  content: {
    tabs: ['家电馆', '镇乡专卖店', '家电服务'],
    subs: [{
      title: '电视',
      items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
    }, {
      title: '空调',
      items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
    }]
  }
}, {
  titles: ['家居', '家具', '家装', '厨具'],
  content: {
    tabs: ['家居', '镇乡专卖店', '家电服务'],
    subs: [{
      title: '电视',
      items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
    }, {
      title: '空调',
      items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
    }, {
      title: '电视',
      items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
    }, {
      title: '空调',
      items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
    }, {
      title: '电视',
      items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
    }, {
      title: '空调',
      items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
    }]
  }
},
{
  titles: ['家用电器'],
  content: {
    tabs: ['家电馆', '镇乡专卖店', '家电服务', '镇乡专卖店', '家电服务'],
    subs: [{
      title: '电视',
      items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
    }, {
      title: '空调',
      items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
    }]
  }
}, {
  titles: ['手机', '运营商', '数码'],
  content: {
    tabs: ['手机', '镇乡专卖店', '家电服务'],
    subs: [{
      title: '电视',
      items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
    }, {
      title: '空调',
      items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
    }, {
      title: '电视',
      items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
    }, {
      title: '空调',
      items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
    }, {
      title: '电视',
      items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
    }, {
      title: '空调',
      items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
    }]
  }
}, {
  titles: ['电脑', '办公'],
  content: {
    tabs: ['家电馆', '镇乡专卖店', '家电服务'],
    subs: [{
      title: '电视',
      items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
    }, {
      title: '空调',
      items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
    }]
  }
}, {
  titles: ['家居', '家具', '家装', '厨具'],
  content: {
    tabs: ['家居', '镇乡专卖店', '家电服务', '镇乡专卖店', '家电服务'],
    subs: [{
      title: '电视',
      items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
    }, {
      title: '空调',
      items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
    }, {
      title: '电视',
      items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
    }, {
      title: '空调',
      items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
    }, {
      title: '电视',
      items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
    }, {
      title: '空调',
      items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
    }]
  }
},
{
  titles: ['家用电器'],
  content: {
    tabs: ['家电馆', '镇乡专卖店', '家电服务', '镇乡专卖店', '家电服务'],
    subs: [{
      title: '电视',
      items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
    }, {
      title: '空调',
      items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
    }]
  }
}, {
  titles: ['手机', '运营商', '数码', '镇乡专卖店', '家电服务'],
  content: {
    tabs: ['手机'],
    subs: [{
      title: '手机',
      items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
    }, {
      title: '手表',
      items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
    }]
  }
}, {
  titles: ['电脑', '办公'],
  content: {
    tabs: ['家电馆', '镇乡专卖店', '家电服务'],
    subs: [{
      title: '电视',
      items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
    }, {
      title: '空调',
      items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
    }]
  }
}, {
  titles: ['家居', '家具', '家装', '厨具', '镇乡专卖店', '家电服务'],
  content: {
    tabs: ['家居', '镇乡专卖店', '家电服务', '镇乡专卖店', '家电服务', '镇乡专卖店', '家电服务'],
    subs: [{
      title: '电视',
      items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
    }, {
      title: '空调',
      items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
    }]
  }
}, {
  titles: ['家居', '家具', '家装', '厨具'],
  content: {
    tabs: ['家居', '镇乡专卖店', '家电服务', '镇乡专卖店', '家电服务'],
    subs: [{
      title: '电视',
      items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
    }, {
      title: '空调',
      items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
    }, {
      title: '电视',
      items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
    }, {
      title: '空调',
      items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
    }, {
      title: '电视',
      items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
    }, {
      title: '空调',
      items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
    }]
  }
},
{
  titles: ['家用电器'],
  content: {
    tabs: ['家电馆', '镇乡专卖店', '家电服务', '镇乡专卖店', '家电服务'],
    subs: [{
      title: '电视',
      items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
    }, {
      title: '空调',
      items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
    }]
  }
}, {
  titles: ['手机', '运营商', '数码', '镇乡专卖店', '家电服务'],
  content: {
    tabs: ['手机'],
    subs: [{
      title: '手机',
      items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
    }, {
      title: '手表',
      items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
    }]
  }
}, {
  titles: ['电脑', '办公'],
  content: {
    tabs: ['家电馆', '镇乡专卖店', '家电服务'],
    subs: [{
      title: '电视',
      items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
    }, {
      title: '空调',
      items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
    }]
  }
}];


const main_left_ul = $('.main_left_ul');
const main_left_content = $('.main_left_content');
const main_left_detail = $('<div class="main_left_detail">');
const main_left_detail_ul = $('<ul class="main_left_detail_ul">');
const main_left_dl = $('<dl class="main_left_dl">');
const main_left_img = $('<div class="main_left_img">');


menuList.forEach(function (item, index) {
  let main_left_item = $('<li class="main_left_item">');

  item.titles.forEach(function (item, index, arr) {
    main_left_item.append($('<a href="#"></a>').text(item));
    if (index !== arr.length - 1) {
      main_left_item.append($('<span>/</span>'));
    }
  })
  main_left_item.appendTo(main_left_ul);
});

function render(item) {

  main_left_detail
    .text('')
    .append(main_left_detail_ul.text(''))
    .appendTo(main_left_content);
  main_left_img
    .text('')
    .appendTo(main_left_content);
  main_left_content.show();

  const img = item.img;
  item = item.content;

  item.tabs.forEach(function (item, index) {
    $('<li><a href="#"><span></span><span class="iconfont icon-xiangyou"></span></a></li>')
      .appendTo(main_left_detail_ul)
      .find('span').eq(0)
      .text(item)
  });
  item.subs.forEach(function (item, index) {
    const main_left_dl = $('<dl class="main_left_dl">');
    $('<dt class="main_left_dt"><a href="#"><span></span><span class="iconfont icon-xiangyou"></span></a></dt>')
      .appendTo(main_left_dl)
      .find('span').eq(0)
      .text(item.title);
    const main_left_dd = $('<dd>')
    item.items.forEach(function (item) {
      $('<a href="#"></a>')
        .appendTo(main_left_dd)
        .text(item)
    });
    main_left_dd.appendTo(main_left_dl);
    main_left_dl.appendTo(main_left_detail);

  });

  // 图片区
  for (let i = 0; i < 3; i++) {
    var a = Mock.Random.image('168x134', Random.color(), Random.color(), 'jpg', Random.name())
    $('<a href="#"><img></a>')
    .appendTo(main_left_img)
    .find('img')
    .attr('src', a);
  }
}



$('.main_left_item').hover(function () {
  render(menuList[$(this).index()]);
  $(this).css('background', '#f5f5f5');
}, function () {
  main_left_content.hide();
  const self = this;
  $('.main_left_content').hover(function () {
    $(self).siblings().css('background', '#fff')
    $(self).css('background', '#f5f5f5');
    main_left_content.show();
  }, function () {
    main_left_content.hide();
    $(self).css('background', '#fff');
  });
  $(self).css('background', '#fff');
});


// 京东快报
const jd_letters = [
  '型男夏日潮搭“加戏”指南，酷炫腕表助你稳赚回头率',
  '超硬核的国货防晒，再也不怕晒黑晒老了！',
  '羊奶不仅营养高，适合国人体质才是关键！',
  '羊奶不仅营用爱呵护宝宝成长，奶粉竟也能如此“贴心”养高，适合国人体质才是关键！'
];
$('.jd_letters_content')
  .each(function (index, item) {
    $(item).text(jd_letters[index]);
  });

// 便捷区
let convenient_lock = false;

$('.convenient_row1').hover(function () {

  $('.convenient_show').animate({
    bottom: 10
  });

  // convenient_lock = false;
  $('a', '.convenient_show_ul')
    .hover(function () {
      $(this)
        .css({
          borderBottomColor: '#c81623',
          color: '#c81623'
        });
        $(this)
        .parent()
        .siblings()
        .find('a')
        .css({
          borderBottomColor: 'transparent',
          color: '#666'
        })
    });
}, function () {
  $('.convenient_close')
    .click(() => {
      $('.convenient_show').animate({
        bottom: -220
      }, 500);
    });


  let no_input = $('#no_input');
  let no_reg = /^(13|15|17|18|19)[0-9]{9}$/g;
  no_input.focus(function () {
    no_input.keyup(function (e) {
      if (e.keyCode >= 48 && e.keyCode <= 57) {
        if (no_input[0].value.length === 11 && !no_reg.test(no_input[0].value)) {
          $('.no_prompt').show()
        } else {
          $('.no_prompt').css('display', 'none')
        }
      } else if (parseInt(no_input[0].value).toString() !== no_input[0].value) {
        no_input[0].value = '';
      } else {
        $('.no_prompt').hide();
      }

    })
  })

});
