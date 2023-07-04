import Image from 'next/image';
import styles from '../styles/Fee.module.scss'

export function Fee() {
  return (
    <div className="page__template">
        <h1>料金</h1>
        <div className={styles.fee__table__container}>
        <h2>ヘアメニュー</h2>
        <table>
            <tbody>
            <tr>
                <td>カット</td>
                <td>4,000円~</td>
            </tr>
            <tr>
                <td>パーマ</td>
                <td>9,500円~</td>
            </tr>
            <tr>
                <td>カラー</td>
                <td>5,800円~</td>
            </tr>
            </tbody>
        </table>
        <h2>ドライヘッドスパ</h2>
        <table>
            <tbody>
            <tr>
                <td>15分</td>
                <td>30分</td>
            </tr>
            <tr>
                <td>1,000円</td>
                <td>1,800円</td>
            </tr>
            </tbody>
        </table>
        </div>
        <br />
        <p>|</p>
        <br />
        <p>価格はすべて税込みです</p>
        <br />
        <p>|</p>
        <br />
        <p>その他記載のないメニューについては</p>
        <p>お問い合わせくださいませ</p>
        <br />
        <p>|</p>
        <br />
        {/* <Image
        src="/assets/img/fee__image_1.jpg"
        alt="logo"
        width={420}
        height={280}
        style={{width: "100%", height: "auto", opacity: "0.8" }}
        /> */}
        <Image
        src="/assets/img/fee__image_2.jpg"
        alt="logo"
        width={420}
        height={280}
        style={{width: "100%", height: "auto" }}
        />
        <Image
        src="/assets/img/fee__image_3.jpg"
        alt="logo"
        width={420}
        height={280}
        style={{width: "100%", height: "auto" }}
        />
    </div>
  );
};
