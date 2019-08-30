// var i = 0, images = [
//     "./images/img1.jpg",
//     "./images/img2.jpg",
//     "./images/img3.jpg",
//     "./images/img4.jpg",
//     "./images/img5.png",
//     "./images/img6.jpg",
//     "./images/img7.jpg",
//     "./images/img8.jpg",
//     "./images/img9.jpg",
// ]
    
// function mySlide(param)
//     {
//         if (param === 'next')
//         {
//             i++;
//             if (i === images.length) { i = images.length - 1 }
//         } else {
//             i --;
//             if(i<0) {i=0;}
//         }
//         document.getElementaryById('slide').src = images[i];
//     }    



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
