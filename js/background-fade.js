document.addEventListener('DOMContentLoaded', function() {
    const unityIcon = document.querySelector('.unity-icon');
    const jsIcon = document.querySelector('.js-icon');
    const githubIcon = document.querySelector('.github-icon');
    
    function handleScroll() {
        // ページの全体の高さを取得
        const pageHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );
        
        // 上部30%を除外した残りの70%を分割
        const topSection = pageHeight * 0.3;  // 上部30%
        const remainingHeight = pageHeight - topSection;  // 残りの70%
        
        // 各セクションの境界を計算
        const unityStart = topSection;
        const unityEnd = topSection + (remainingHeight * 0.357);  // 残りの25%
        const jsStart = unityEnd;
        const jsEnd = jsStart + (remainingHeight * 0.286);  // 残りの20%
        const githubStart = jsEnd;
        const githubEnd = githubStart + (remainingHeight * 0.286);  // 残りの20%
        // 残りの5%は非表示
        
        // 現在のスクロール位置
        const scrollPosition = window.scrollY + window.innerHeight * 0.5;
        
        // 上部30%
        if (scrollPosition < topSection) {
            unityIcon.style.opacity = 0;
            jsIcon.style.opacity = 0;
            githubIcon.style.opacity = 0;
        }
        // Unityセクション (25%)
        else if (scrollPosition < jsStart) {
            unityIcon.style.opacity = 0.15;
            jsIcon.style.opacity = 0;
            githubIcon.style.opacity = 0;
        }
        // JSセクション (20%)
        else if (scrollPosition < githubStart) {
            unityIcon.style.opacity = 0;
            jsIcon.style.opacity = 0.15;
            githubIcon.style.opacity = 0;
        }
        // GitHubセクション (20%)
        else if (scrollPosition < githubEnd) {
            unityIcon.style.opacity = 0;
            jsIcon.style.opacity = 0;
            githubIcon.style.opacity = 0.15;
        }
        // 最後の5%
        else {
            unityIcon.style.opacity = 0;
            jsIcon.style.opacity = 0;
            githubIcon.style.opacity = 0;
        }
    }
    
    // スクロールイベントのリスナーを追加
    window.addEventListener('scroll', handleScroll);
    // 初期表示時にも実行
    handleScroll();
}); 