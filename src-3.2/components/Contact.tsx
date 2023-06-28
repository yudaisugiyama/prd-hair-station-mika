import Image from 'next/image';
import styles from '../styles/Contact.module.scss'

export function Contact() {
  return (
    <div className="page__template">
        <h1>ご予約・お問い合わせ</h1>
        <Image
        src="/assets/img/contact__image_1.jpg"
        alt="logo"
        width={420}
        height={280}
        style={{ transform: "scaleX(-1)"}}
        />
        <h2><a href="tel:080-5178-7207">080-5178-7207</a></h2>
        <br />
        <br />
        <p>|</p>
        <br />
        <p className={styles.stand__out}>ご予約や商品に関する質問等は</p>
        <p className={styles.stand__out}>上記の電話番号よりお気軽にお問い合わせください</p>
        <br />
        <p>|</p>
        <br />
        <Image
        src="/assets/img/contact__image_1.jpg"
        alt="logo"
        width={420}
        height={280}
        style={{width: "100%", height: "auto" }}
        />
        <Image
        src="/assets/img/contact__image_2.jpg"
        alt="logo"
        width={420}
        height={280}
        style={{width: "100%", height: "auto" }}
        />
        <Image
        src="/assets/img/contact__image_3.jpg"
        alt="logo"
        width={420}
        height={280}
        style={{width: "100%", height: "auto" }}
        />
    </div>
  );
};
