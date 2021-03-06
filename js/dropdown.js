const dropDownElements = {
    drop1: document.getElementsByClassName("drop-content")[0],
    drop2: document.getElementsByClassName("drop-content")[1],
    drop3: document.getElementsByClassName("drop-content")[2],
    arrowDown1: document.getElementsByClassName("fas fa-angle-down")[0],
    arrowDown2: document.getElementsByClassName("fas fa-angle-down")[1],
    arrowDown3: document.getElementsByClassName("fas fa-angle-down")[2],
    arrowUp1: document.getElementsByClassName("fas fa-angle-up")[0],
    arrowUp2: document.getElementsByClassName("fas fa-angle-up")[1],
    arrowUp3: document.getElementsByClassName("fas fa-angle-up")[2]
};

const dropDownDesktopManager = dropValue => {
    switch (dropValue) {
        case "drop1":
            dropDown1();
            break;
        case "drop2":
            dropDown2();
            break;
        case "drop3":
            dropDown3();
            break;
        default:
            break;
    }
};

const dropDown1 = () => {
    if (dropDownElements.drop1.style.display === "flex") {
        dropDownElements.drop1.style.display = "none";

        dropDownElements.arrowUp1.style.display = "none";
        dropDownElements.arrowDown1.style.display = "block";
    } else if (dropDownElements.drop2.style.display === "flex" || dropDownElements.drop3.style.display === "flex") {
        dropDownElements.drop2.style.display = "none";
        dropDownElements.drop3.style.display = "none";
        dropDownElements.drop1.style.display = "flex";

        dropDownElements.arrowUp1.style.display = "block";
        dropDownElements.arrowDown1.style.display = "none";

        dropDownElements.arrowUp2.style.display = "none";
        dropDownElements.arrowDown2.style.display = "block";

        dropDownElements.arrowUp3.style.display = "none";
        dropDownElements.arrowDown3.style.display = "block";
    } else {
        dropDownElements.drop1.style.display = "flex";

        dropDownElements.arrowUp1.style.display = "block";
        dropDownElements.arrowDown1.style.display = "none";
    }
};

const dropDown2 = () => {
    if (dropDownElements.drop2.style.display === "flex") {
        dropDownElements.drop2.style.display = "none";

        dropDownElements.arrowUp2.style.display = "none";
        dropDownElements.arrowDown2.style.display = "block";
    } else if (dropDownElements.drop1.style.display === "flex" || dropDownElements.drop3.style.display === "flex") {
        dropDownElements.drop1.style.display = "none";
        dropDownElements.drop3.style.display = "none";
        dropDownElements.drop2.style.display = "flex";

        dropDownElements.arrowUp2.style.display = "block";
        dropDownElements.arrowDown2.style.display = "none";

        dropDownElements.arrowUp1.style.display = "none";
        dropDownElements.arrowDown1.style.display = "block";

        dropDownElements.arrowUp3.style.display = "none";
        dropDownElements.arrowDown3.style.display = "block";
    } else {
        dropDownElements.drop2.style.display = "flex";

        dropDownElements.arrowUp2.style.display = "block";
        dropDownElements.arrowDown2.style.display = "none";
    }
};

const dropDown3 = () => {
    if (dropDownElements.drop3.style.display === "flex") {
        dropDownElements.drop3.style.display = "none";

        dropDownElements.arrowUp3.style.display = "none";
        dropDownElements.arrowDown3.style.display = "block";
    } else if (dropDownElements.drop1.style.display === "flex" || dropDownElements.drop2.style.display === "flex") {
        dropDownElements.drop1.style.display = "none";
        dropDownElements.drop2.style.display = "none";
        dropDownElements.drop3.style.display = "flex";

        dropDownElements.arrowUp3.style.display = "block";
        dropDownElements.arrowDown3.style.display = "none";

        dropDownElements.arrowUp2.style.display = "none";
        dropDownElements.arrowDown2.style.display = "block";

        dropDownElements.arrowUp1.style.display = "none";
        dropDownElements.arrowDown1.style.display = "block";
    } else {
        dropDownElements.drop3.style.display = "flex";

        dropDownElements.arrowUp3.style.display = "block";
        dropDownElements.arrowDown3.style.display = "none";
    }
};