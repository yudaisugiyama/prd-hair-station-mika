import Image from 'next/image';
import { useWindowWidth } from "./Main";
import styles from '../styles/Fee.module.scss'

export function Fee() {
    const { windowWidth, spWidth, tbWidth, pcWidth } = useWindowWidth();
    const width: number = windowWidth > pcWidth ? Math.floor(windowWidth * 0.6 * 0.6) : Math.floor(windowWidth * 0.6);
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
            <p>価格はすべて税別価格です</p>
            <br />
            <p>|</p>
            <br />
            <p>その他記載のないメニューについては</p>
            <p>お問い合わせくださいませ</p>
            <br />
            <p>|</p>
            <br />
            <Image
            src="/assets/img/fee__image_2.jpg"
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
            src="/assets/img/fee__image_3.jpg"
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
