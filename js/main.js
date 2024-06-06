const gerneprevbtn = document.getElementById("gerne-prevbtn");
const gernenextbtn = document.getElementById("gerne-nextbtn");
let currentindex = 0;
let position = 0;
const Imagewidth = 290;
const gernelist = document.querySelectorAll(".gerne-list");
const gerneImg = document.querySelectorAll(".gerne-list__img img");
const gernerank = document.querySelectorAll(".gerne-list__ranking");
const gernecontent = document.querySelectorAll(".gerne-list__content");

gerneprevbtn.style.display = 'none';

const movePrev = () => {
    if (currentindex > 0) {
        position += Imagewidth;
        for (let i = 0; i < gernelist.length; i++) {
            gerneImg[i].style.transform = `translateX(${position}px)`;
            gernerank[i].style.transform = `translateX(${position}px)`;
            gernecontent[i].style.transform = `translateX(${position}px)`;
        }
        currentindex = currentindex - 1;
        if (currentindex === 0) {
            gerneprevbtn.style.display = 'none';
        }
        gernenextbtn.style.display = 'block';
    }
};

const moveNext = () => {
    if (currentindex < gernelist.length - 5) {
        position -= Imagewidth;
        for (let i = 0; i < gernelist.length; i++) {
            gerneImg[i].style.transform = `translateX(${position}px)`;
            gernerank[i].style.transform = `translateX(${position}px)`;
            gernecontent[i].style.transform = `translateX(${position}px)`;
        }
        currentindex = currentindex + 1;
        if (currentindex > 0) {
            gerneprevbtn.style.display = 'block';
        }
        if (currentindex === gernelist.length - 5) {
            gernenextbtn.style.display = 'none';
        }
    }
};

gerneprevbtn.addEventListener("click", movePrev);
gernenextbtn.addEventListener("click", moveNext);

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: 'ko'
          , includedLanguages: 'en,ja,ko,zh-CN'
          , layout: google.translate.TranslateElement.InlineLayout.SIMPLE // none or HORIZONTAL, SIMPLE
        }
      , 'google_translate_element'
    );
}

function openTranslateWidget() {
    var translateElement = document.getElementById('google_translate_element');
    if (translateElement.style.display === 'none' || translateElement.style.display === '') {
        translateElement.style.display = 'block';
    } else {
        translateElement.style.display = 'none';
    }
}