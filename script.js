// Rank Calculation Logic
document.getElementById('rankForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let matchesPlayed = parseInt(document.getElementById('matchesPlayed').value);
    let kills = parseInt(document.getElementById('kills').value);
    let placement = parseInt(document.getElementById('placement').value);
    let rankResult = calculateRank(matchesPlayed, kills, placement);

    document.getElementById('result').innerText = `Your BGMI rank is: ${rankResult}`;
});

function calculateRank(matches, kills, placement) {
    let rank = (kills * 10 + (100 - placement * 5)) / matches;
    return Math.round(rank);
}

// Contact Form Logic
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Thank you for contacting us! We will get back to you soon.');
    } else {
        alert('Please fill in all fields.');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('flip-enter-active');
    setTimeout(() => {
        document.body.classList.remove('flip-enter-active');
    }, 50);
});

function navigateTo(url) {
    document.body.classList.add('flip-exit-active');
    setTimeout(() => {
        window.location.href = url;
    }, 500);
}