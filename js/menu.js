document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });

    // メニュー外クリックで閉じる
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.header-content')) {
            mainNav.classList.remove('active');
        }
    });
}); 