//OPEN AND CLOSE MENU
const menuMobileElements = {
    hamburger: document.getElementById("hamburger"),
    closeIcon: document.getElementById("close-icon"),
    menuMobile: document.querySelector(".menu-mobile")
};

const openMenu = () => {
    menuMobileElements.hamburger.style.display = "none";
    menuMobileElements.closeIcon.style.display = "block";
    menuMobileElements.menuMobile.style.display = "block";
};

const closeMenu = () => {
    menuMobileElements.hamburger.style.display = "block";
    menuMobileElements.closeIcon.style.display = "none";
    menuMobileElements.menuMobile.style.display = "none";
};

//DROPDOWN MOBILE
const dropDownMobile = {
    drop1: document.getElementsByClassName("drop-content-mobile")[0],
    drop2: document.getElementsByClassName("drop-content-mobile")[1],
    drop3: document.getElementsByClassName("drop-content-mobile")[2],
    arrowDown1: document.getElementsByClassName("fas fa-angle-down")[3],
    arrowDown2: document.getElementsByClassName("fas fa-angle-down")[4],
    arrowDown3: document.getElementsByClassName("fas fa-angle-down")[5],
    arrowUp1: document.getElementsByClassName("fas fa-angle-up")[3],
    arrowUp2: document.getElementsByClassName("fas fa-angle-up")[4],
    arrowUp3: document.getElementsByClassName("fas fa-angle-up")[5]
};

const dropDownMobileManager = dropValue => {
    switch (dropValue) {
        case "dropMobile1":
            dropDownMobile1();
            break;
        case "dropMobile2":
            dropDownMobile2();
            break;
        case "dropMobile3":
            dropDownMobile3();
            break;
        default:
            break;
    }
};

const dropDownMobile1 = () => {
    if (dropDownMobile.drop1.style.display === "flex") {
        dropDownMobile.drop1.style.display = "none";

        dropDownMobile.arrowUp1.style.display = "none";
        dropDownMobile.arrowDown1.style.display = "block";
    } else if (dropDownMobile.drop2.style.display === "flex" || dropDownMobile.drop3.style.display === "flex") {
        dropDownMobile.drop2.style.display = "none";
        dropDownMobile.drop3.style.display = "none";
        dropDownMobile.drop1.style.display = "flex";

        dropDownMobile.arrowUp1.style.display = "block";
        dropDownMobile.arrowDown1.style.display = "none";

        dropDownMobile.arrowUp2.style.display = "none";
        dropDownMobile.arrowDown2.style.display = "block";

        dropDownMobile.arrowUp3.style.display = "none";
        dropDownMobile.arrowDown3.style.display = "block";
    } else {
        dropDownMobile.drop1.style.display = "flex";

        dropDownMobile.arrowUp1.style.display = "block";
        dropDownMobile.arrowDown1.style.display = "none";
    }
};

const dropDownMobile2 = () => {
    if (dropDownMobile.drop2.style.display === "flex") {
        dropDownMobile.drop2.style.display = "none";

        dropDownMobile.arrowUp2.style.display = "none";
        dropDownMobile.arrowDown2.style.display = "block";
    } else if (dropDownMobile.drop1.style.display === "flex" || dropDownMobile.drop3.style.display === "flex") {
        dropDownMobile.drop1.style.display = "none";
        dropDownMobile.drop3.style.display = "none";
        dropDownMobile.drop2.style.display = "flex";

        dropDownMobile.arrowUp2.style.display = "block";
        dropDownMobile.arrowDown2.style.display = "none";

        dropDownMobile.arrowUp1.style.display = "none";
        dropDownMobile.arrowDown1.style.display = "block";

        dropDownMobile.arrowUp3.style.display = "none";
        dropDownMobile.arrowDown3.style.display = "block";
    } else {
        dropDownMobile.drop2.style.display = "flex";

        dropDownMobile.arrowUp2.style.display = "block";
        dropDownMobile.arrowDown2.style.display = "none";
    }
};

const dropDownMobile3 = () => {
    if (dropDownMobile.drop3.style.display === "flex") {
        dropDownMobile.drop3.style.display = "none";

        dropDownMobile.arrowUp3.style.display = "none";
        dropDownMobile.arrowDown3.style.display = "block";
    } else if (dropDownMobile.drop1.style.display === "flex" || dropDownMobile.drop2.style.display === "flex") {
        dropDownMobile.drop1.style.display = "none";
        dropDownMobile.drop2.style.display = "none";
        dropDownMobile.drop3.style.display = "flex";

        dropDownMobile.arrowUp3.style.display = "block";
        dropDownMobile.arrowDown3.style.display = "none";

        dropDownMobile.arrowUp2.style.display = "none";
        dropDownMobile.arrowDown2.style.display = "block";

        dropDownMobile.arrowUp1.style.display = "none";
        dropDownMobile.arrowDown1.style.display = "block";
    } else {
        dropDownMobile.drop3.style.display = "flex";

        dropDownMobile.arrowUp3.style.display = "block";
        dropDownMobile.arrowDown3.style.display = "none";
    }
};