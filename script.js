    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });
    
  var menu = document.querySelector("nav i");
  var full = document.querySelector("#full-scr")
  var navimg = document.querySelector(".nav-right")
  flag = 0
  menu.addEventListener("click", function() {
       if(flag == 0){
        full.style.top = 0
        menu.style.scale = 1.3
        flag = 1
       }
       else{
        full.style.top = "-100vh"
        menu.style.scale = 1
        flag = 0
       }
  });
