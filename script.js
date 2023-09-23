const menu = document.querySelector('#mobile_menu')
const menu_links = document.querySelector('.navbar_menu')
let btn = document.querySelector('.btn');
let btn1 = document.querySelector('.btn1');
let quizdiv = document.getElementById('quiz-btn');
let quizdiv1 = document.getElementById('quiz-btn1');
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menu_links.classList.toggle('active')
})

btn.addEventListener('click', ()=>{
  quizdiv.innerHTML= '<iframe src="https://take.quiz-maker.com/QLDVMYO7J" width="90%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>'
  
})

btn1.addEventListener('click', ()=>{
  quizdiv1.innerHTML= '<iframe src="https://take.quiz-maker.com/Q6B7HG725#R135258-05EecA9C" width="90%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>'
})