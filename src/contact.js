import "./contact.css";

function loadContactPage(){
    const divContainer = document.createElement("div");
    divContainer.classList.add("container");

    const heading = document.createElement("div");
    heading.textContent = "Connect with Us";
    heading.classList.add("heading");


    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("details");
    
    const field1 = document.createElement("div")
    const field2 = document.createElement("div")
    const field3 = document.createElement("div")
    field1.classList.add("field");
    field2.classList.add("field");
    field3.classList.add("field");

    detailsDiv.appendChild(field1);
    detailsDiv.appendChild(field2);
    detailsDiv.appendChild(field3);

    const emailLabel = document.createElement("div");
    emailLabel.textContent = "Email: ";
    const emailAddress = document.createElement('div');
    emailAddress.textContent = "abc@abc.com";
    emailLabel.classList.add("label");
    emailAddress.classList.add("data");
    field1.appendChild(emailLabel);
    field1.appendChild(emailAddress);

    const telLabel = document.createElement("div");
    telLabel.textContent = "Tel: ";
    const telNumber = document.createElement("div");
    telNumber.textContent = "000-243-232-3434";
    telLabel.classList.add("label");
    telNumber.classList.add("data");
    field2.appendChild(telLabel);
    field2.appendChild(telNumber);

    const addressLabel = document.createElement("div");
    addressLabel.textContent = "Address: ";
    const location = document.createElement("div");
    location.textContent = "5/2-4 Elizabeth Street, VIC";
    addressLabel.classList.add("label");
    location.classList.add("data");
    field3.appendChild(addressLabel);
    field3.appendChild(location);

    divContainer.appendChild(heading);
    divContainer.appendChild(detailsDiv);
    content.appendChild(divContainer);
}

export {loadContactPage};

