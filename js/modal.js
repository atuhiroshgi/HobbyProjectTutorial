document.addEventListener('DOMContentLoaded', function() {
    // モーダル要素の取得
    const aboutModal = document.getElementById('about-modal');
    
    // ボタン要素の取得
    const aboutBtn = document.querySelector('.about-btn');
    const closeBtns = document.querySelectorAll('.close-btn');

    // モーダルを閉じる関数
    function closeModals() {
        aboutModal.classList.remove('show');
        document.body.style.overflow = '';
    }

    // Aboutモーダルを開く
    aboutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        aboutModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    // 閉じるボタンの処理
    closeBtns.forEach(btn => {
        btn.addEventListener('click', closeModals);
    });

    // モーダル外クリックで閉じる
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModals();
        }
    });
}); 