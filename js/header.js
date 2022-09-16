var header = document.getElementById("header");
var btnMobileMenu = document.getElementById("mobile-menu");
var headerHeight = header.clientHeight;
var modalMenu = document.getElementById("modal");
var menuHeaderMobile = document.getElementsByClassName("modal-container");

//  đóng mở header mobile menu

btnMobileMenu.onclick = () => {
  var isClosed = header.clientHeight === headerHeight;
  
  if (isClosed) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

//đóng mở menu khi click vào item menu
var menuItems = document.querySelectorAll(".modal-menu-mobile li a");
menuItems.forEach((menuItem) => {
    menuItem.onclick = () => {
        console.log("hi")
        modalMenu.style.display = "none";
        menuHeaderMobile.style.display = "none";
    }
})







var listLineActives = document.querySelectorAll(".add-active");

listLineActives.forEach((listLineActive) => {
  listLineActive.onclick = () => {
    console.log(listLineActive);
    document
      .querySelector(".add-active.line-bt-navItem")
      .classList.remove("line-bt-navItem");
    this.classList.add("line-bt-navItem");
  };
});
