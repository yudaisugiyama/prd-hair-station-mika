function restartVideo(video) {

    // ビデオの再生時間を0に戻す
    video.currentTime = 0;

    // ビデオを再生する
    video.play();
}

window.addEventListener('scroll', function() {

    // 現在のスクロール位置を取得
    var currentPosition = window.scrollY;

    // フェードインさせるコンポーネントを取得
    var container = document.querySelectorAll('.fade-in-container');

    // スクロール位置に応じて.showを付与
    if (currentPosition > 30) {
        container[0].classList.add('show');
    }
    if (currentPosition > 400) {
        container[1].classList.add('show');
    }
    if (currentPosition > 750) {
        container[2].classList.add('show');
    }
    if (currentPosition > 1050) {
        container[3].classList.add('show');
    }
    if (currentPosition > 1100) {
        container[4].classList.add('show');
    }
});

  
document.addEventListener('mousemove', function(e) {

    // #followerを取得
    var follower = document.getElementById('follower');

    // 現在のスクロール位置を取得
    var currentPosition = window.scrollY;

    // 
    var x = e.clientX;
    var y = e.clientY;
    
    // leftとtopの値を更新
    follower.style.left = x + 'px';
    follower.style.top = y + currentPosition + 'px';
});