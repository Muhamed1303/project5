function openMenu(){
    document.getElementById("navid").style.height = "150px";
    document.getElementById("navid").style.boxShadow = "1px 1px 4px";
}
function closeMenu(){
    document.getElementById("navid").style.height = "0px";
}

var sIndex = 1;
showSlide(sIndex);

function showSlide(n){
    var i;
    var slides = document.getElementsByClassName("pictures");
    var dots = document.getElementsByClassName("dot");

    if(n > slides.length){
        sIndex = 1;
    }

    if(n < 1){
        sIndex = slides.length;
    }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[sIndex - 1].style.display = "block";
    dots[sIndex - 1].className += " active";
}

function plusSlides(n){
    showSlide(sIndex += n);
}

function currentSlide(n){
    showSlide(sIndex = n);
}

const counters = document.querySelectorAll(".counter"); 
const speed = 1000;

const faders = document.querySelectorAll(".fade-in");

const options = {
    threshold: 0.3,
    rootMargin: "0px 0px -30px 0px"
};


const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute("data-target"); //adding + in front of counter changes it from a string to a number.
                    const count = + counter.innerText; //gets whatever is in the text part, in this case it's 0. 
                    const inc = target / speed; 
            
                    if(count < target){
                        counter.innerText = count + inc;
                        setTimeout(updateCount, 1);
                    }else{
                        count.innerText = target;
                    }
                }
                updateCount();
            });
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, options);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});



