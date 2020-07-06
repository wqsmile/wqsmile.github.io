$('.seckill_slide_item a').each(function (index, item) {
    var a = Mock.Random.image('140x140', Random.color(), Random.color(), 'jpg', Random.name())
    $(item).find('img')[0].src = a;
});
$('.seckill_slide_item2').each(function (index, item) {
  var a = Mock.Random.image('120x120', Random.color(), Random.color(), 'jpg', Random.name())
  $(item).find('a img')[0].src = a;
});

$('.seckill_slide').slideshow({
  domList: $('.seckill_slide_img .seckill_slide_item'),
  animateType: 'animation',
  isAuto: false,
  showBtn: true,
  showDots: false,
  isHoverPause: true,
  autoTime: 3000,
  animateTime: 700,
  width: 800,
  height: 260
});

$('.seckill_silde_field').slideshow({
  domList: $('.seckill_slide_img2 .seckill_slide_item2'),
  animateType: 'animation',
  isAuto: true,
  showBtn: false,
  showDots: false,
  isHoverPause: true,
  autoTime: 3000,
  animateTime: 700,
  width: 180,
  height: 240
});


// const end_time = $('.seckill_end_time').text().split(':');
// console.log(end_time);
// const end_hour = parseInt(end_time[0]);
// const end_minute = parseInt(end_time[1]);

let end_hour = 0;
while (end_hour <= new Date().getHours()) {
  end_hour = Mock.mock({
    'number2|1-24': 1
  }).number2;
}
// console.log(end_time, new Date().getTime());

const end_minute = 0;

$('.seckill_end_time').text(end_hour + ':00');



const timer = setInterval(() => {

  const now = new Date();
  now_hour = now.getHours();
  now_minute = now.getMinutes();
  now_second = now.getSeconds();

  let sub_hour = end_hour - now_hour - 1;
  let sub_minute = 59 - now_minute;
  let sub_second = 59 - now_second;

  if (sub_hour < 10) {
    sub_hour = '0' + sub_hour;
  }
  if (sub_minute < 10) {
    sub_minute = '0' + sub_minute;
  }
  if (sub_second < 10) {
    sub_second = '0' + sub_second;
  }

  $('.seckill_time_h').text(sub_hour);
  $('.seckill_time_m').text(sub_minute);
  $('.seckill_time_s').text(sub_second);

  if (sub_hour.toString() === '00' && sub_minute.toString() === '00' && sub_second.toString() === '00') {
    clearInterval(timer);
    console.log('倒计时结束');
    
  }
}, 1000);



