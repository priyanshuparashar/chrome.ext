let willsmithimg = [
  "https://www.thehindu.com/entertainment/movies/q875nd/article31003065.ece/ALTERNATES/LANDSCAPE_1200/7bm-pg5-Film-column",
  "https://miro.medium.com/max/500/1*xDIevNE7HEMiJQVTYg0qDQ.png",
  "https://www.looper.com/img/gallery/the-offices-michael-scott-was-almost-a-murderer/intro-1591207215.jpg"

]

const imgs = document.getElementsByTagName("img")
for (let i = 0; i < imgs.length; i++){
  const randomimg = Math.floor(Math.random() * willsmithimg.length)
  imgs[i].src = willsmithimg[randomimg]
  
}


const header = document.getElementsByTagName("h3")
for (let i = 0; i < header.length; i++){
  header[i].innerText="michael scott"
}
  

const header2 = document.getElementsByTagName("h2")
for (let i = 0; i < header2.length; i++) {
  header2[i].innerText = "michael scron"
}

var a = 23;
var b = 34;
let sum = a + b;
