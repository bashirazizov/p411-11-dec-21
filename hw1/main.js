let buttons = document.querySelectorAll(".buttons span")

for (const btn of buttons) {
    btn.addEventListener("click",function () {
        for (const item of document.querySelectorAll(".active")) {
            item.classList.remove("active");
        }
        this.classList.add("active");
        console.log("#"+this.getAttribute("mamed"));
        document.querySelector("#"+this.getAttribute("mamed")).classList.add("active");
    });
}


// let buttons = document.querySelectorAll(".buttons span")
// let tabs = document.querySelectorAll(".text-item")
// for (const btn of buttons) {
//     btn.addEventListener("click",function () {
//         for (const item of document.querySelectorAll(".active")) {
//             item.classList.remove("active");
//         }
//         this.classList.add("active");
//         console.log(this.getAttribute("data-target"));

//         for (const item of tabs) {
//             if (item.id == this.getAttribute("data-target")) {
//                 item.classList.add("active");
//             }
//         }
//     });
// }