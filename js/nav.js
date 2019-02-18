// JS goes here

const toggleMenu = () => {
    // Toggle the "menu--open" class on my open refence. 
  menu.classList.toggle('menu--open');
  
  }
  
  //  reference to the ".menu" class
  const menu = document.querySelector('.menu');
  // reference to the ".open" class
  const menuButton = document.querySelector('.open');
  // Using your menuButton reference, add a click handler that calls toggleMenu
  menuButton.addEventListener('click',  () => { toggleMenu() });
  
 // toggle Open and Close burger imgbutton 
  let toggle = false;
  const chngimg = () => {
      if (toggle === true) {
          document.querySelector('.open').src  = 'img/nav-hamburger.png';
      } else {
         document.querySelector('.open').src = 'img/nav-hamburger-close.png';
          
      }
      toggle = !toggle; 
  }
  
  