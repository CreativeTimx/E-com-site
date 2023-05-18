//navBar fuction

function menuBtn(e){
    var navBar = document.querySelector('.navBar');
    e.name = e.name === 'menu-outline' ? 'close-outline' : 'menu-outline';
   
    navBar.classList.toggle('opacity-0');
}