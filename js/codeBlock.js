function copyCode(btn) {
    // ボタンが無効化されている場合は処理を中止
    if (btn.disabled) {
        return;
    }

    const pre = btn.nextElementSibling;
    const code = pre.querySelector('code');
    const textToCopy = code.getAttribute('data-code');
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = btn.textContent;
        btn.disabled = true;  // ボタンを一時的に無効化
        btn.textContent = 'コピーしました！';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;  // ボタンを再度有効化
        }, 1000);  // 1秒後に元に戻す
    });
} 