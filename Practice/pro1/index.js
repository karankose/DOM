let heading = document.querySelector("h1");
heading.innerHTML = "DOM is ready ";
let hh = document.getElementById("hh");
hh.innerHTML= "hello guys welcome!";

hh.style.color = "red";
hh.style.fontSize = " 100px";

hh.addEventListener("mouseover",setTimeout(()=>{
    hh.innerHTML= "change";
    hh.style.backgroundColor="blue";
},5000));