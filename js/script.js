let i = 0;
let links = document.getElementsByTagName("nav")[0].querySelectorAll("div");
links[0].addEventListener("click", ()=>{Load("XXX")});//umesto XXX link za grad
links[1].addEventListener("click", ()=>{Load("XXX")});//umesto XXX link za skolu
links[2].addEventListener("click", ()=>{Load("XXX")});//umesto XXX link za drzavu

function Load(link){
    window.location = link;
}