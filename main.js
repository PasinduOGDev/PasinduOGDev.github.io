let timeCount = document.getElementById('timer');
let text = document.getElementById('text'); // Reference to the text element for "Time's up!" message

function startTimer() {
    let timeLeft = 5;
    const timer = setInterval(function () {
        if (timeLeft > 0) {
            timeCount.innerHTML = timeLeft;
            timeLeft--;
        } else {
            clearInterval(timer);
            text.innerHTML = "Time's up!";
            videoPlayback(); // Start video playback after countdown ends
        }
    }, 1000);
}

startTimer(); // Countdown from 5 seconds

function videoPlayback() {
    // Create a video element dynamically
    const video = document.createElement('video');

    // Set the video attributes
    video.width = 640;
    video.height = 360;
    video.autoplay = true; // Autoplay the video once it's ready
    video.muted = false; // Optionally mute the video if desired

    // Add a video source
    const source = document.createElement('source');
    source.src = 'මගෙ_ගෙදර_එන්න.mp4'; // Replace with your actual video path
    source.type = 'video/mp4'; // Set the correct type for the video format

    // Append the source to the video element
    video.appendChild(source);

    // Append the video element to the container
    document.getElementById('videoDiv').appendChild(video);

    // Autoplay the video (will start immediately)
    video.play();
}