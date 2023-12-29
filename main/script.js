function navigation() {


    document.querySelector(".arrow-1").addEventListener("click", (eve) => {
        eve.preventDefault();
        document.location.href = "#about";
    })
    document.querySelector(".arrow-2").addEventListener("click", (eve) => {
        eve.preventDefault();
        document.location.href = "#experience";
    })
    document.querySelector(".arrow-3").addEventListener("click", (eve) => {
        eve.preventDefault();
        document.location.href = "#projects";
    })
    document.querySelector(".arrow-4").addEventListener("click", (eve) => {
        eve.preventDefault();
        document.location.href = "#contact";
    })
    document.querySelector(".arrow-5").addEventListener("click", (eve) => {
        eve.preventDefault();
        document.location.href = "#home";
    })
}
navigation();


// FIXME : Check why below code isn't working with unexpected errors which are not correct


// let sections = [about, experience, projects, contact]
// let count = 1
// document.querySelectorAll("arrow").forEach(ele, () => {
//     // document.location.href = `#{section[count]}`
//     ele.addEventListener("click", (eve) = {
//         console.log(sections[count]);
//         count ++;
// })
// })