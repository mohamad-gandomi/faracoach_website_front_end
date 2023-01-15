//---------------------------------------------
//
//  Table of Contents
//
//    1. Toggle Active Class Btn Group
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