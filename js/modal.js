document.addEventListener('DOMContentLoaded', function() {
    // モーダル要素の取得
    const aboutModal = document.getElementById('about-modal');
    const contactModal = document.getElementById('contact-modal');
    const closeButtons = document.querySelectorAll('.close-btn');

    // Aboutボタンのクリックイベント
    document.querySelector('.about-btn').addEventListener('click', function(e) {
        e.preventDefault();
        aboutModal.style.display = 'block';
    });

    // お問い合わせボタンのクリックイベント
    document.querySelector('.contact-btn').addEventListener('click', function(e) {
        e.preventDefault();
        contactModal.style.display = 'block';
    });

    // 閉じるボタンのクリックイベント
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            aboutModal.style.display = 'none';
            contactModal.style.display = 'none';
        });
    });

    // モーダル外クリックで閉じる
    window.addEventListener('click', function(e) {
        if (e.target == aboutModal) {
            aboutModal.style.display = 'none';
        }
        if (e.target == contactModal) {
            contactModal.style.display = 'none';
        }
    });
}); 