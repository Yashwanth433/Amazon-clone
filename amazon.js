
const lbutton= document.querySelector(".l-btn");
const rbutton = document.querySelector(".r-btn");


rbutton.addEventListener("click",
    function(event){
        const conent=document.querySelector(".product-slide");
        conent.scrollLeft +=1100;
        event.preventDefault();

})
lbutton.addEventListener("click",
    function(event){
        const conent=document.querySelector(".product-slide");
        conent.scrollLeft -=1100;
        event.preventDefault();

})
const lbutton1= document.querySelector(".btn-1b");
const rbutton1 = document.querySelector(".btn-1a");


rbutton1.addEventListener("click",
    function(event){
        const conent=document.querySelector(".product-slide-1");
        conent.scrollLeft +=1100;
        event.preventDefault();

})
lbutton1.addEventListener("click",
    function(event){
        const conent=document.querySelector(".product-slide-1");
        conent.scrollLeft -=1100;
        event.preventDefault();

})
const lbutton2= document.querySelector(".btn-1c");
const rbutton2 = document.querySelector(".btn-1d");


rbutton2.addEventListener("click",
    function(event){
        const conent=document.querySelector(".product-slide-2");
        conent.scrollLeft +=1100;
        event.preventDefault();

})
lbutton2.addEventListener("click",
    function(event){
        const conent=document.querySelector(".product-slide-2");
        conent.scrollLeft -=1100;
        event.preventDefault();

})

const backtop = document.querySelector(".backtop");

backtop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

const sidebar=document.querySelector(".sidebar");
const cross=document.querySelector(".fa-xmark");
const black=document.querySelector(".black");
const sidebtn=document.querySelector(".second-1");

sidebtn.addEventListener("click",()=>{
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
    document.body.classList.add("stop-scroll");
})
cross.addEventListener("click",()=>{
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
    document.body.classList.remove("stop-scroll");
})

const sign=document.querySelector(".ac");
const tri=document.querySelector(".triangle");
const signin=document.querySelector(".hdn-sign");

sign.addEventListener("click",()=>{
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
    document.body.classList.toggle("stop-scroll");
})
