

function onTabClick(event) {
    let activeTabs = document.querySelectorAll('.active');
    
    
    activeTabs.forEach(function(tab) {
      tab.className = tab.className.replace('active', '');
    });
    
    // activate new tab and panel
    event.target.parentElement.className += ' active';
    document.getElementById(event.target.href.split('#')[1]).className += ' active';
  }
  
  const element = document.getElementById('nav-tab');
  
  element.addEventListener('click', onTabClick, false);

  document.getElementById("button1").addEventListener("click", function(event){
    event.preventDefault();
   handleFireButton();
});


document.getElementById("button2").addEventListener("click", function(event){
    event.preventDefault();
   handleFireButton();
});

document.getElementById("button3").addEventListener("click", function(event){
    event.preventDefault();
   handleFireButton();
});

document.getElementById("button4").addEventListener("click", function(event){
    event.preventDefault();
   handleFireButton();
});
