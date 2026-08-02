 const words= [
    {
        text: "beautiful websites",
        bg: "#F3D5CC",
        dot: "#CB6A4A"
    },
{
    text: "responsive interfaces",
    bg: "#DDF6E8",
    dot: "#2E8B57"
},
{
    text: "modern experiences",
    bg: "#DCEBFF",
    dot: "#4169E1"
},
{
    text: "user experiences",
    bg: "#EADCF8",
    dot: "#7B3FA1"
},
];
let currentWord= 0;

const skillPill= document.getElementById("changing-word");
const changingText= document.getElementById("changing-text");
const pillDot= document.querySelector(".pill-dot");



skillPill.style.backgroundColor= words[0].bg;
pillDot.style.backgroundColor= words[0].dot;
changingText. textContent= words[0].text;

setInterval(function(){
    changingText.style.opacity= 0;
    setTimeout(function (){
        currentWord++;
        if (currentWord>= words.length){
            currentWord= 0;
        }
        changingText.textContent= words[currentWord].text;

        skillPill.style.backgroundColor= words[currentWord].bg;
         pillDot.style.backgroundColor= words[currentWord].dot;

        changingText.style.opacity= 1;
    }, 200);
    }, 2500);

 const sections= document.querySelectorAll("section");
 const navLinks= document.querySelectorAll("nav a");
 window.addEventListener("scroll", function(){
    let currentSection="";
    sections.forEach(function(section) {
const sectionTop= section.offsetTop;
const sectionHeight= section.clientHeight;
if (window.scrollY >= sectionTop - 100) {
    currentSection= section.getAttribute("id"); 
}
    });
navLinks.forEach(function(link){
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSection){
        link.classList.add("active");
    }
});
 });   

 const skillTitles= document.querySelectorAll(".skill-title");
 skillTitles.forEach(title=>{
    title.addEventListener("click", function(){
        const content= this.nextElementSibling;
        content.classList.toggle("active");
    });
 });