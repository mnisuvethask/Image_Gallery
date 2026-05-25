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