import React from 'react';
import styles from '../styles/Home.module.scss'

export function Header() {
  const restartVideo = (video: HTMLVideoElement) => {
    video.currentTime = 0;
    video.play();
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/assets/img/logo.png" alt="logo" />
      </div>

      <div className={styles.navigation}>
        <ul>
          <li><a href="/">ホーム</a></li>
          <li><a href="/staff">スタッフ</a></li>
          <li><a href="/fee">料金</a></li>
          <li><a href="/product">商品</a></li>
          <li><a href="/access">アクセス</a></li>
          <li><a href="/contact">ご予約・お問い合わせ</a></li>
        </ul>
      </div>

      <div className={styles.main__visual}>
        <video
          src="/assets/video/introduction-movie.mp4"
          autoPlay
          muted
          playsInline
          onEnded={(e) => restartVideo(e.target as HTMLVideoElement)}>
        </video>
      </div>
    </header>
  );
}
