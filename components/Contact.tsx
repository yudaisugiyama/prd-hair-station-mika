import Image from 'next/image';
import { useWindowWidth } from "./Main";
import styles from '../styles/Contact.module.scss'

export function Contact() {
  const { windowWidth, spWidth, tbWidth, pcWidth } = useWindowWidth();
  const width: number = windowWidth > pcWidth ? Math.floor(windowWidth * 0.6 * 0.6) : Math.floor(windowWidth * 0.6);

  return (
    <div className="page__template">
        {windowWidth <= tbWidth && (
          <h1>ご予約・お問い合わせ</h1>
        )}
        {windowWidth > tbWidth && (
          <h1 style={{ textAlign: 'center' }}>ご予約・お問い合わせ</h1>
        )}
        <Image
        src="/assets/img/contact__image_1.jpg"
        alt="logo"
        width={width}
        height={width}
        style={{ transform: "scaleX(-1)", display: 'block', margin: 'auto' , height: 'auto'}}
        />
        <h2><a href="tel:080-5178-7207">080-5178-7207</a></h2>
        <br />
        <br />
        <p>|</p>
        <br />
        <p>ご予約や商品に関する質問等は</p>
        <p>上記の電話番号よりお気軽にお問い合わせください</p>
        <br />
        <p>|</p>
        <br />
        <Image
        src="/assets/img/contact__image_1.jpg"
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
        src="/assets/img/contact__image_2.jpg"
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
        src="/assets/img/contact__image_3.jpg"
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
