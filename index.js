let searchResultsEl = document.getElementById("searchResults");

function createAndAppend(result) {
    let {
        name,
        email,
        location,
        picture
    } = result;

    let containerEl = document.createElement("div");
    containerEl.classList.add("card-container");
    searchResultsEl.appendChild(containerEl);

    let imageContainerEl = document.createElement("div");
    containerEl.appendChild(imageContainerEl);

    let imageEl = document.createElement("img");
    imageEl.setAttribute("src", picture.large);
    imageEl.classList.add("image");
    imageContainerEl.appendChild(imageEl);

    let contentContainerEl = document.createElement("div");
    contentContainerEl.classList.add("content")
    containerEl.appendChild(contentContainerEl);

    let nameEl = document.createElement("p");
    nameEl.textContent = name.title + " " + name.first + " " + name.last;
    contentContainerEl.appendChild(nameEl)

    let emailEl = document.createElement("p");
    emailEl.textContent = email;
    contentContainerEl.appendChild(emailEl)

    let addressEl = document.createElement("p");
    addressEl.textContent = location.street.number + "," + location.street.name + "," + location.city + "," +
        location.state + "," + location.country + "," + location.postcode;
    contentContainerEl.appendChild(addressEl)
}


function displayResults(searchResults) {
    for (let result of searchResults) {
        createAndAppend(result);
    }
}


let url = `https://randomuser.me/api/?results=10`;
let options = {
    method: "GET"
};

fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        let search_results = jsonData.results;
        displayResults(search_results);
    });
