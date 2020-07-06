$('.location_ul li').each(function (index, item) {
  $(item).find('a').text(
    Mock.Random.province()
  )
})
