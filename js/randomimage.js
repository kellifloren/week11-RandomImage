const myButton = document.querySelector("button");
const image = document.querySelector("img");
const images = ["image1.webp", "image2.jpeg", "image3.webp", "image4.jpeg"];

myButton.addEventListener("click", changeImage);

function changeImage() {
  
    console.log(image);
    let randomImage = Math.floor(Math.random() * images.length);
    console.log(randomImage);


    image.src = "../img/" + images[randomImage];
   
    
   

}