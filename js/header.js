  var header  = document.getElementById('header');
        var mobileMenu = document.getElementById('mobile-menu');
        var headerHeight = header.clientHeight;

        //đóng mở header mobile menu
        mobileMenu.onclick= () => {
           var isClosed= header.clientHeight === headerHeight;
           if(isClosed){
               header.style.height= 'auto';
           }else{
               header.style.height=null;
           }
        }
        //đóng mở menu khi click vào item menu
        var menuItems = document.querySelectorAll('#nav-menu-list li a');
        for(var i=0 ;i<menuItems.length;i++){
            var menuItem = menuItems[i];
            menuItem.onclick = () => {
                header.style.height=null;
            }
        }
        var listLineActives = document.querySelectorAll('.add-active');
        
        listLineActives.forEach((listLineActive) => {
            listLineActive.onclick = () => {
                console.log(listLineActive);
                document.querySelector('.add-active.line-bt-navItem').classList.remove('line-bt-navItem');
                this.classList.add('line-bt-navItem');
                }
        })