## The Structure of the website
    ``
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Personal Portfolio Website Using HTML & CSS | Codehal</title>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <header class="active">
            <a href="#" class="logo">Thanh Hao Portfolio</a>
            <i class='bx bx-menu' id="menu-icon"></i>
            <nav>
                <a href="#" class="active ">About me</a>
                <a href="#">My Skills</a>
                <a href="#">My Projects</a>
            </nav>
        </header>
    
    <!-- bar backgroud -->
    <div class="bar-box active">
        <div class="bar" style="--i:6"></div>
        <div class="bar" style="--i:5"></div>
        <div class="bar" style="--i:4"></div>
        <div class="bar" style="--i:3"></div>
        <div class="bar" style="--i:2"></div>
        <div class="bar" style="--i:1"></div>
    </div>
    
    <!-- about me section -->
         <section class="about-me active">
            <div class="detail">
                <h1>Thanh Hao Lam</h1>
                <h2>I am a
                    <span style="--i:4;" data-text="Business Analyst">Business Analyst</span>
                    <span style="--i:3;" data-text="Business Intelligent Analyst">Business Intelligent Analyst</span>
                    <span style="--i:2;" data-text="Business Analyst">Business Analyst</span>
                    <span style="--i:1;" data-text="Business Intelligent Analyst">Business Intelligent Analyst</span>
                </h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div class="contact-button">
                    <a href="tel:+61423341899" class="btn">Contact Me</a>
                    <div class="contact">
                        <a href="https://github.com/thanhhaolam" target="_blank" rel="noopener noreferrer"><i class='bx bxl-github' ></i></a>
                        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer"><i class='bx bxl-linkedin' ></i></a>
                        <a href="mailto:lhao1211@gmail.com"><i class='bx bxl-gmail' ></i></a> 
                        <a href="tel:+61423341899"><i class='bx bx-phone' ></i></i></a> 
                    </div>
                </div>
            </div>
            <div class="about-me-image">
                <div class="image-box">
                    <div class="image-item">
                         <img src="dp1.jpg">
                    </div>
                 </div>
            </div>
         </section>
    
    
    <!-- My Skills Lazy to change the name :P -->
        <section class="portfolio">
            <h2 class="heading">My <span>Skills</span></h2>
            <div class="portfolio-container">
            <!-- box for SQL -->
               <div class="portfolio-box">
                    <div class="icon">
                        <i class='bx bx-code-alt' ></i>
                        <a href="#"><i class='bx bx-left-arrow-circle' ></i></a>
                    </div>
                    <h3>SQL Workbench</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
               </div>
            <!-- box for power BI -->
                <div class="portfolio-box">
                    <div class="icon">
                        <i class='bx bx-slideshow' ></i>
                        <a href="#"><i class='bx bx-left-arrow-circle' ></i></a>
                    </div>
                    <h3>Power BI</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
               </div>
    
    
            <!-- box for power Python -->
                <div class="portfolio-box">
                    <div class="icon">
                        <i class='bx bxl-python' ></i>
                        <a href="#"><i class='bx bx-left-arrow-circle' ></i></a>
                    </div>
                    <h3>Python</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
               </div>
            </div>
        </section>
    
    <!-- Project section -->
     <section class="project">
        <h2 class="heading">My Recent <span>Projects</span></h2>
        <div class="project-container">
            <div class="project-box">
                <div class="project-detail active">
                    <p class="numb">01</p>
                    <h3>SQL Project</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</p>
                    <div class="tech">
                        <p>HTML5, CSS3, JavaScript</p>
                    </div>
                    <div class="github">
                        <a href="https://github.com/thanhhaolam/SQL-Project-Netflix"><i class='bx bx-left-arrow-circle' ></i><span>Live Project</span></a>
                        <a href="https://github.com/thanhhaolam/SQL-Project-Netflix"><i class='bx bxl-github' ></i><span>Github Repository</span></a>
                    </div>
                </div>
                
                <div class="project-detail">
                    <p class="numb">02</p>
                     <h3>Python Project</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</p>
                    <div class="tech">
                        <p>HTML5, CSS3, JavaScript</p>
                    </div>
                    <div class="github">
                        <a href="https://github.com/thanhhaolam/Programming-with-Python"><i class='bx bx-left-arrow-circle' ></i><span>Live Project</span></a>
                        <a href="https://github.com/thanhhaolam/Programming-with-Python"><i class='bx bxl-github' ></i><span>Github Repository</span></a>
                    </div>
                </div>
    
                <div class="project-detail">
                    <p class="numb">03</p>
                     <h3>Power BI Project</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</p>
                    <div class="tech">
                        <p>HTML5, CSS3, JavaScript</p>
                    </div>
                    <div class="github">
                        <a href="#"><i class='bx bx-left-arrow-circle' ></i><span>Live Project</span></a>
                        <a href="#"><i class='bx bxl-github' ></i><span>Github Repository</span></a>
                    </div>
                </div>
            </div>
    
            <div class="project-box">
                <!-- image carousel -->
                <div class="project-carousel">
                    <div class="img-slide">
                        <div class="img-item">
                            <img src="portfolio1.png">
                        </div>
                         <div class="img-item">
                            <img src="portfolio 2.png">
                        </div>
                         <div class="img-item">
                            <img src="portfolio 3.png">
                        </div>
                    </div>
                </div> 
    
                <div class="navigation">
                    <button class="arrow-left disabled"><i class='bx bx-chevron-left' ></i></button>
                    <button class="arrow-right"><i class='bx bx-chevron-right' ></i></button>
                </div>
            </div>
        </div> 
     </section>
    
    
    
        <script src="script.js"></script>
    </body>
    
    </html>``

