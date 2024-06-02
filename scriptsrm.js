var frameCount = 107;
var currentFrame = 1;
var intervalId;

document.querySelector('.background').addEventListener('mouseenter', function() {
    intervalId = setInterval(function() {
        var frameNumber = String(currentFrame).padStart(3, '0');
        var backgroundUrl = 'url("frames/ezgif-frame-' + frameNumber + '.jpg")';
        document.querySelector('.background').style.backgroundImage = backgroundUrl;
        currentFrame = (currentFrame % frameCount) + 1;
    }, 100); // Adjust interval as needed
});

document.querySelector('.background').addEventListener('mouseleave', function() {
    clearInterval(intervalId);
});
