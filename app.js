const tl = gsap.timeline({ defaults: { duration: 0.35, ease: Power2.easeOut } })
const home = document.querySelector('.home')
const notifications = document.querySelector('.notifications')
const messages = document.querySelector('.messages')

// const homeTitle
//home
// bird box increase then decreases in size
// feather come out from middle with a stagger
// float left to right
// float down

// setting opacity to zero so onload the waves are hidden and appear when clicked
gsap.set('.feather', { scale: 0, transformOrigin: 'center' })

//Home Event Listener
home.addEventListener('click', () => {
  gsap.fromTo(
    '.home-svg',
    {
      scale: 1,
    },
    {
      scale: 0.9,
      yoyo: true,
      duration: 0.4,
      repeat: 1,
      ease: Power2.inOut,
    },
  ),
    gsap.fromTo(
      '.feather',
      { y: -5, scale: 0, transformOrigin: 'center' },
      { y: 20, scale: 1.5, duration: 1, stagger: 0.1 },
    )
  gsap.fromTo(
    '.right-feather',
    {
      x: 0,
    },
    { x: 5, duration: 0.4 },
  )
  gsap.fromTo('.left-feather', { x: 0 }, { x: -5, duration: 0.4 })
})

// notifications
// soundwaves come out from middle of bell and fade
// ringer goes back and forth two times
// bell body goes back and forth two times

gsap.set('.wave', { opacity: 0 })

notifications.addEventListener('click', () => {
  gsap.fromTo(
    '.bell',
    2,
    { rotation: -5, transformOrigin: 'top center' },
    { rotation: 0, ease: Elastic.easeOut.config(5, 0.2) },
  )
  gsap.fromTo(
    '.ringer',
    1.2,
    { rotation: -3, x: 0.5, transformOrigin: 'top center' },
    { rotation: 0, x: 0, ease: Elastic.easeOut.config(5, 0.2) },
  )

  gsap.fromTo(
    '.wave',
    {
      scale: 0,
      transformOrigin: 'bottom',
      opacity: 1,
    },
    { scale: 1.3, opacity: 0, duration: 1 },
  )
})

// messages timelines
// flap opens, message flies out
// we open flap by scaling, and add an increase in duration of 0.35 to make the fold look seamless

messages.addEventListener('click', () => {
  tl.fromTo('.messages-svg', { scale: 1 }, { scale: 0.9 }),
    tl.fromTo(
      '.flap',
      { scale: 1, y: 0, transformOrigin: 'top' },
      { scale: -1, y: 2 },
    ),
    tl.fromTo('.messages-svg', { scale: 0.9 }, { scale: 1 }, '-=0.35'),
    tl.fromTo(
      '.note',
      {
        y: 0,
        opacity: 1,
      },
      {
        y: -60,
        opacity: 0,
        duration: 0.7,
      },
    ),
    tl.to('.flap', { scale: 1, y: 0, transformOrigin: 'top' }, '-=0.35')
})
