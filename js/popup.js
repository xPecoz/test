let popup = document.querySelector(".popup");
let shopButton = document.querySelector(".popup-btn");
let closePopupButton = document.querySelector(".uil-times");
let floatDivBuyBtn = document.querySelector(".buy-now");
let chs = document.querySelectorAll(".one .inputs div");
let chs2 = document.querySelectorAll(".two .inputs div");
let chs3 = document.querySelectorAll(".color .inputs span");
let chs4 = document.querySelectorAll(".images .other-imgs img");
let countity = document.querySelector(".countity");
let addCountityBtn = document.querySelector(".add-countity");
let reduceCountityBtn = document.querySelector(".reduce-countity");
let formReview = document.querySelector(".review-form");
let addReviewBtn = document.querySelector(".add-review");

// Show Popup
shopButton.addEventListener("click", () => {
  popup.classList.add("show-popup");
});

floatDivBuyBtn.addEventListener("click", () => {
  popup.classList.add("show-popup");
});

// Hide Popup
closePopupButton.addEventListener("click", () => {
  popup.classList.remove("show-popup");
});

// Choose Product Detail
function add(eles) {
  eles.forEach((ele) => {
    ele.onclick = function () {
      eles.forEach((e) => e.classList.remove("active"));
      ele.classList.add("active");
    };
  });
}

add(chs);
add(chs2);
add(chs3);
add(chs4);

// Add & Reduce Countity
addCountityBtn.addEventListener("click", () => countity.innerHTML++);

reduceCountityBtn.addEventListener(
  "click",
  () => countity.innerHTML > 0 && countity.innerHTML--
);

// Show Review Form
addReviewBtn.addEventListener("click", () => {
  formReview.classList.toggle("hide-form");
});
