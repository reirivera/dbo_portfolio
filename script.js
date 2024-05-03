// Define toggleMenu function globally
function toggleMenu() {
    var menu = document.querySelector('.menu');
    var blackScreen = document.querySelector('.black-screen');
    var hamburgerMenu = document.querySelector('.hamburger-menu');

    // Toggle menu visibility
    var menuIsVisible = menu.style.display === 'block';

    // Apply smooth opacity transition
    if (menuIsVisible) {
        fadeOut(menu);
        fadeOut(blackScreen);
    } else {
        fadeIn(menu);
        fadeIn(blackScreen);
    }

    // Change hamburger menu content
    hamburgerMenu.innerHTML = menuIsVisible ? 'Menu' : 'Fermé';

    // Change hamburger menu font color and border color
    hamburgerMenu.style.color = menuIsVisible ? 'black' : 'white';
    hamburgerMenu.style.border = menuIsVisible ? '1px solid black' : '1px solid white';
}


// Function to fade in an element
function fadeIn(element) {
    element.style.display = 'block';
    element.style.opacity = 0;
    var opacity = 0;
    var interval = setInterval(function() {
        if (opacity < 1) {
            opacity += 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 30); // Adjust the interval for smoother or faster transition
}

// Function to fade out an element
function fadeOut(element) {
    var opacity = 1;
    var interval = setInterval(function() {
        if (opacity > 0) {
            opacity -= 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
            element.style.display = 'none';
        }
    }, 30); // Adjust the interval for smoother or faster transition
}


    window.addEventListener('load', function () {
        var timeAndLocation = document.getElementById('time-and-location');

        // Function to update the time
        function updateTime() {
            var currentDate = new Date();
            var timeString = currentDate.toLocaleTimeString();
            timeAndLocation.textContent = timeString;
        }

        // Initial call to update the time
        updateTime();

        // Set interval to update the time every second
        setInterval(updateTime, 1000);
    });

    // Get the button element
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Add a click event listener to the button
    scrollToTopBtn.addEventListener("click", function() {
        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


    