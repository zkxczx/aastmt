document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to project images only
    const projectImages = document.querySelectorAll('.project-img');
    projectImages.forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.03)';
            this.style.transition = 'transform 0.3s';
        });
        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Console message
    console.log("Welcome to Ziad's portfolio!");
});