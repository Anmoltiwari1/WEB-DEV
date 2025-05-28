document.getElementById("submit").addEventListener('click',function () {
    let e = document.getElementById("email").value;  
    console.log(e);
    let p = document.getElementById("pass").value
    console.log(p);
    let para=document.getElementById("para")
    para.textContent=`Email:${e} , Password :${p}`
    para.style.backgroundColor="yellow"
    
});