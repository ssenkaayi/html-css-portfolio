const mobileMenu = document.querySelector('.humberg-menu');
const mobileNavLinks = document.querySelector('.nav-menu');
const closeMobileNavLinks = document.querySelector('.close-svg')
let isHumbergClicked = false;

mobileMenu.addEventListener('click',(e)=>{
    // console.log('hello');
    isHumbergClicked = true;
    if(isHumbergClicked){
        // console.log('clicked is true');
        mobileNavLinks.style.display = 'block';
        mobileMenu.style.display = 'none'
        closeMobileNavLinks.style.display = 'block'
        isHumbergClicked = false;
    }else{
        // console.log('clicked not true');
        mobileNavLinks.styles = 'none'
    };
    
});

// console.log('hello');