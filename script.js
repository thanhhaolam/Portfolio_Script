
const navlinks = document.querySelectorAll('header nav a');
const logolinks = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuicon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuicon.addEventListener('click', () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activepage = () => {
    const header = document.querySelector('header' );
    const barbox = document.querySelector('.bar-box');
   
    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);


    navlinks.forEach(link => { 
        link.classList.remove('active');       
    });

    barbox.classList.remove('active');
    setTimeout(() => {
        barbox.classList.add('active');
    }, 1100);

    sections.forEach(section => { 
        section.classList.remove('active');       
    });

    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

navlinks.forEach((link, idx) => {
    link.addEventListener('click', () => { 
        if(!link.classList.contains('active')) {
            activepage();

            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logolinks.addEventListener('click', () => {
    if (!navlinks[0].classList.contains('active')) {
        activepage();

        navlinks[0].classList.add('active');
            
        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1100);
    }
});

const arrowright = document.querySelector('.project-box .navigation .arrow-right');
const arrowleft = document.querySelector('.project-box .navigation .arrow-left');

let index = 0;

const projectdetail = document.querySelectorAll('.project-detail');
const maxIndex = projectdetail.length - 1;

const activeproject = () => {
    const imgslide = document.querySelector('.project-carousel .img-slide');

    imgslide.style.transform = `translateX(calc(-${index * 100}% - ${index * 2}rem))`;

    projectdetail.forEach(detail => detail.classList.remove('active'));
    projectdetail[index].classList.add('active');
};

arrowright.addEventListener('click', () => {
    if (index < maxIndex) {
        index++;
        arrowleft.classList.remove('disabled');
        if (index === maxIndex) {
            arrowright.classList.add('disabled');
        }
    }

    activeproject();
});

arrowleft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        arrowright.classList.remove('disabled');
        if (index === 0) {
            arrowleft.classList.add('disabled');
        }
    }

    activeproject();
});

// Optional: disable left arrow at start
arrowleft.classList.add('disabled');