anime({
  targets: '.cuadrado',
  translateX: 100,
  duration: 400,
})

var path = anime.path('.svg path')

anime({
  targets: '#emoji',
  translateX: path('x'),
  translateY: path('y'),
  easing: 'linear',
  duration: 5000,
  loop: true,
})

anime({
  targets: '#demo-svg2 polygon',
  points: [
    { value: '150 450 , 50 300 , 150 150 , 650 150 , 700 450' },
    { value: '350 350 , 300 300 , 350 250 , 450 200 , 500 350' },
    { value: '150 450 , 50 300 , 150 150 , 650 150 , 700 450' },
  ],
  easing: 'easeOutQuad',
  duration: 2500,
  loop: true,
})
