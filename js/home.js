// home
var butnMenu = document.getElementById("menu-btn-js");
var modalMenu = document.getElementById("modal");
var closeMenu = document.getElementById("close-btn-js");
var headerItem = document.getElementById("header");
var navMenuItem = document.getElementsByClassName("nav-menu");
var backBtn = document.getElementById("back-to-top");

butnMenu.onclick = () => {
  modalMenu.style.display = "block";
  butnMenu.style.display = "none";
  closeMenu.style.display = "block";
};

closeMenu.onclick = () => {
  modalMenu.style.display = "none";
  butnMenu.style.display = "block";
  closeMenu.style.display = "none";
};

document.onscroll = () => {
  if (window.scrollY >= 560) {
    headerItem.style.display = "block";
    backBtn.style.display = "block";
    navMenuItem[0].style.display = "none";
    headerItem.classList.add("header-sm");
  } else {
    headerItem.style.display = "none";
    backBtn.style.display = "none";
    navMenuItem[0].style.display = "block";
  }
};
backBtn.onclick = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
