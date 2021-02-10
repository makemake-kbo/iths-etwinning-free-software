let i = 0;
let links = document.getElementsByTagName("nav")[0].querySelectorAll("div");
links[0].addEventListener("click", ()=>{Load("skola/index.html")});//umesto XXX link za skolu
links[1].addEventListener("click", ()=>{Load("grad/index.html")});//umesto XXX link za grad
links[2].addEventListener("click", ()=>{Load("drzava/index.html")});//umesto XXX link za drzavu

function Load(link){
    window.location = link;
}