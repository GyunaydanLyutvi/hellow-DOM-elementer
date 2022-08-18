const myApp = document.getElementById("app");
const newDiv = document.createElement("div");
newDiv.innerHTML="<H1>Hellow World</H1>"

console.log(myApp);
console.log(newDiv);


const containerr = document.createElement("figure")
const titel = document.createElement("h2")
titel.innerText = "CAT VS Brush"
const image = document.createElement("img")
image.src = "IMG_4115.jpg"
image.setAttribute("width",300)
image.setAttribute("height",500)
const text = document.createElement("p")
text.innerText = "Cat against The brush"

containerr. appendChild(titel)
containerr. appendChild(image)
containerr. appendChild(text)
myApp.appendChild(containerr)

