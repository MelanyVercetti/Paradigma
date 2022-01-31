const mapBtn = document.querySelector('.map');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');

mapBtn.addEventListener('mouseover', () => {
    modal.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    modal.classList.toggle('active');
})

const licenseImages = document.querySelectorAll('.license-img');

licenseImages.forEach(img => {
    img.addEventListener('click', () => {
        img.classList.value === 'license-img' ? img.classList.add('active') :
            img.classList.remove('active');
    });
})

const navBtn = document.querySelector('.nav-button');
const headerNav = document.querySelector('.header-nav');

navBtn.addEventListener('click', () => {
    console.log('click')
    navBtn.classList.toggle('active');
    headerNav.classList.toggle('active');
})