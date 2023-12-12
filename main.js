import "./style.scss";
import gsap from "gsap";

const heroButton = document.querySelector(".hero-button");
const waitlistButton = document.querySelector(".waitlist-button");
const waitlistClose = document.querySelector(".waitlist-close");

const tl = gsap.timeline();

heroButton.addEventListener("click", () => {
  tl.to(".bg", {
    scale: 1.1,
  });
  tl.to(".blur", {
    opacity: 1,
    delay: -.3,
  });
  //
  tl.to(".hero-button", {
    y: -50,
    delay: -.3,
  });
  tl.to(".hero-button", {
    y: 200,
  });
  //
  tl.to(".waitlist-input", {
    opacity: 1,
    y: 0,
  });
  tl.to(".waitlist-input", {
    width: "610px",
  });
  tl.to(".waitlist-input", {
    width: "500px",
  });
  //
  tl.to(".waitlist-close", {
    opacity: 1,
  });
});

waitlistClose.addEventListener("click", () => {
  tl.to(".waitlist-close", {
    opacity: 0,
  });
  //
  tl.to(".waitlist-input", {
    width: "610px",
  });
  tl.to(".waitlist-input", {
    width: "167px",
  });
  tl.to(".waitlist-input", {
    y: -50,
  });
  tl.to(".waitlist-input", {
    opacity: 0,
    y: "150px",
  });
  //
  tl.to(".hero-button", {
    y: -50,
  });
  tl.to(".hero-button", {
    y: 0,
  });
  gsap.to(".blur", {
    opacity: 0,
    delay: .3,
  });
  gsap.to(".bg", {
    scale: 1,
    delay: .3,
  });
});
