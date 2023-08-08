const lightElement = document.getElementById('lightBox');
const darkElement = document.getElementById('darkBox');
const bodyElement = document.querySelector('body');
//will create black box when hovering over
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
