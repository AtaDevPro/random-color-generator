
"use strict";

const container = document.querySelector(".container");
const colorBoxText = document.querySelector(".random-color-text");
const btn = document.querySelector(".btn");
const dev = document.querySelector(".dev");

let isFirstClick = true;

// تابع تولید عدد تصادفی بین min و max
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// تابع ساخت رنگ تصادفی در فرمت rgb
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// رویداد کلیک روی دکمه
btn.addEventListener("click", function () {
  const color = randomColor();

  // تغییر رنگ پس‌زمینه
  container.style.backgroundColor = color;

  // نمایش کد رنگ
  colorBoxText.textContent = `Color Code: ${color}`;

  // نمایش متن dev فقط بار اول
  if (isFirstClick) {
    dev.classList.remove("hidden");
    isFirstClick = false;
  }
});
