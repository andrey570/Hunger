const calculator = document.getElementById("calculator");
const calculate = () => {
    let data = prompt("Привет! Я калькулятор. Напишите выражение которое хотите посчитать!", "");
    if (data === null) {
        alert("Ввод отменен");
    } else {
        try {
            data = data.replace(/,/g, ".");
            let result = eval(data);
            if (data === "") {
                alert("Вы ничего не ввели");

            } else if (result === Infinity || result === -Infinity) {
                alert("На ноль делить нельзя!");
            } else if (isNaN(result)) {
                messageError();
            } else {
                alert(result);
            }
        } catch {
            messageError();
        }

    }
}
const messageError = () => alert("Введите корректное выражение!");
calculator.addEventListener("click", calculate);
//calculator.onclick = () => alert("Hello");


const menuAdaptive = document.getElementById("menu-adaptive");
const menu = document.getElementById("menu");
const toggleClassName = (elem, className) => elem.classList.toggle(className);
menuAdaptive.addEventListener("click", () => toggleClassName(menu, "menu-none"));


// form
const login = document.getElementById("login");
const formTest = document.getElementById("form-test");
const closeForm = document.getElementById("close-form");

login.addEventListener("click", () => toggleClassName(formTest, "form-none"))
login.addEventListener("click", () => toggleClassName(login, "form-none"))
closeForm.addEventListener("click", () => toggleClassName(formTest, "form-none"))
closeForm.addEventListener("click", () => toggleClassName(login, "form-none"))

// slider
const slides = document.getElementById("slides");
const slide = document.querySelectorAll(".slide");
const togglePrev = document.getElementById("toggle-prev");
const toggleNext = document.getElementById("toggle-next");
const toggleRadio = document.getElementById("toggle-radio");
const toggleInput = toggleRadio.querySelectorAll("input");
const slideMin = document.querySelectorAll(".slide-min")
const slidesMin = document.getElementById("slides-min")

let slideTime = 2000;
let currentSlide = 0;
let slideInterval;


function continueSlideInterval() {
    slideInterval = setInterval(nextSlide, slideTime)
}
function stopSlide() {
    clearInterval(slideInterval)
}
function nextSlide() {
    slideReset()
    currentSlide = ++currentSlide % slide.length;
    slideSet();
}
function showNextSlide() {
    stopSlide();
    nextSlide();
}
function showPrevSlide() {
    stopSlide();
    slideReset();
    currentSlide = (currentSlide === 0) ? slide.length - 1 : currentSlide - 1;
    slideSet();
}
function slideReset() {
    slide[currentSlide].className = "slide";
    slideMin[currentSlide].className = "slide-min";
}
function slideSet() {
    slide[currentSlide].className = "slide showing";
    toggleInput[currentSlide].checked = true;
    slideMin[currentSlide].className = "slide-min slide-active";
}
function toggleSlide(event) {
    stopSlide()
    slideReset()
    currentSlide = event.target.value;
    slideSet()
}
function toggleMinSlide(event) {
    if (event.target.tagName === "IMG") {
        stopSlide()
        slideReset()
        currentSlide = event.target.id;
        slideSet()
    }
}

continueSlideInterval()
slides.addEventListener("mouseover", stopSlide)
slides.addEventListener("mouseout", continueSlideInterval)
toggleNext.addEventListener("click", showNextSlide)
togglePrev.addEventListener("click", showPrevSlide)
toggleRadio.addEventListener("input", toggleSlide)
slidesMin.addEventListener("click", toggleMinSlide)