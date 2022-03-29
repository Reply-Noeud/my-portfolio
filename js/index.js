const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const popUp = document.getElementsByClassName('portfolio__item-pop');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});


/*VIDEO GALLERY*/
var videoPlayer = document.getElementById('videoPlayer');
var myVideo = document.getElementById('myVideo');

function stopVideo () {
    videoPlayer.style.display = 'none';
    myVideo.pause();
}

function playVideo (file) {
    myVideo.src = file;
    videoPlayer.style.display = 'block';
    myVideo.autoplay = true;
}




/* IMAGE GALLERY */



document.querySelectorAll('.portfolio__item img').forEach(image => {
    image.onclick = () => {
    document.querySelector('.popup-image').style.display = 'block';
    document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});


document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}
