import "./homepage.css";

function loadHomePage(){
    const divContainer = document.createElement("div");
    divContainer.classList.add("homepageContainer");

    const title = document.createElement("div");
    title.classList.add("title");
    const title1 = document.createElement("p");
    const title2 = document.createElement("p");
    const title3 = document.createElement("p");
    title1.textContent = "the";
    title2.textContent = "Cyber";
    title3.textContent = "Cafe";
    title.appendChild(title1);
    title.appendChild(title2);
    title.appendChild(title3);

    const reviewDiv = document.createElement("div");
    reviewDiv.classList.add("review");
    const reviewText = document.createElement("p");
    reviewText.classList.add("reviewText");
    reviewText.textContent = "I bet this is the best place to have actual fun. You'd find all the introverts, unsocial nerds of the town. Highly recommended..."
    const author = document.createElement("p");
    author.classList.add("author");
    author.textContent = "- Daniel Carpenter";
    reviewDiv.appendChild(reviewText);
    reviewDiv.appendChild(author);

    const operationDiv = document.createElement("div");
    operationDiv.classList.add("operation");
    const operatingTimeHeading = document.createElement("div");
    operatingTimeHeading.classList.add('operating-time-heading');
    operatingTimeHeading.textContent = "Operating Hours";
    operationDiv.appendChild(operatingTimeHeading);
    const openHours = document.createElement("div");
    openHours.classList.add("open-hours");
    for (let i = 0; i < 7; i++){
        const para = document.createElement("p");
        const span1 = document.createElement("span");
        const span2 = document.createElement("span");
        span1.classList.add("day");
        span2.classList.add("time");
        para.appendChild(span1);
        para.appendChild(span2);
        openHours.appendChild(para);
    }
    operationDiv.appendChild(openHours);
    const day = openHours.querySelectorAll("p > span:nth-child(1)");
    day[0].textContent = "Monday";
    day[1].textContent = "Tuesday";
    day[2].textContent = "Wednesday";
    day[3].textContent = "Thursday";
    day[4].textContent = "Friday";
    day[5].textContent = "Saturday";
    day[6].textContent = "Sunday";
    const time = openHours.querySelectorAll("p > span:nth-child(2)");
    time[0].textContent = "8am - 8pm";
    time[1].textContent = "8am - 8pm";
    time[2].textContent = "8am - 8pm";
    time[3].textContent = "9am - 9pm";
    time[4].textContent = "9am - 9pm";
    time[5].textContent = "10am - 10pm";
    time[6].textContent = "10am - 10pm";

    const locationDiv = document.createElement("div");
    locationDiv.classList.add("location");
    const locationHeading = document.createElement("p");
    locationHeading.classList.add("location-heading");
    locationHeading.textContent = "Location";
    const address = document.createElement("p");
    address.classList.add("address");
    address.textContent = "5/2-4 Elizabeth Street, VIC";
    locationDiv.appendChild(locationHeading);
    locationDiv.appendChild(address);

    divContainer.appendChild(title);
    divContainer.appendChild(reviewDiv);
    divContainer.appendChild(operationDiv);
    divContainer.appendChild(locationDiv);
    content.appendChild(divContainer);
}

export {loadHomePage};
