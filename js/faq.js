let queses = document.querySelectorAll(".queses .container .ques button"),
  answers = document.querySelectorAll(".queses .container .ques p");

queses.forEach((ele, i) => {
  ele.onclick = function () {
    answers.forEach((e, ind) => ind !== i && e.classList.remove("show"));
    answers[i].classList.toggle("show");
  };
});
