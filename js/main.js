// 장르별 랭킹
const gerneprevbtn = document.getElementById("gerne-prevbtn");
const gernenextbtn = document.getElementById("gerne-nextbtn");
let currentindex = 0;
let position = 0;
const Imagewidth = 290;
const gernelist = document.querySelectorAll(".gerne-list");

gerneprevbtn.style.display = 'none';

const movePrev = () => {
    if (currentindex > 0) {
        position += Imagewidth;
        for (let i = 0; i < gernelist.length; i++) {
            gernelist[i].style.transform = `translateX(${position}px)`;
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
            gernelist[i].style.transform = `translateX(${position}px)`;
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


// 유튜브 랭킹

const playlistprevbtn = document.getElementById("play-list-prevbtn");
const playlistnextbtn = document.getElementById("play-list-nextbtn");
const youtubewidth = 482;
let playindex = 0;
let youtubeposition = 0;
const playlist = document.querySelectorAll(".play-list");

playlistprevbtn.style.display = 'none';

const playlistPrev = () => {
    if (playindex > 0) {
        youtubeposition += youtubewidth;
        for (let i = 0; i < playlist.length; i++) {
            playlist[i].style.transform = `translateX(${youtubeposition}px)`;
        }
        playindex = playindex - 1;
        if (playindex === 0) {
            playlistprevbtn.style.display = 'none';
        }
        playlistnextbtn.style.display = 'block';
    }
};

const playlistNext = () => {
    if (playindex < playlist.length) {
        youtubeposition -= youtubewidth;
        for (let i = 0; i < playlist.length; i++) {
            playlist[i].style.transform = `translateX(${youtubeposition}px)`;
        }
        playindex = playindex + 1;
        if (playindex > 0) {
            playlistprevbtn.style.display = 'block';
        }
        if (playindex === playlist.length - 3) {
            playlistnextbtn.style.display = 'none';
        }
    }
};

playlistprevbtn.addEventListener("click", playlistPrev);
playlistnextbtn.addEventListener("click",playlistNext);


// 구글 번역기 + 아이콘

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

// 로그인

document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('userName');
    
    const userWelcomeMessage = document.getElementById('userWelcomeMessage');
    const logintext = document.getElementById('login-signup');
    const signuptext = document.getElementById('signup')
    
    if (username) {
        logintext.textContent = `${username}님`;
        logintext.href = "#";
        signuptext.style.display = 'none';
    }
});
