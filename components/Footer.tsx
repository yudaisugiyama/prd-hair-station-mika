import Image from 'next/image';
import styles from '../styles/Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
        <div>
            <h3>住所</h3>
            <p>〒950-0917</p>
            <p>新潟県新潟市中央区天神2丁目2-1カナンパレス天神</p>
        </div>
        <div>
            <h3>営業時間</h3>
            <p>AM9:30~PM6:00</p>
        </div>
            <div>
            <h3>定休日</h3>
            <p>月曜日、第一火曜日</p>
            <p>臨時休業の場合もございます。</p>
            <p>お気軽にお問い合わせくださいませ。</p>
        </div>
        <div>
            <h3>TEL</h3>
            <a href="tel:080-5178-7207">080-5178-7207</a>
        </div>
        <div>
            <h3>SNS</h3>
            <a href="https://www.instagram.com/hairstationmika/">
                <Image
                    src="/assets/img/instagram.png"
                    alt="Instagram"
                    width={30}
                    height={30}
                    style={{ margin: "auto 15px auto auto "}}/>
            </a>
            <a href="https://www.youtube.com/@user-mr1gm4hk1i">
                <Image
                    src="/assets/img/youtube.svg.png"
                    alt="Youtube"
                    width={30}
                    height={20}
                    style={{ margin: "5px auto 5px auto "}}/>
            </a>
        </div>
        <div>
        <p>&copy; 株式会社Mikaコーポレーション</p>
        </div>
    </footer>
  );
};
