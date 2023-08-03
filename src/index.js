// Challenge 1

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
fetch(imgUrl)
.then(function(response){
    return response.json();
  })
  .then(function(data) {
    data.message.forEach(item => {
        const img = document.createElement("img")
        img.src = item;
        document.body.appendChild(img)
    });
  })

// Challenge 2

const breedUrl = "https://dog.ceo/api/breeds/list/all";
let breedList
let dogList = document.getElementById("dog-breeds")

fetch(breedUrl)
.then(function(response){
    return response.json();
  })
  .then(function(data) {
    breedList = data.message;
    for (const breed in breedList) {
        const listItem = document.createElement("li")
        listItem.textContent = breed
        dogList.appendChild(listItem)
    }
  }
)

// Challenge 3

const breedCollection = document.getElementsByTagName("ul");

function changeColor(event) {
    event.target.style.color = "red"
}

for (const breed of breedCollection) {
    breed.addEventListener("click", changeColor)
}

// Challenge 4

const filter = document.getElementById("breed-dropdown")

filter.addEventListener("change", filterBreeds)

function filterBreeds(event) {
    dogList.textContent = ""
    if (event.target.value === "a") {
        for (const dog in breedList) {
            if (dog.startsWith("a") === true) {
                const listItem = document.createElement("li")
                listItem.textContent = dog
                dogList.appendChild(listItem)
            }
        }
    }
    if (event.target.value === "b") {
        for (const dog in breedList) {
            if (dog.startsWith("b") === true) {
                const listItem = document.createElement("li")
                listItem.textContent = dog
                dogList.appendChild(listItem)
            }
        }
    }
    if (event.target.value === "c") {
        for (const dog in breedList) {
            if (dog.startsWith("c") === true) {
                const listItem = document.createElement("li")
                listItem.textContent = dog
                dogList.appendChild(listItem)
            }
        }
    }
    if (event.target.value === "d") {
        for (const dog in breedList) {
            if (dog.startsWith("d") === true) {
                const listItem = document.createElement("li")
                listItem.textContent = dog
                dogList.appendChild(listItem)
            }
        }
    }
}
