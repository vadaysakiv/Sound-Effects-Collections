// Store the currently playing audio
var currentAudio = null;

function playSound(soundFile) {
    // If audio is already playing, stop it
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset to start
    }

    // Load the new sound and play it
    currentAudio = new Audio('sound_collections/' + soundFile);
    currentAudio.play();
}
