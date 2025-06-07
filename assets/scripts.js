document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.img-container img');
    const overlays = document.querySelectorAll('.img-overlay');

    function toggleImageSize(event) {
        const imgContainer = event.target.closest('.img-container');
        const img = imgContainer.querySelector('img');
        const overlay = imgContainer.querySelector('.img-overlay');
        img.classList.toggle('expanded');
        overlay.classList.toggle('expanded');
    }

    images.forEach(image => {
        image.addEventListener('click', toggleImageSize);
    });

    overlays.forEach(overlay => {
        overlay.addEventListener('click', toggleImageSize);
    });
});