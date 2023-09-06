let chs = document.querySelectorAll(".one .inputs div");
let chs2 = document.querySelectorAll(".two .inputs div");
let chs3 = document.querySelectorAll(".color .inputs span");
let chs4 = document.querySelectorAll(".images .other-imgs img");
let formReview = document.querySelector(".review-form");
let addReviewBtn = document.querySelector(".add-review");
let countity = document.querySelector(".countity");
let addCountityBtn = document.querySelector(".add-countity");
let reduceCountityBtn = document.querySelector(".reduce-countity");

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

// Show Review Form
addReviewBtn.addEventListener("click", () => {
  formReview.classList.toggle("hide-form");
});

// Add & Reduce Countity
addCountityBtn.addEventListener("click", () => countity.innerHTML++);

reduceCountityBtn.addEventListener(
  "click",
  () => countity.innerHTML > 0 && countity.innerHTML--
);

// Change Img
chs4.forEach((ele) => {
  ele.onclick = function () {
    document.querySelector(".product .container .images img").src = ele.src;
  };
});
