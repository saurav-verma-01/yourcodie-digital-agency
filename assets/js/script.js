"use strict";

// Add event on multiple elements

const addEventOnElement = (elements, eventType, callback) => {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

// Navbar Toggle for Mobile

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavBar = () => {
  navbar.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

// Adding events on NavToggle Btn and Overlay

addEventOnElement([navToggleBtn, overlay], "click", toggleNavBar);
