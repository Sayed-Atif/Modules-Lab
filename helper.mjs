// Fetch Request -> JSON placeholder
// https://jsonplaceholder.typicode.com/

// Helper Function
export async function getPhotos() {

  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((json) => {
      let photoContainer = document.querySelector(".photoContainer")
      console.log(json.thumbnailUrl)
      for (let i = 0; i < json.length; i++) {
        let newImg = document.createElement("img")
        newImg.setAttribute("src", json[i].thumbnailUrl)
        photoContainer.append(newImg)
      }
    })
}