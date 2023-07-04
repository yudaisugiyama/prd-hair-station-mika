import Image from 'next/image';
import { useWindowWidth } from "./Main";
import styles from '../styles/Access.module.scss'

export function Access() {
  const { windowWidth, spWidth, tbWidth, pcWidth } = useWindowWidth();
  const width: number = windowWidth > pcWidth ? Math.floor(windowWidth * 0.6 * 0.6) : Math.floor(windowWidth * 0.6);

  return (
    <div className="page__template">
        <h1>MAP</h1>
        <div className={styles.google__map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.916123394265!2d139.0540771771388!3d37.9090231719518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff4c9dc81dbe133%3A0x9e32dbcac3c1b5a3!2zSGFpciBTdGF0aW9uIE1pa2HvvIjjg5jjgqLjg7zjgrnjg4bjg7zjgrfjg6fjg7Pjg5_jgqvvvIk!5e0!3m2!1sja!2sjp!4v1687860496546!5m2!1sja!2sjp"
            width="90%"
            height="280"
            loading="lazy">
          </iframe>
        </div>

        <p>|</p>
        <br />
        <p>新潟駅から徒歩9分</p>
        <p>弁天ICから車で5分</p>
        <br />
        <p>|</p>
        <br />
        <p>無料駐車場を1台分ですが、ご用意しております。</p>
        <p>ご気軽にご使用くださいませ。</p>
        <br />
        <p>|</p>
        <br />
        <Image
        src="/assets/img/access__image_1.jpg"
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
        src="/assets/img/access__image_2.jpg"
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
        src="/assets/img/access__image_3.jpg"
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
