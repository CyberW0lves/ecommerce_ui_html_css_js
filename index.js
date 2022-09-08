const menuBtn = document.getElementById("menu");
const menuContainer = document.getElementsByClassName("menu_container")[0];
const closeBtn = document.getElementById("close");

menu.addEventListener("click", () => {
    menuContainer.style.left = "0"
})

closeBtn.addEventListener("click", () => {
    menuContainer.style.left = "-80%"
})