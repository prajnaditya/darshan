const trollLines = [
    "Your ex tied the knot,And her kid's like, Yo, Uncle, what's good?",
    "Your ex swapped rings faster than a rom-com plot,Now her kid's grinning, “Uncle, spare a buck or what?”",
    "Your ex got hitched in a flash,Now her kid’s begging, “Uncle, got any cash?”",
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
