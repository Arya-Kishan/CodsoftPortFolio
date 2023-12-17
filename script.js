gsap.registerPlugin(ScrollTrigger);
let project = document.querySelector(".project")
let sec2 = document.querySelector(".sec2")
let sec7 = document.querySelector(".sec7")
let sec8 = document.querySelector(".sec8")
let rangeBox = document.querySelector(".rangeBox")
let secH2 = document.querySelector("#secH2")
let observer1 = new IntersectionObserver(function (entries) {
    entries.forEach((e) => {
        if (e.isIntersecting) {
            console.log("reach");
            sec8.style.zIndex = -1;
        }
    })
})

observer1.observe(project)

let observer2 = new IntersectionObserver(function (entries) {
    entries.forEach((e) => {
        if (e.isIntersecting) {
            console.log("reach");
            sec8.style.zIndex = -2;
        }
    })
})

observer2.observe(sec2)

let course = [{ name: "HTML", percentage: '90%' }, { name: "CSS", percentage: '88%' }, { name: "JAVASCRIPT", percentage: '94%' }, { name: "REACT JS", percentage: '70%' }]
course.forEach((e) => {
    rangeBox.innerHTML += `<div class="range"><span class="course"><span>${e.name}</span><span>${e.percentage}</span></span><div><p style="width: ${e.percentage};"></p></div></div>`
})

function handleContact(e){
    if(e.innerText == "Email"){
        window.location.href = "mailto:arya12345kishan@gmail.com"
    }else if(e.innerText == "Instagram"){
        window.location.href = "https://www.instagram.com/aryarajputujjwal/"
    }else{
        window.location.href = 'https://wa.me/7762994583'
    }
}


setInterval(() => {
    secH2.innerHTML == "Frontend Designer" ? secH2.innerHTML = "Frontend Developer" : secH2.innerHTML = "Frontend Designer"
}, 3000);

gsap.from(".navIcon img", {
    y: 100,
    delay : 1,
    duration: .5,
})

gsap.from("#skillH1", {
    scrollTrigger:"#skillH1",
    x: -100,
    opacity:0,
})
gsap.from(".sec3", {
    scrollTrigger:".sec3",
    x: 100,
    opacity:0,
    duration: 1,
})
gsap.from("#projects h1", {
    scrollTrigger:"#projects h1",
    x: 100,
    opacity:0,
    duration: 1,
})
gsap.from(".projectCard img", {
    scrollTrigger:".projectCard img",
    y: 100,
    opacity:0,
    duration: 1,
})
gsap.from(".contact h1", {
    scrollTrigger:".contact h1",
    x: 100,
    opacity:0,
    duration: 1,
})
gsap.from("form", {
    scrollTrigger:"form",
    x: -100,
    opacity:0,
    duration: 1,
})