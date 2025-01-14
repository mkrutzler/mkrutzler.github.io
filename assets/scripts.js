function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

  // Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

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