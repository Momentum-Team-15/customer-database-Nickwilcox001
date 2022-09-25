const customerContainer = document.querySelector("#customerContainer")

function capName (name)
{
    let name2 = ""
    name2 = name.charAt(0).toUpperCase() + name.slice(1);
    return name2;
}


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
        let customerDate = document.createElement('p')
        img.classList.add("thumbnail")
        name.classList.add("name")



        img.src = `${customer.picture.large}`
        name.innerText = `${capName(customer.name.first)} ${capName(customer.name.last)}`;
        email.innerText = `${customer.email}`
        address.innerText = `${customer.location.street.number} ${customer.location.street.name} ${customer.location.city}, ${nameToAbbr(customer.location.state)} ${customer.location.postcode}`
        DOB.innerText = `DOB: ${moment(customer.dob.date).format("MMM Do YYYY")}`
        customerDate.innerText = `Customer Since: ${moment(customer.registered.date).format("MMM Do YYYY")}`
        
        customerDiv.appendChild(img);
        customerDiv.appendChild(name);
        customerDiv.appendChild(email)
        customerDiv.appendChild(address)
        customerDiv.appendChild(DOB)
        customerDiv.appendChild(customerDate)
        
        customerContainer.appendChild(customerDiv);
        customerDiv.classList.add("customer")



    }
}
buildDirectory(customers)