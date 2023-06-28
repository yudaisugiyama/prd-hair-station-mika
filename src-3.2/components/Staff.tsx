import Image from 'next/image';
import styles from '../styles/Staff.module.scss'

export function Staff() {
  return (
    <div className="page__template">
        <h1>「笑顔の花を咲かせ、　　　　</h1>
        <h1>いつでも立ち寄れる場所と</h1>
        <h1>沢山の方と出逢いたい」</h1>
        <Image
        className={styles.staff__image}
        src="/assets/img/hasegawa__yoshiko_2.jpg"
        alt="logo"
        width={420}
        height={280}
        style={{ transform: "scaleX(-1)"}}
        />
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
        width={420}
        height={280}
        style={{width: "100%", height: "auto" }}
        />
        <Image
        src="/assets/img/hasegawa__yoshiko_2.jpg"
        alt="logo"
        width={420}
        height={280}
        style={{width: "100%", height: "auto" }}
        />
        <Image
        src="/assets/img/hasegawa__yoshiko_3.jpg"
        alt="logo"
        width={420}
        height={280}
        style={{width: "100%", height: "auto" }}
        />
    </div>
  );
};
