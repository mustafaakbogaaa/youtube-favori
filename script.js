// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the elements we'll be working with
    const animateButton = document.getElementById('animateButton');
    const animationBox = document.getElementById('animationBox');
    
    // Track animation state
    let isAnimated = false;
    
    // Add click event listener to the button
    animateButton.addEventListener('click', function() {
        // Toggle animation state
        isAnimated = !isAnimated;
        
        if (isAnimated) {
            // Start animation sequence
            animateElement();
            // Change button text
            animateButton.textContent = 'Reset';
        } else {
            // Reset the element to its original state
            resetElement();
            // Change button text back
            animateButton.textContent = 'Animate!';
        }
    });
    
    // Function to animate the element
    function animateElement() {
        // Apply multiple animations in sequence
        
        // First animation: rotate and change color
        animationBox.style.transform = 'rotate(360deg)';
        animationBox.style.backgroundColor = '#ff7e5f';
        
        // After 1 second, change shape and size
        setTimeout(() => {
            animationBox.style.borderRadius = '50%';
            animationBox.style.width = '150px';
            animationBox.style.height = '150px';
        }, 1000);
        
        // After 2 seconds, move the element
        setTimeout(() => {
            animationBox.style.transform = 'rotate(720deg) translateX(100px)';
            animationBox.style.backgroundColor = '#00c9ff';
        }, 2000);
        
        // After 3 seconds, apply final state
        setTimeout(() => {
            animationBox.style.transform = 'rotate(1080deg) translateX(0)';
            animationBox.style.backgroundColor = '#7bed9f';
            animationBox.style.boxShadow = '0 0 20px rgba(0, 255, 0, 0.5)';
        }, 3000);
    }
    
    // Function to reset the element to its original state
    function resetElement() {
        animationBox.style.transform = 'rotate(0deg)';
        animationBox.style.backgroundColor = '#a777e3';
        animationBox.style.borderRadius = '8px';
        animationBox.style.width = '200px';
        animationBox.style.height = '100px';
        animationBox.style.boxShadow = 'none';
    }
    
    // Add hover effect to the animation box
    animationBox.addEventListener('mouseover', function() {
        if (!isAnimated) {
            this.style.transform = 'scale(1.05)';
        }
    });
    
    animationBox.addEventListener('mouseout', function() {
        if (!isAnimated) {
            this.style.transform = 'scale(1)';
        }
    });
}); 