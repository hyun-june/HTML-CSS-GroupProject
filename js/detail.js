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

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


const calbtn = document.querySelectorAll(".cal-btn");
    function toggleActive(button) {
        // 모든 버튼의 active 클래스를 제거
        calbtn.forEach(btn => btn.classList.remove('active'));
        // 클릭된 버튼에 active 클래스 추가
        button.classList.add('active');
    }


const timebtn = document.querySelectorAll(".time-btn");
    function timetable(button){
        timebtn.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    }