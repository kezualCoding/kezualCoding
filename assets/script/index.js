let isDark = true;

function themeChanger(){
    if (isDark){
        isDark = !isDark;
    }
    else{
        isDark = !isDark;
        document.querySelector('.mainNav').classList.add('mainNavDark');
        document.body.style.background = "transparent url('assets/images/sparkle.jpeg')";
        document.body.style.backgroundImage = 'linear-gradient(to top, #0c2458 0%, #040a19 50%)';
        document.body.querySelector('.main-page').style.color = 'silver';
        document.body.querySelector('.mainHeading').style.backgroundImage = 'linear-gradient(to top, #040a19 0%, black 50%)';
        document.body.querySelector('.mainHeading__description').style.color = 'silver';
     }
}

document.getElementById('themeChanger').addEventListener('click', function(){
    themeChanger();
})

