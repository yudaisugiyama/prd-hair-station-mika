import Link from 'next/link'
import Image from 'next/image'
import { useWindowSize } from './Main';
import HeaderProps from '../types/header';
import styles from '../styles/Home.module.scss'

export function Header({ pathname }: HeaderProps) {
  const restartVideo = (video: HTMLVideoElement) => {
    video.currentTime = 0;
    video.play();
  }
  const { width, height } = useWindowSize();
  const spWidth: number = 480;
  const pcWidth: number = 1024;
  const movieMaxHeight: number = 960;
  const imWidth: number = width > pcWidth ? 500 : 200;
  const imHeight: number = width > pcWidth ? 60 : 30;
  const isWide: boolean = width > spWidth ? true : false;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/assets/img/logo.png"
          alt="logo"
          width={imWidth}
          height={imHeight}
        />
      </div>

      <div className={styles.navigation}>
        <ul>
          <li><Link href="/">ホーム</Link></li>
          <li><Link href="/staff">スタッフ</Link></li>
          <li><Link href="/fee">料金</Link></li>
          <li><Link href="/product">商品</Link></li>
          <li><Link href="/access">アクセス</Link></li>
          <li><Link href="/contact">ご予約・お問い合わせ</Link></li>
        </ul>
      </div>

      {isWide && pathname === '/' && (
        <Image
        width={width}
        height={movieMaxHeight}
        src="/assets/img/introduction__image.jpg"
        alt="logo"
        style={{ transform: "scaleX(-1)" }}
      />
      )}

      {pathname === '/' && (
        <div className={styles.main__visual}>
          <video
            src="/assets/video/introduction__movie.mp4"
            autoPlay
            muted
            playsInline
            onEnded={(e) => restartVideo(e.target as HTMLVideoElement)}>
          </video>
        </div>
      )}
    </header>
  );
};
