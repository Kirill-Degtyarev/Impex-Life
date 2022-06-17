"use strict";

function onShowSelect(e) {
    let select = e.currentTarget.nextElementSibling;
    if (e.currentTarget.classList.contains("active")) {
        e.currentTarget.classList.remove("active");
        select.style.display = "none";
    } else {
        e.currentTarget.classList.add("active");
        select.style.display = "flex";
    }
}

function setLang(e) {
    let selectedLang = e.target.dataset.lang;
    let selectTitle = document.querySelector(".select__title");
    selectTitle.firstElementChild.innerText.toLowerCase() !== selectedLang ? (selectTitle.firstElementChild.innerText = selectedLang) : selectTitle.firstElementChild.innerText;
}

function onShowSelectMobile(e) {
    let select = e.currentTarget.nextElementSibling;
    if (e.currentTarget.classList.contains("active")) {
        e.currentTarget.classList.remove("active");
        select.style.display = "none";
    } else {
        e.currentTarget.classList.add("active");
        select.style.display = "flex";
    }
}

function openMobileMenu(e) {
    e.currentTarget.nextElementSibling.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeMobileMenu(e) {
    if (e.target.classList.contains("header-burger__menu-close")) {
        e.currentTarget.parentNode.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

function openMobileSearch() {
    let headerMobileBody = document.querySelector(".header-mobile__body");
    let headerMobileSearch = document.querySelector(".mobile-search");

    headerMobileBody.style.display = "none";
    headerMobileSearch.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeMobileSearch(e) {
    if (e.target.classList.contains("mobile-search")) {
        e.target.style.display = "none";
        e.target.previousElementSibling.style.display = "flex";
        document.body.style.overflow = "auto";
    }
}

function setLangMobile(e) {
    let selectedLang = e.target.dataset.lang;
    let selectTitle = document.querySelector(".select__title-mobile");
    selectTitle.firstElementChild.innerText.toLowerCase() !== selectedLang ? (selectTitle.firstElementChild.innerText = selectedLang) : selectTitle.firstElementChild.innerText;
}

document.addEventListener("keydown", (e) => {
    if (e.keyCode == 27) {
        closeModal();
        closePolicy();
    }
});

function openModal() {
    let phoneModal = document.querySelector(".phone__modal");

    document.body.style.overflow = "hidden";

    if (phoneModal.style.display == "none" || phoneModal.style.display == "") {
        phoneModal.style.display = "flex";
    }
}

function closeModal() {
    document.querySelector(".phone__modal").style.display = "none";
    document.body.style.overflow = "auto";
}

function openPolicy() {
    document.body.style.overflow = "hidden";
    document.querySelector(".page-privacy").style.display = "flex";
}

function closePolicy() {
    document.querySelector(".page-privacy").style.display = "none";
    document.body.style.overflow = "auto";
}

let itemModal = document.querySelectorAll(".menu-item__modal");

itemModal.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        el.children[0].classList.add("active");
        el.children[1].style.display = "flex";
    });
    el.addEventListener("mouseleave", () => {
        el.children[0].classList.remove("active");
        el.children[1].style.display = "none";
    });
});

function onShowEquip(e) {
    if (e.currentTarget.classList.contains("active")) {
        e.currentTarget.classList.remove("active");
        e.currentTarget.nextElementSibling.style.display = "none";
    } else {
        e.currentTarget.classList.add("active");
        e.currentTarget.nextElementSibling.style.display = "block";
    }
}

function tabsEquip(e, id) {
    let listTitle = document.querySelector(".burger-list__title");
    let listItems = document.querySelector(".burger-list");

    [...listItems.children].forEach((el) => {
        if (el.id == id) {
            el.style.display = "flex";
        } else {
            el.style.display = "none";
        }
    });
    [...listTitle.children].forEach((el, index, array) => {
        el.classList.remove("active-title");
    });
    e.currentTarget.classList.add("active-title");
}

function onShowComp(e) {
    if (e.currentTarget.classList.contains("active")) {
        e.currentTarget.classList.remove("active");
        e.currentTarget.nextElementSibling.style.display = "none";
    } else {
        e.currentTarget.classList.add("active");
        e.currentTarget.nextElementSibling.style.display = "block";
    }
}

