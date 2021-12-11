let next = document.querySelector(".next");
let prev = document.querySelector(".prev");


next.addEventListener("click",function () {
    let active = document.querySelector(".active");
    active.classList.remove("active");

    if (active.nextElementSibling!=null) {
        active.nextElementSibling.classList.add("active")
    }else{
        document.querySelector(".slider div").firstElementChild.classList.add("active");
    }
})

prev.addEventListener("click",function () {
    let active = document.querySelector(".active");
    active.classList.remove("active");

    if (active.previousElementSibling!=null) {
        active.previousElementSibling.classList.add("active")
    }else{
        document.querySelector(".slider div").lastElementChild.classList.add("active");
    }
})