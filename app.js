const humbergmenu = document.querySelector('.humberg-icon');
const mobileNavLinks = document.querySelector('.mobile-nav-links');
const mobileCloseSvg = document.querySelector('.close-svg');
const mobileNav = document.querySelector('.mobile-nav');
let isHumbergmenuClicked = false;


humbergmenu.addEventListener('click',(e)=>{
    isHumbergmenuClicked = true;

    if(isHumbergmenuClicked){
        mobileNavLinks.style.display='flex';
        mobileCloseSvg.style.display = 'block'; 
        humbergmenu.style.display = 'none'
        mobileNav.style.position = 'fixed'
    }
});

mobileCloseSvg.addEventListener('click',()=>{
    humbergmenu.style.display = 'block';
    mobileCloseSvg.style.display = 'none'; 
    mobileNavLinks.style.display='none';
    mobileNav.style.position = 'static'
});


