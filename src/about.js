import "./about.css";

function loadAboutPage(){


    //Main Container
    const divContainer = document.createElement("div");
    divContainer.classList.add("about-page-container");


    //Heading Page
    const pageHeading = document.createElement("div");
    pageHeading.textContent = "Wanna know Us?";
    pageHeading.classList.add("page-heading");


    //Intro Page
    const intro = document.createElement("div");
    intro.textContent = "Welcome to theCyberCafe - where the coffee's hot, the WiFi's faster, and our PCs never judge your game time. Swing by for a tech-tastic experience!";
    intro.classList.add("intro-div");

    //Member Details
    const memberContainer = document.createElement("div");
    memberContainer.classList.add("member-container");
    const meetUs = document.createElement("div");
    meetUs.textContent = "Meet Us";
    meetUs.classList.add("meet-us");
    memberContainer.appendChild(meetUs);

        //Member profile container
    const memberDetail = document.createElement("div");
    memberDetail.classList.add("member-detail");

            //Profile1
    const member1 = document.createElement('div');
    member1.setAttribute("id", "member1");
    const profileImage1 = document.createElement("div");
    profileImage1.classList.add("profile-image");
    const profileInfo1 = document.createElement("div");
    profileInfo1.classList.add("profile-info");
    const profileQuote1 = document.createElement("div");
    profileQuote1.textContent = '"Hey! Need a break from reality? Join us for epic games and strong WiFi. Your keyboard will thank you. See you there!"';
    profileQuote1.classList.add("profile-quote");
    const profileName1 = document.createElement("div");
    profileName1.classList.add("profile-name");
    profileName1.textContent = "-- David";
    profileInfo1.appendChild(profileQuote1);
    profileInfo1.appendChild(profileName1);
    member1.appendChild(profileImage1);
    member1.appendChild(profileInfo1);
            //Profile2
    const member2 = document.createElement('div');
    member2.setAttribute("id", "member2");
    const profileImage2 = document.createElement("div");
    profileImage2.classList.add("profile-image");
    const profileInfo2 = document.createElement("div");
    profileInfo2.classList.add("profile-info");
    const profileQuote2 = document.createElement("div");
    profileQuote2.textContent = '"We promise not to judge your browser history unless you’re using Internet Explorer. 💻😆"';
    profileQuote2.classList.add("profile-quote");
    const profileName2 = document.createElement("div");
    profileName2.classList.add("profile-name");
    profileName2.textContent = "-- Malan";
    profileInfo2.appendChild(profileQuote2);
    profileInfo2.appendChild(profileName2);
    member2.appendChild(profileImage2);
    member2.appendChild(profileInfo2);

    memberDetail.appendChild(member1);
    memberDetail.appendChild(member2);
    memberContainer.appendChild(memberDetail);

    divContainer.appendChild(pageHeading);
    divContainer.appendChild(intro);
    divContainer.appendChild(memberContainer);
    content.appendChild(divContainer);
}







export {loadAboutPage};