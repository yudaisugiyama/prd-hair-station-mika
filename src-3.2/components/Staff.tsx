import Image from 'next/image';
import styles from '../styles/Staff.module.scss'
import { useWindowWidth } from "./Main";

export function Staff() {
  const { windowWidth, spWidth, tbWidth, pcWidth } = useWindowWidth();
  const width: number = windowWidth > pcWidth ? Math.floor(windowWidth * 0.6 * 0.6) : Math.floor(windowWidth * 0.6);

  return (
    <div className="page__template">
        {windowWidth <= tbWidth && (
          <>
            <h1>「笑顔の花を咲かせ、　　　　</h1>
            <h1>いつでも立ち寄れる場所と</h1>
            <h1>沢山の方と出逢いたい」</h1>
          </>
        )}
        {windowWidth > tbWidth && (
          <h1 style={{ textAlign: 'center' }}>「笑顔の花を咲かせ、いつでも立ち寄れる場所と、沢山の方と出逢いたい」</h1>
        )}
        <div className={styles.image__container}>
          <Image
          className={styles.staff__image}
          src="/assets/img/hasegawa__yoshiko_2.jpg"
          alt="hasegawa_yoshiko"
          width={width}
          height={width}
          style={{ transform: "scaleX(-1)", display: 'block', margin: 'auto' , height: 'auto'}}
          />
        </div>
        <h2>長谷川 芳子 / HASEGAWA YOHIKO</h2>
        <br />
        <p>|</p>
        <br />
        <p>お客様には美容の面からだけでなく</p>
        <p>アロマの面からも美しさをご提供させていただきます</p>
        <br />
        <p>|</p>
        <br />
        <p>美容師</p>
        <p>心身アロマ気功師</p>
        <p>フットセラピスト</p>
        <br />
        <p>|</p>
        <br />
        <Image
        src="/assets/img/hasegawa__yoshiko_1.jpg"
        alt="logo"
        width={width}
        height={width}
        style={
          windowWidth < tbWidth
            ? { width: "100%", height: "auto" }
            : { display: 'block', margin: 'auto', height: 'auto' }
        }
        />
        <Image
        src="/assets/img/hasegawa__yoshiko_2.jpg"
        alt="logo"
        width={width}
        height={width}
        style={
          windowWidth < tbWidth
            ? { width: "100%", height: "auto" }
            : { display: 'block', margin: 'auto', height: 'auto' }
        }
        />
        <Image
        src="/assets/img/hasegawa__yoshiko_3.jpg"
        alt="logo"
        width={width}
        height={width}
        style={
          windowWidth < tbWidth
            ? { width: "100%", height: "auto" }
            : { display: 'block', margin: 'auto', height: 'auto' }
        }
        />
    </div>
  );
};
