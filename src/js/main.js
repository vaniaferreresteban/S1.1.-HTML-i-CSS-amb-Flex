// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
"use strict";

function assignActiveFeaturesNav(selected) {
  for (
    let i = 0;
    i <
    document.getElementById("features-nav").getElementsByTagName("li").length;
    i++
  ) {
    document.getElementById("features-nav").getElementsByTagName("li")[
      i
    ].classList.remove("active");
    document
      .getElementById("tabs")
      .getElementsByClassName("tab")
    [i].classList.remove("active");
  }
  document
    .getElementById("features-nav")
    .getElementsByTagName("li")
  [selected].classList.add("active");
  document
    .getElementById("tabs")
    .getElementsByClassName("tab")
  [selected].classList.add("active");
}
function assignActiveFAQ(selected) {

  if (
    document
      .getElementById("faq")
      .getElementsByTagName("li")
    [selected].classList.contains("active")
  ) {
    return document
      .getElementById("faq")
      .getElementsByTagName("li")
    [selected].classlist.remove("active");
  }
  for (
    let i = 0;
    i < document.getElementById("faq").getElementsByTagName("li").length;
    i++
  ) {
    document
      .getElementById("faq")
      .getElementsByTagName("li")
    [i].classList.remove("active");
  }
  document
    .getElementById("faq")
    .getElementsByTagName("li")
  [selected].classList.add("active");
}
document.querySelectorAll('[data-features-nav-li]').forEach(button => {
  button.addEventListener('click', function () {
    const selected = this.getAttribute('data-index');
    assignActiveFeaturesNav(parseInt(selected));
  });
});

window.addEventListener("load", function () {
  document
    .getElementById("features-nav")
    .getElementsByTagName("li")[0]
    .classList.add("active");
  document
    .getElementById("tabs")
    .getElementsByClassName("tab")[0]
    .classList.add("active");
});


