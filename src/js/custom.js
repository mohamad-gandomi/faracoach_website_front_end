//---------------------------------------------
//
//  Table of Contents
//
//    1. Toggle Active Class Btn Group
//    2. Countdown Timer
//    3. Tab Content
//    4. Show Password Toggle
//
//---------------------------------------------


//---------------------------------------------
// 1. Toggle Active Class Btn Group
//---------------------------------------------
const loginRegisterBtns = document.querySelectorAll(".register-btn-group button");

loginRegisterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    loginRegisterBtns.forEach(f => f.classList.remove('active'));
    e.target.classList.toggle("active");
  });
});

//---------------------------------------------
// 2. Countdown Timer
//---------------------------------------------

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === "complete") {
      var clockdiv = document.getElementsByClassName("clockdiv");
      var countDownDate = new Array();
      for (var i = 0; i < clockdiv.length; i++) {
          countDownDate[i] = new Array();
          countDownDate[i]['el'] = clockdiv[i];
          countDownDate[i]['time'] = new Date(clockdiv[i].getAttribute('data-date')).getTime();
          countDownDate[i]['days'] = 0;
          countDownDate[i]['hours'] = 0;
          countDownDate[i]['seconds'] = 0;
          countDownDate[i]['minutes'] = 0;
      }

      var countdownfunction = setInterval(function() {
          for (var i = 0; i < countDownDate.length; i++) {
              var now = new Date().getTime();
              var distance = countDownDate[i]['time'] - now;
              countDownDate[i]['days'] = Math.floor(distance / (1000 * 60 * 60 * 24));
              countDownDate[i]['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              countDownDate[i]['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              countDownDate[i]['seconds'] = Math.floor((distance % (1000 * 60)) / 1000);

              if (distance < 0) {
                  countDownDate[i]['el'].querySelector('.days').innerHTML = 0;
                  countDownDate[i]['el'].querySelector('.hours').innerHTML = 0;
                  countDownDate[i]['el'].querySelector('.minutes').innerHTML = 0;
                  countDownDate[i]['el'].querySelector('.seconds').innerHTML = 0;
              } else {
                  countDownDate[i]['el'].querySelector('.days').innerHTML = countDownDate[i]['days'];
                  countDownDate[i]['el'].querySelector('.hours').innerHTML = countDownDate[i]['hours'];
                  countDownDate[i]['el'].querySelector('.minutes').innerHTML = countDownDate[i]['minutes'];
                  countDownDate[i]['el'].querySelector('.seconds').innerHTML = countDownDate[i]['seconds'];
              }

          }
      }, 1000);
  }
});

//---------------------------------------------
// 3. Tab Content
//---------------------------------------------

$(function () {

  var activeIndex = $('.active-tab').index(),
      $contentlis = $('.tabs-content li'),
      $tabslis = $('.tabs li');
  
  // Show content of active tab on loads
  $contentlis.eq(activeIndex).show();

  $('.tabs').on('click', 'li', function (e) {
    var $current = $(e.currentTarget),
        index = $current.index();
    
    $tabslis.removeClass('active-tab');
    $current.addClass('active-tab');
    $contentlis.hide().eq(index).show();
     });
});

//---------------------------------------------
// 4. Show Password Toggle
//---------------------------------------------

$(".togglePassword").click(function (e) {
  e.preventDefault();
  var type = $(this).parent().parent().find(".password").attr("type");
  if(type == "password"){
      $(".isax").removeClass('isax-eye');
      $(".isax").addClass('isax-eye-slash');
      $(this).parent().parent().find(".password").attr("type","text");
  }else if(type == "text"){
    $(".isax").removeClass('isax-eye-slash');
    $(".isax").addClass('isax-eye');
      $(this).parent().parent().find(".password").attr("type","password");
  }
});