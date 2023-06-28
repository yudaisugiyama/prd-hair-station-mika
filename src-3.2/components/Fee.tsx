import Image from 'next/image';
import styles from '../styles/Fee.module.scss'

export function Fee() {
  return (
    <div className="page__template">
        <h1>料金</h1>
        <div className={styles.fee__table__container}>
        <table>
            <tbody>
            <tr>
                <td>商品A</td>
                <td>1000円</td>
            </tr>
            <tr>
                <td>商品B</td>
                <td>2000円</td>
            </tr>
            <tr>
                <td>商品C</td>
                <td>1500円</td>
            </tr>
            </tbody>
        </table>
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
