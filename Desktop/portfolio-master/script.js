var menu = document.getElementsByClassName("menu")[0];
function burgerMenu(x) {
    x.classList.toggle("change");
    toggleBurgerMenu();
}

function toggleBurgerMenu() {
     menu.classList.toggle("hidden");
} 

function resetBurgerMenu(){
    var winWidth = window.innerWidth;
    if (winWidth <= 1576){
        var burgerMenu = document.getElementById("burgerMenu");
        burgerMenu.classList.remove("change");
        menu.classList.add("hidden");
    }
}
window.addEventListener("resize", resetBurgerMenu);