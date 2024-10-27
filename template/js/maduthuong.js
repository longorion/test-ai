// Kiểm tra loại kết nối
// Nếu effectiveType là '2g', '3g', '4g', '5g' thì có thể là mạng di động
// Ngược lại, có thể là Wi-Fi hoặc loại kết nối khác
function isConnectedToWifi() {
    if (navigator.connection && navigator.connection.effectiveType) {
    // if (window.navigator.connection.effectiveType.endsWith("4g")) {
        console.log("Loại kết nối:", navigator.connection.effectiveType);
        return false;
    } else {
        console.log("Loại kết nối: Wifi");
        return true;
  }
}

const COUNTDOWN_TIME = 5; // 180 seconds
const SCROLL_THRESHOLD = 0.5; // 80%
const CODE_PREFIX = 'OSG_';
const CODE_LENGTH = 8;

let isEligibleForCode = false;
    let hasReceivedCode = false;
    
function generateRandomCode() {
    return CODE_PREFIX + Array.from({length: CODE_LENGTH}, () => Math.floor(Math.random() * 10)).join('');
}

function displayCode() {
    if (!hasReceivedCode) {
        const code = generateRandomCode();
        alert("Mã dự thưởng của bạn: " + code);
        hasReceivedCode = true;
        // Here you can add code to send this to your server or store it locally
    }
}

function checkScrollPosition() {
    if (isEligibleForCode && !hasReceivedCode) {
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;
        if (scrollPosition >= pageHeight * SCROLL_THRESHOLD) {
            displayCode();
            window.removeEventListener('scroll', checkScrollPosition);
        }
    }
}

function startCountdown() {
    let countdown = COUNTDOWN_TIME;
    const countdownInterval = setInterval(() => {
        countdown--;
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            isEligibleForCode = true;
            window.addEventListener('scroll', checkScrollPosition);
        }
    }, 1000);
}

window.addEventListener('load', () => {
    if (isConnectedToWifi() == false) {
        startCountdown();
    } else {
        alert("Vui lòng sử dụng kết nối 3G/4G/5G để nhận mã dự thưởng.");
    }
});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        isEligibleForCode = false;
    } else {
        startCountdown(); // Reset countdown when tab becomes visible again
    }
});