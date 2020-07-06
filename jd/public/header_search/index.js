const logo_bg = $('.logo_bg');
let logo_lock = false;
let logo_content_lock = false;
logo_bg.ready(function () {
  logo_bg.mouseenter(function () {
    if (logo_lock) return;
    logo_lock = true;
    logo_content_lock = false;

    logo_bg
      .fadeIn(1000)
      .css('background', 'url("http://img1.360buyimg.com/da/jfs/t1/17098/23/11599/160999/5c90a484E27dd5514/7287f0d182775168.gif?v=' + Math.random() * 10000 + '")')
    setTimeout(() => {

      $('.logo_bg_content')
        .fadeIn(4000, function () {
          if (logo_content_lock) {
            $('.logo_bg_content').fadeOut();
            logo_bg.css('background', 'url("./public/header_search/img/sprite.png")').removeClass('logo_show');
          }
        });
      logo_lock = false;
      logo_bg.addClass('logo_show');
    }, 4000);
  })
    .mouseleave(function () {
      logo_content_lock = true;
      if (logo_bg.hasClass('logo_show')) {
        $('.logo_bg_content').fadeOut();
        logo_bg.css('background', 'url("./public/header_search/img/sprite.png")').removeClass('logo_show');
      }

    })
});

// 搜索推荐
$('.search_top_input').keydown(function () {
  setTimeout(() => {
    $.ajax({
      url: 'https://suggest.taobao.com/sug',
      method: 'get',
      dataType: 'jsonp',
      data: {
        code: 'utf-8',
        q: $(this).prop('value'),
        callback: 'search_res'
      }
    })
  }, 500);

});
// jsonp的callback函数
function search_res({ result }) {
  $('.search_input_ul')
    .text('')
    .mouseleave(function () {
      $('.search_input_ul').text('').off();
  })
  result.forEach(function (item) {
    $('.search_input_ul')
      .append($('<li class="search_input_item">').text(item[0]))
  })

}