'use strict'
 //---sticky navbar menu---// 
 const nav = document.querySelector('.nav')
 window.addEventListener('scroll', fixNav)

 function fixNav() {
  if(window.scrollY > nav.offsetHeight + 150){
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
 }

 //---slider cards---//
 const panels = document.querySelectorAll('.panel')
 panels.forEach((panel) => {
     panel.addEventListener('click', () => {
      removeActiveClasses()
      panel.classList.add('active')
     })
 }) 
function removeActiveClasses() {
   panels.forEach(panel => {
    panel.classList.remove('active')
   })
}