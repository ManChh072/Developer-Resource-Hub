//all variables 
const lightElement = document.getElementById('lightBox');
const darkElement = document.getElementById('darkBox');
const bodyElement = document.querySelector('body');
const containerElement = document.getElementsByClassName("container");
const clock = document.getElementById('time');
const day = document.getElementById('date');
//will create black box when hovering over
/*function sizeChange(){
    containerElement.style.height = '40vh';  
}*/
function lightHover(){
    lightElement.style.backgroundColor = 'black';
    lightElement.style.padding= '20%';
}
function lightUnhover() {
    lightElement.style.backgroundColor = '#1F292B';

}
function darkHover(){
    darkElement.style.backgroundColor = 'black';
    darkElement.style.padding= '20%';
}
function darkUnhover (){
    darkElement.style.backgroundColor = '#1F292B';
}
//changing background color of webpage
function backColorChange(){
    bodyElement.style.backgroundColor = 'black';
}
function normalColor (){
    bodyElement.style.backgroundColor = '#1F292B';
}
//executes the functions
lightElement.addEventListener('mouseenter',lightHover);
lightElement.addEventListener('mouseleave', lightUnhover);
darkElement.addEventListener('mouseenter', darkHover);
darkElement.addEventListener('mouseleave',darkUnhover);
lightElement.addEventListener('click',normalColor);
darkElement.addEventListener('click',backColorChange);
//containerElement.addEventListener('mouseenter',sizeChange);
//adding time functionality to page
setInterval(() => {
    const currentTime = new Date();
    clock.innerHTML = currentTime.toLocaleTimeString();
})

day.innerHTML = new Date().toDateString();
