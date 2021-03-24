let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");

  fetch("http://localhost:3000/toys")
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      const toyCollection = document.getElementById("toy-collection")
      for (let i = 0; i < object.length; i++) {
        const toy = object[i];
        
        let div = toyCollection.appendChild(
          document.createElement("div")
        )
        div.className="card"

        let h = document.createElement("h2")
        h.innerText = toy.name

        let img = document.createElement("img")
        img.src = toy.image
        img.className = "toy-avatar"

        let p = document.createElement("p")
        p.innerText = `${toy.likes} likes`

        let button = document.createElement("button")
        button.className = "like-btn"
        button.innerText = "Like <3"

        div.appendChild(h)
        div.appendChild(img)
        div.appendChild(p)
        div.appendChild(button)
      }
        
      
    })

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
