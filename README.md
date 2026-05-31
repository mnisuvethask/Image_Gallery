# Ex.07 Design of Interactive Image Gallery

## AIM
  To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS

## Step 1:

Clone the github repository and create Django admin interface

## Step 2:

Change settings.py file to allow request from all hosts.

## Step 3:

Use CSS for positioning and styling.

## Step 4:

Write JavaScript program for implementing interactivit

## Step 5:

Validate the HTML and CSS code

## Step 6:

Publish the website in the given URL.

## PROGRAM
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Photo Gallery</title>

    <link rel="stylesheet" href="gallery.css">
</head>
<body>

    <h1>Interactive Photo Gallery</h1>

    <div class="gallery-container">

        <button class="btn" onclick="prevImage()">❮</button>

        <div class="gallery">

            <img src="C:\Users\Yazhini\WEB\softweb\vijay\calcapp\img1.png" class="gallery-img active">
            <img src="C:\Users\Yazhini\WEB\softweb\vijay\calcapp\img2.png" class="gallery-img">
            <img src="C:\Users\Yazhini\WEB\softweb\vijay\calcapp\img3.png" class="gallery-img">
            <img src="C:\Users\Yazhini\WEB\softweb\vijay\calcapp\img4.png" class="gallery-img">
            <img src="C:\Users\Yazhini\WEB\softweb\vijay\calcapp\img5.png" class="gallery-img">

        </div>

        <button class="btn" onclick="nextImage()">❯</button>

    </div>

    <script src="gallery.js"></script>

</body>
</html>

body{
    margin:0;
    padding:0;
    font-family: Arial, sans-serif;
    background:#f4f4f4;
    text-align:center;
}

h1{
    margin-top:20px;
    font-size:45px;
    color:#222;
}

.gallery-container{
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:40px;
}

.gallery{
    width:700px;
    height:450px;
    overflow:hidden;
    border-radius:15px;
    box-shadow:0px 4px 12px rgba(0,0,0,0.3);
    background:white;
}

.gallery-img{
    width:100%;
    height:100%;
    object-fit:cover;
    display:none;
}

.gallery-img.active{
    display:block;
}

.btn{
    background:#222;
    color:yellow;
    border:none;
    padding:15px 22px;
    font-size:30px;
    border-radius:50%;
    cursor:pointer;
    margin:20px;
}

.btn:hover{
    background:blueviolet;
}

let images = document.querySelectorAll(".gallery-img");

let current = 0;

function showImage(index){

    images.forEach((img)=>{
        img.classList.remove("active");
    });

    images[index].classList.add("active");
}

function nextImage(){

    current++;

    if(current >= images.length){
        current = 0;
    }

    showImage(current);
}

function prevImage(){

    current--;

    if(current < 0){
        current = images.length - 1;
    }

    showImage(current);
}

setInterval(()=>{
    nextImage();
},3000);

## OUTPUT
<img width="1920" height="1080" alt="Screenshot (51)" src="https://github.com/user-attachments/assets/76dfb2c8-527a-4ed7-bb95-61b0c3ba8075" />
<img width="1920" height="1080" alt="Screenshot (52)" src="https://github.com/user-attachments/assets/a60cb05d-c35e-4850-bb94-ebbda0dfc032" />
<img width="1920" height="1080" alt="Screenshot (53)" src="https://github.com/user-attachments/assets/8f3787f0-0e01-4643-be87-ea83074468a3" />
<img width="1920" height="1080" alt="Screenshot (54)" src="https://github.com/user-attachments/assets/3653075c-cf37-410d-ad4e-5c7ae53aba20" />
<img width="1920" height="1080" alt="Screenshot (55)" src="https://github.com/user-attachments/assets/7b2f88ba-f53e-4b78-bd91-1746ea80c243" />


## RESULT
  The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