## The style for the website

    `` @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,500&display=swap');
     * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        border: none;
        outline: none;
        font-family: "Poppins", sans-serif;
     }
    
     :root {
        --bg-color: #1f242d;
        --second-bg-color: #323946;
        --main-color: #3cf03d;
        --white-color: #fff;
        --disabled-color: #fff3;
     }
    
     html {
        font-size: 62.5%;
     }
    
     body{
        color: var(--white-color);
     }
    
     header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 2rem 9%;
        background: var(--bg-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;
        visibility: hidden;
        opacity: 0;
     }
    
     header.active{
        animation: show-header 1.5s linear forwards;
        animation-delay: 1.2s;
     }
    
    @keyframes show-header {
        100% {
            visibility: visible;
            opacity: 1;
        }
    }
    
     .logo{
        font-size: 3rem;
        color: var(--white-color);
        font-weight: 700;
     }
    
     nav a {
        font-size: 2rem;
        color: var(--white-color);
        font-weight: 500;
        margin-left: 3.5rem;
     }
    
     nav a:hover,
     nav a.active {
        color: var(--main-color);
     }
    
     #menu-icon {
        font-size: 4rem;
        display: none;
     }
    
     .bar-box {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
     }
    
     .bar-box .bar {
        width: 100%;
        height: 100%;
        background: var(--bg-color);
        animation: hide-bar .5s ease-in-out both;
        animation-delay: calc(0.1s * var(--i));
     }
    
     @keyframes hide-bar {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-100%);
        }
    }
    
     .bar-box.active .bar{
        animation: show-bar .5s ease-in-out both;
        animation-delay: calc(0.1s * var(--i));
     }
    
    @keyframes show-bar {
        0% {
            transform: translateY(-100%);
        }
        100% {
            transform: translateY(0);
        }
    }
    
     section {
        position: absolute;
        width: 100%;
        height: 100%;
        padding: 10rem 9% 2rem;
        visibility: hidden;
        opacity: 0;
        overflow: hidden;
     }
    
     section.active {
        animation: show-content 1.5s linear forwards;
        animation-delay: 1.6s;
     } 
    
     @keyframes show-content {
        100% {
            visibility: visible;
            opacity: 1;
            overflow: auto;
        }
     }
    
     .about-me{
        display: flex;
        align-items: center;
        gap: 5rem;
        justify-content: space-between;
        padding: 2rem;
        flex: 1;
     }
    
    
     .detail h1 {
        font-size:  clamp(3.5rem, 10vw,5.5rem);
     }
    
     .detail h2 {
        display: inline-block;
        font-size: 3.2rem;
        margin-top: -1rem;
     }
    
    /* animation for text */
     .detail h2 span {
        position: relative;
        display: inline-block;
        color: transparent;
        -webkit-text-stroke: 0.07rem var(--main-color);
        animation: display-text 16s linear infinite;
        animation-delay: calc(-4s * var(--i));
     }
    
     @keyframes display-text {
        25%, 100% {
            display: none;
        }
     }
    
    .detail h2 span::before {
        content: attr(data-text);
        position: absolute;
        width: 0;
        border-right: 0.2rem solid var(--main-color);
        color: var(--main-color);
        white-space: nowrap;
        overflow: hidden;
        animation: fill-text 4s linear infinite;
    }
    
    @keyframes fill-text {
        10%, 100% {
            width: 0;
        }
        70%, 90% {
            width: 100%;
        }
    }
    
     .detail p {
        font-size: 1.6rem;
        margin: 2rem 0 2.5rem;
     }
    
     .detail .contact-button {
        display: flex;
        align-items: center;
     }
    
     .btn {
        display: inline-block;
        padding: 1rem 3rem;
        background: var(--main-color);
        border: .2rem solid var(--main-color);
        border-radius: 4rem;
        box-shadow: 0 0 1rem var(--main-color);
        font-size: 1.6rem;
        color: var(--bg-color);
        font-weight: 500;
        transition: .5s;
     }
    
     .btn:hover{
        background: transparent;
        color: var(--main-color);
        box-shadow: none;
     }
    
    .detail .contact-button .contact {
        margin-left: 2rem;
    }
    
    .detail .contact-button .contact a {
        display: inline-flex;
        padding: 0.8rem;
        border: 0.2rem solid var(--main-color);
        border-radius: 50%;
        font-size: 2rem;
        color: var(--main-color);
        margin: 0.8rem;
        transition: 0.5s;
    }
    
    .detail .contact-button .contact a:hover{
        background: var(--main-color);
        color: var(--bg-color);
        box-shadow: 0 0 1rem var(--main-color);
    }
    
    
    .about-me-image .image-box {
        position: relative;
        width: 32vw;
        height: 32vw;
        border-radius: 50%;
        display: flex;
        padding: 0.5rem;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        flex: 1;
    }
    .about-me-image .image-box::before,
    .about-me-image .image-box::after {
        content:'';
        position: absolute;
        width: 50rem;
        height: 50rem;
        background: conic-gradient(transparent, transparent, transparent, var(--main-color));
        transform: rotate(0deg);
        animation: rotate-border 10s linear infinite;
    }
    
    .about-me-image .image-box::after {
        animation-delay: -5s;
    }
    
    @keyframes rotate-border {
        100% {
            transform: rotate(360deg);
        }
    }
    
    .about-me-image .image-box .image-item {
        position: relative;
        width: 100%;
        height: 100%;
        background: var(--bg-color);
        border-radius: 50%;
        border: .01rem solid var(--bg-color);
        display: flex;
        justify-content: center;
        z-index: 1;
        overflow: hidden;
    }
    
    .about-me-image .image-box .image-item img {
        position: absolute;
        top: 0;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    
    /* page for portfolio */
    
    .heading {
        font-size: 4.5rem;
        text-align: center;
        margin-bottom: 2rem;
    }
    
    .heading span {
        color: var(--main-color);
    }
    
    .portfolio-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
        gap: 2rem;
    }
    
    .portfolio-container .portfolio-box {
        padding: 3rem 2.5rem;
        background: var(--second-bg-color);
        border: .2rem solid var(--second-bg-color);
        border-radius: 1rem;
        transition: 0.5s;
    }
    
    .portfolio-container .portfolio-box:hover {
        border-color: var(--main-color);
        transform: scale(1.02);
    }
    
    .portfolio-box .icon {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .portfolio-box:hover .icon :not(a i){
        color: var(--main-color);
        transition: 0.5s;
    }
    
    .portfolio-box .icon i {
        font-size: 4.5rem;
    }
    
    .portfolio-box .icon a {
        display: inline-flex;
        background: var(--white-color);
        border-radius: 50%;
        padding: 1rem;
        transition: 0.5s;
    }
    
    .portfolio-box:hover .icon a {
        background: var(--main-color);
    }
    
    .portfolio-box .icon a i {
        font-size: 3rem;
        color: var(--bg-color);
        transform: rotate(225deg);
    }
    
    .portfolio-box .icon a:hover i {
        transform: rotate(180deg);
    }
    
    .portfolio-box h3 {
        font-size: 3rem;
        margin: 0.5rem 0 2rem;
    }
    
    .portfolio-box:hover h3 {
        color: var(--main-color);
    } 
    
    .portfolio-box p {
        font-size: 1.2rem;
    }
    
    
    
    .project-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
    }
    
    .project-detail {
        display: none;
    }
    
    .project-detail.active {
        display: block;
    }
    
    .project-box .numb {
        font-size: 8rem;
        -webkit-text-stroke: 0.07rem var(--white-color);
        color: transparent;
        line-height: 1;
    }
    
    
    .project-box h3 {
        font-size: 3.5rem;
        margin: .8rem 0 2rem;
    }
    
    .project-box p {
        font-size: 1.6rem;
    }
    
    .project-box .tech {
        margin: 2rem 0;
        color: var(--main-color);
        border-bottom: 0.1rem solid var(--white-color);
        padding-bottom: 2rem;
    }
    
    .project-box .github a {
        position: relative;
        display: inline-block;
        padding: 1.3rem;
        font-size: 3rem;
        color: var(--white-color);
        border-radius: 50%;
        background: var(--second-bg-color);
        transition: 0.5s;
    }
    
    .project-box .github a:hover {
        color: var(--main-color);
    }
    
    .project-box .github a:first-child {
        margin-right: 1.5rem;
    }
    
    .project-box .github a:first-child i {
        transform: rotate(135deg);
    }
    
    .project-box .github a span {
        position: absolute;
        top: -50%;
        left: 50%;
        transform: translateX(-50%) scale(0.9);
        font-size: 1.6rem;
        white-space: nowrap;
        padding: 0.5rem 1rem;
        border-radius: 0.6rem;
        pointer-events: none;
        background: var(--white-color);
        color: var(--bg-color);
        opacity: 0;
        transition: 0.2s;
    }
    
    .project-box .github a:hover span {
        top: -70%;
        opacity: 1;
        transform: translateX(-50%) scale(1);
    }
    
    .project-box .project-carousel {
        width: 100%;
        height: 45rem;
        border-radius: 1rem;
        overflow: hidden;
    }
    
    .project-carousel .img-slide {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 100%;
        gap: 2rem;
        height: inherit;
        transition: 0.5s;
    }
    
    .project-carousel .img-item {
        height: inherit;
    }
    
    .project-carousel .img-item img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 1rem;
    }
    
    .project-box .navigation {
        text-align: right;
        margin-top: 2rem;
    }
    
    .project-box .navigation button {
        display: inline-flex;
        padding: 0.4rem;
        background-color: var(--second-bg-color);
        border: 0.2rem solid var(--main-color);
        border-radius: 0.6rem;
        font-size: 4rem;
        color: var(--main-color);
        cursor: pointer;
    }
    
    .project-box .navigation button.disabled {
        border-color: var(--second-bg-color);
        color: var(--disabled-color);
    }
    
    .project-box .navigation .arrow-right {
        margin-left: 1.5rem;
    }
    
    /* breakpoint */
    
    @media screen and (max-width: 1200px) {
        html {
            font-size: 55%;
    
        }
        
    }
    
    @media screen and (max-width: 992px) {
        header {
            padding: 2rem 4%;
            
        }
    
        section {
            padding: 10rem 4% 2rem;
        }
        
    }
    
    @media screen and (max-width: 768px) {
        #menu-icon {
            display: block;
    
        }
    
        nav {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            padding: 1rem 0;
            background: var(--bg-color);
            border-top: .1rem solid rgba(0, 0, 0, .2);
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, .2);
            text-align: center;
            display: none;
        }
    
        nav.active {
            display: block;
        }
    
        nav a {
            display: block;
            margin: 4rem 0;
        }
    
        .about-me {
            flex-direction: column-reverse;
            justify-content: center;
            gap: 2rem;
        }
    
        .about-me-image .image-box {
            width: 35rem;
            height: 35rem;
        }
    
        .portfolio-container,
        .project-container {
            grid-template-columns: 1fr;
        }
    
        .project-container .project-box:first-child {
            order: 1;
        }
    }
    ``

# The Java Script to make it more dynamics

    ``
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
    ``
    
    // Optional: disable left arrow at start
    arrowleft.classList.add('disabled');``
