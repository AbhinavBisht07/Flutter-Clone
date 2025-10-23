let slidingMenu = document.querySelector(".slidingMenu");
let cancelBtn = document.querySelector(".cancelBtn");
let menuBtn = document.querySelector(".menuBtn");
let titles = document.querySelectorAll(".dropdown .title");

cancelBtn.addEventListener("click",function(){
    slidingMenu.style.display = "none"; 
});

menuBtn.addEventListener("click",function(){
    slidingMenu.style.display = "flex"; 
});

titles.forEach(function(title){
    title.addEventListener("click",function(){
        // let dropdownMenu = document.querySelector(".dropdownMenu"); //this wont work because it always returns the first element that matches the dropdownMenu(i.e, the first element that has class .dropdownMenu), so instead of this we do this :-
        let dropdownMenu = title.nextElementSibling;
        let down = title.querySelector(".down");
        let up = title.querySelector(".up");
        let isOpen = dropdownMenu.style.display === "flex";

        if(isOpen){
            dropdownMenu.style.display = "none";
            down.style.display = "inline";
            up.style.display = "none";
        }
        else{
            dropdownMenu.style.display = "flex";
            down.style.display = "none";
            up.style.display = "inline";
        }
    })
})