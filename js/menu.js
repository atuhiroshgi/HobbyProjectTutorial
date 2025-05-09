document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    // ハンバーガーメニューのクリックイベント
    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("active");
    });

    // メニュー外をクリックしたら閉じる
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".header-content")) {
            mainNav.classList.remove("active");
        }
    });
});