function openSearch(e) {
    let navBar = document.querySelector(".nav-bar__menu");
    let navSearch = document.querySelector(".nav-bar__search");

    if (navBar.style.display == "flex" || navBar.style.display == "") {
        navBar.style.display = "none";
        navSearch.style.display = "flex";
        document.querySelector(".action-item__search").innerHTML = `<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.547 1.70711C14.9375 1.31658 14.9375 0.683417 14.547 0.292893C14.1564 -0.0976311 13.5233 -0.0976311 13.1327 0.292893L7.83984 5.58579L2.54695 0.292893C2.15643 -0.0976311 1.52326 -0.0976311 1.13274 0.292893C0.742213 0.683417 0.742213 1.31658 1.13274 1.70711L6.42563 7L1.13274 12.2929C0.742213 12.6834 0.742213 13.3166 1.13274 13.7071C1.52326 14.0976 2.15643 14.0976 2.54695 13.7071L7.83984 8.41421L13.1327 13.7071C13.5233 14.0976 14.1564 14.0976 14.547 13.7071C14.9375 13.3166 14.9375 12.6834 14.547 12.2929L9.25406 7L14.547 1.70711Z" fill="#0A0A0A"/>
        </svg>
        `;
    } else {
        navBar.style.display = "flex";
        navSearch.style.display = "none";
        document.querySelector(".action-item__search").innerHTML = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33317 12.6667C3.33317 7.51209 7.51185 3.33341 12.6665 3.33341C17.8212 3.33341 21.9998 7.51209 21.9998 12.6667C21.9998 15.1819 21.005 17.4646 19.3873 19.143C19.3423 19.1778 19.2989 19.2158 19.2575 19.2571C19.2162 19.2985 19.1781 19.3419 19.1433 19.387C17.4649 21.005 15.1819 22.0001 12.6665 22.0001C7.51185 22.0001 3.33317 17.8214 3.33317 12.6667ZM20.1571 22.0423C18.1042 23.6847 15.5 24.6667 12.6665 24.6667C6.03909 24.6667 0.666504 19.2942 0.666504 12.6667C0.666504 6.03933 6.03909 0.666748 12.6665 0.666748C19.2939 0.666748 24.6665 6.03933 24.6665 12.6667C24.6665 15.4999 23.6847 18.1038 22.0427 20.1566L26.9432 25.0571C27.4639 25.5778 27.4639 26.4221 26.9432 26.9428C26.4225 27.4635 25.5782 27.4635 25.0575 26.9428L20.1571 22.0423Z" fill="#0A0A0A"/>
        </svg>`;
    }
}

let equipmentBtn = document.querySelectorAll(".equipment-btn");

equipmentBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
        equipmentBtn.forEach((el) => {
            el.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    });
});

let equipColumn = document.querySelectorAll(".equipment-column");

equipColumn.forEach((el) => {
    let equipDesc = el.querySelector(".column-item__info-description");
    el.addEventListener("mouseenter", (e) => {
        el.firstElementChild.classList.add("open-item");
        equipDesc.style.display = "flex";
    });
    el.addEventListener("mouseleave", (e) => {
        el.firstElementChild.classList.remove("open-item");
        equipDesc.style.display = "none";
    });
});

function onShowWish(e) {
    if (e.nextElementSibling.style.display == "none" || e.nextElementSibling.style.display == "") {
        e.style.display = "none";
        e.nextElementSibling.style.display = "flex";
    } else {
        e.nextElementSibling.style.display = "none";
    }
}
//-------activ btn modal by time-----------
let date = new Date();
let hours = date.getHours();
let btnByTime = document.querySelector(".btn-bytime");
let callButtons = document.querySelectorAll(".btn");

callButtons.forEach((el, index, array) => {
    el.addEventListener("click", (e) => {
        const self = e.currentTarget;
        let inputTime = document.querySelector("#input-time");

        callButtons.forEach((el) => {
            el.classList.remove("active-btn");
        });

        self.classList.add("active-btn");

        if (self.classList.contains("disabled-btn")) self.classList.remove("active-btn");

        if (array[1].classList.contains("active-btn")) {
            inputTime.setAttribute("required", true);
        } else {
            inputTime.removeAttribute("required");
        }
    });
});

if (hours > 9 && hours < 18) {
    btnByTime.classList.remove("disabled-btn");
} else {
    btnByTime.classList.add("disabled-btn");
}

//-------get name---------
let formModal = document.querySelector(".modal-content__form");
let spanName = document.querySelector(".request-name");

formModal.addEventListener("submit", getNameModal);

function getNameModal(e) {
    e.preventDefault();
    let formName = formModal.querySelector("#userNameForm");
    let userName = formName.value;
    showRequest();
    setClientName(userName);
    closeModal();
}

function setClientName(name) {
    spanName.innerText = name;
}

// -------slider----------

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides((slideIndex += 1));
}

function minusSlide() {
    showSlides((slideIndex -= 1));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider-item");
    document.querySelector(".count-all").innerHTML = `${slides.length}`;
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    document.querySelector(".count-slide").innerHTML = `${slideIndex}`;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

    for (i = 0; i < slides.length; i++) {
        if (slides[i].style.display == "block") {
            document.querySelector(".sliders-body__title").innerHTML = `${slides[i].childNodes[1].dataset.desc}`;
        }
    }
}

//-------------map---------------

const linksForMap = document.querySelectorAll(".list-menu-item");
const linksMap = document.querySelectorAll(".map a");
const menuItem = document.querySelectorAll(".list-menu-item");

menuItem.forEach((el, index, array) => {
    const dopListLength = array[index].nextElementSibling.childElementCount;

    array[0].classList.add("active-item");
    array[0].nextElementSibling.style.display = "flex";
    array[index].lastElementChild.innerText = dopListLength;

    el.addEventListener("click", (e) => {
        let selfItem = e.currentTarget;
        menuItem.forEach((el) => {
            el.classList.remove("active-item");
            el.nextElementSibling.style.display = "none";
        });
        selfItem.classList.add("active-item");
        selfItem.nextElementSibling.style.display = "flex";
    });
});

let moscowEl = document.querySelector(`.map a[href="#moscow"]`);
moscowEl.childNodes[1].setAttribute("r", 60);
moscowEl.childNodes[1].setAttribute("opacity", 0.9);
moscowEl.insertAdjacentHTML("afterend", `<circle cx="98.9087" cy="280" r="5" fill="white"/>`);

linksForMap.forEach((el) => {
    el.addEventListener("click", (e) => {
        let self = e.currentTarget.firstElementChild;
        let selfClass = self.getAttribute("href");
        let currentElement = document.querySelector(`.map a[href="${selfClass}"]`);
        let currentElementAll = document.querySelectorAll(`.map a`);
        let cxCoord = currentElement.childNodes[1].getAttribute("cx");
        let cyCoord = currentElement.childNodes[1].getAttribute("cy");

        if (currentElement) {
            currentElementAll.forEach((el) => {
                let circle = el.nextSibling;
                if (circle.nodeName == "circle") {
                    el.childNodes[1].setAttribute("r", 5);
                    el.childNodes[1].setAttribute("opacity", 1);
                    el.nextSibling.remove();
                }
            });
            currentElement.childNodes[1].setAttribute("r", 60);
            currentElement.childNodes[1].setAttribute("opacity", 0.9);
            currentElement.insertAdjacentHTML("afterend", `<circle cx="${cxCoord}" cy="${cyCoord}" r="5" fill="white"/>`);
        }
    });
});
//----check name--------------
function checkName(e) {
    const value = e.value;
    e.value = value.replace(/[^А-яЁё ]/g, "");
    if (value == e.value) {
        e.classList.remove("error");
    } else {
        e.classList.add("error");
    }
}
//----check tel--------------
window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll(".tel"), function (input) {
        let keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            let pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            let matrix = "+7 (___) ___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i);
            }
            let reg = matrix
                .substr(0, this.value.length)
                .replace(/_+/g, function (a) {
                    return "\\d{1," + a.length + "}";
                })
                .replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58)) this.value = new_value;
            if (keyCode > 47 && keyCode < 58) {
                input.classList.remove("error");
            } else {
                input.classList.add("error");
            }

            if (event.type == "blur" && this.value.length < 5) this.value = "";
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);
    });
});

//----------request

let main = document.querySelector(".main");

function showRequest() {
    [...main.children].forEach((el, index, array) => {
        el.style.display = "none";
        array[6].style.display = "block";
    });
    window.scrollTo(0, 0);
}

function comeBack() {
    [...main.children].forEach((el, index, array) => {
        el.style.display = "block";
        array[6].style.display = "none";
    });
}
