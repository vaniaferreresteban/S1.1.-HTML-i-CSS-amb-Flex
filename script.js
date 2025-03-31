"use strict";

function assignActiveFeaturesNav(selected) {
  for (
    let i = 0;
    i <
    document.getElementById("features-nav").getElementsByTagName("div").length;
    i++
  ) {
    document.getElementById("features-nav").getElementsByTagName("div")[
      i
    ].className -= "active";
    document
      .getElementById("tabs")
      .getElementsByClassName("tab")
      [i].classList.remove("active");
  }
  document
    .getElementById("features-nav")
    .getElementsByTagName("div")
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
      [selected].className == "active"
  ) {
    return document
      .getElementById("faq")
      .getElementsByTagName("li")
      [selected].className-="active";
  }
  for (
    let i = 0;
    i < document.getElementById("faq").getElementsByTagName("li").length;
    i++
  ) {
    document
      .getElementById("faq")
      .getElementsByTagName("li")
      [i].className-="active";
  }
  document
    .getElementById("faq")
    .getElementsByTagName("li")
    [selected].classList="active";
}

window.addEventListener("load", function () {
  document
    .getElementById("features-nav")
    .getElementsByTagName("div")[0]
    .classList.add("active");
  document
    .getElementById("tabs")
    .getElementsByClassName("tab")[0]
    .classList.add("active");
});
