let hour = document.querySelector(".clock .hour");
let minute = document.querySelector(".clock .minute");
let second = document.querySelector(".clock .second");
let date = document.querySelector(".clock .date");

setInterval(() =>{
    let now = new Date();

    hour.innerHTML = now.getHours() < 10 ? "0"+now.getHours() : now.getHours();
    minute.innerHTML = now.getMinutes() < 10 ? "0"+now.getMinutes() : now.getMinutes();
    second.innerHTML = now.getSeconds() < 10 ? "0"+now.getSeconds() : now.getSeconds();
    date.innerHTML = now.getDate()+"/"+(now.getMonth()+1)+"/"+now.getFullYear();
    
}, 1000);