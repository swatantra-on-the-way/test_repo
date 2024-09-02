import "./styles.css";
import {loadHomePage} from "./homepage.js";
import {loadAboutPage} from "./about.js";
import {loadContactPage} from "./contact.js";
function pageLoad(){
    const homeBtn = document.querySelector("#home");
    const aboutBtn = document.querySelector("#about");
    const contactBtn = document.querySelector("#contact");
    const content = document.querySelector("#content");

    homeBtn.addEventListener("click", (e) => {
        clearContent(content);
        console.log("I'm clicked by default");
        loadHomePage();
    });

    aboutBtn.addEventListener("click", (e) => {
        clearContent(content);
        loadAboutPage();
    });

    contactBtn.addEventListener("click", (e) => {
        clearContent(content);
        loadContactPage();
    });

    let click_event = new CustomEvent("click");
    homeBtn.dispatchEvent(click_event);
    homeBtn.focus();
}

function clearContent(content){
    content.textContent = "";
}

pageLoad();




