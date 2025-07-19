const trollLines = [
    "YOUR FIRST EX LEFT YOU AND MARRIED, YOU STILL FUCKING UP.",
    "YOUR EX'S CHILD WANT TO TELL YOU UNCLE, STILL YOU FUCKED UP.",
];

const friendNameElement = document.getElementById('friendName');
const trollLineElement = document.getElementById('trollLine');
const generateWishButton = document.getElementById('generateWish');
const nameInput = document.getElementById('nameInput');
const setNameButton = document.getElementById('setName');

function getRandomTrollLine() {
    const randomIndex = Math.floor(Math.random() * trollLines.length);
    return trollLines[randomIndex];
}

function updateBirthdayWish() {
    trollLineElement.textContent = getRandomTrollLine();
}

generateWishButton.addEventListener('click', updateBirthdayWish);

setNameButton.addEventListener('click', () => {
    const friendName = nameInput.value.trim();
    if (friendName) {
        friendNameElement.textContent = friendName;
    } else {
        friendNameElement.textContent = "Friend";
    }
    nameInput.value = ""; // Clear the input field
});

// Initial load
updateBirthdayWish();
