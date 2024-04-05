// Fetch Request -> JSON placeholder
// https://jsonplaceholder.typicode.com/

// export async function getPhotos() {  //          Helper Function to get single image from API (done by Instructor)
//   fetch("https://jsonplaceholder.typicode.com/photos")
//     .then((response) => response.json())
//     .then((json) => {
//       let body =document.querySelector('body')
//       console.log(json[0].thumbnailUrl)
//       let image = document.createElement('img')
//       image.setAttribute('src', json[0].thumbnailUrl)
//       body.append(image)
//     });
// }




// Helper Function to get 10 photos from API using Fetch Request

export async function getTenPhotos() {

  fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")  
    .then((response) => response.json())
    .then((json) => {
      let photoContainer = document.querySelector(".photoContainer")
      console.log(json.thumbnailUrl)
      for (let i = 0; i <= 10; i++) {
        let newImg = document.createElement("img")
        newImg.setAttribute("src", json[i].thumbnailUrl)
        photoContainer.append(newImg)
      }
    })
}



