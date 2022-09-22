const customerContainer = document.querySelector("#customerContainer")

function buildDirectory(customerArray)
{
    for (let customer of customerArray)
    {
        let customerDiv = document.createElement("div")
        let img = document.createElement("img")
        let name = document.createElement("h2")
        let email = document.createElement('p')
        let address = document.createElement('p')
        let DOB = document.createElement('p')
        img.classList.add("thumbnail")

        img.src = `${customer.picture.large}`
        name.innerText = `${customer.name.title} ${customer.name.first} ${customer.name.last}`;
        email.innerText = `${customer.email}`
        //DOB.innerText = `DOB: ${customer.dob.date.format("MMM Do YYYY")}`
        //address.innerText = `${customer.location.street.number}` `${customer.location.street.name}` `${customer.location.city}``${customer.location.state}`
        
        customerDiv.appendChild(img);
        customerDiv.appendChild(name);
        customerDiv.appendChild(email)
        customerDiv.appendChild(address)
        customerDiv.appendChild(DOB)
        
        customerContainer.appendChild(customerDiv);
        customerDiv.classList.add("customer")



    }
}
buildDirectory(customers)