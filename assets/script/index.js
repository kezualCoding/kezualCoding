let isDark = false;

function themeChanger(){
    if (isDark){
        isDark = !isDark;
        document.querySelector('.mainNav').classList.remove('mainNavDark');
        document.body.style.background = 'white';
        document.body.querySelector('.main-page').style.color = 'black';
        document.body.querySelector('.mainHeading').style.backgroundImage = 'linear-gradient(to top, #accbee 0%, #e7f0fd 100%)';
        document.body.querySelector('.mainHeading__description').style.color = 'black';
        document.body.querySelector('.cta').style.color = 'black';
        document.body.querySelector('.cta').style.border = '1px solid black';
        document.body.querySelector('.mainHeading__title').style.color = '#637498';
        document.body.querySelector('.mainHeading__title').style.textShadow = '0 0 0px black';
        document.body.querySelector('.mainHeading__preTitle').style.color = '#637498';
        document.body.querySelector('.mainHeading__preTitle').style.textShadow = '0 0 0px black';
        document.body.querySelector('.stay-tuned').style.color = 'silver';
    }
    else{
        isDark = !isDark;
        document.querySelector('.mainNav').classList.add('mainNavDark');
        document.body.style.background = 'linear-gradient(to top, #070e18 0%, black 100%)';
        document.body.querySelector('.main-page').style.color = 'silver';
        document.body.querySelector('.mainHeading').style.backgroundImage = "url('assets/images/sky.jpg')";
        document.body.querySelector('.mainHeading__description').style.color = 'black';
        document.body.querySelector('.cta').style.color = 'black';
        document.body.querySelector('.cta').style.border = '1px solid black';
        document.body.querySelector('.mainHeading__title').style.color = 'black';
        document.body.querySelector('.mainHeading__title').style.textShadow = '0 0 10px black';
        document.body.querySelector('.mainHeading__preTitle').style.color = 'black';
        document.body.querySelector('.mainHeading__preTitle').style.textShadow = '0 0 10px black';
        document.body.querySelector('.stay-tuned').style.color = 'silver';
     }
}

document.getElementById('themeChanger').addEventListener('click', function(){
    themeChanger();
})

