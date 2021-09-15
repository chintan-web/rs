const navSlide = () => {

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.list-items');
    const navLinks = document.querySelectorAll('.list-items li');
    // toggle nav 


    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');
        // animate links 

        navLinks.forEach((link, index) => {

            if (link.style.animation) {

                link.style.animation = ''
            } 
            
            else {
                link.style.animation = 'navLinkFade 0.5s ease forwards $(index /7+1.5}s';

            }

        });
    });


}

navSlide();


const text = document.querySelector('.fancy');
const strText = text.textContent;
const splitText = strText.split("");

text.textContent = "";
for (let i = 0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);


function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++

    if (char === splitText.length) {
        
        complete();
        return;
    }
}

function complete(){

    clearInterval(timer);
    timer = null;
}
