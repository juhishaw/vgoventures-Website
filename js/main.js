window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("nav_bar").className = "scroll_nav";
      $('.nav>li>a').css('color','#454545');
      $('.scl_lst li a').css('color','#454545');
      $('.right_bar_call').css('color','#454545');
      $('.hamburger').css('color','#454545');
   
  } else {
      document.getElementById("nav_bar").className = "hdr";
        $('.nav>li>a').css('color','#ffffff'); 
        $('.scl_lst li a').css('color','#ffffff');
        $('.right_bar_call').css('color','#ffffff');
        $('.hamburger').css('color','#ffffff');
  }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}


