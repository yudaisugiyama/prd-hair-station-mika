import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import home from '../styles/Home.module.scss'
import main from '../styles/Main.module.scss'

export default function Home() {
    const section1 = {
        title: "セラピスト✕美容師",
        img: "/assets/img/hasegawa__yoshiko_1.jpg",
        pathname: "/staff",
        description1: "美容の面だけでなく、アロマの面からも",
        description2: "美しさをご提供いたします。",
        buttonText: "スタッフ紹介",
        animateClass: "animate__slideInLeft",
      };
      const section2 = {
        title: "世代を超えた笑顔の輪を広げたい",
        img: "/assets/img/section2__image.jpg",
        pathname: "/contact",
        description1: "私達は幅広い年齢層の方々に向けて",
        description2: "スタイリングのご提案をおこなっています。",
        buttonText: "ご予約・お問い合わせ",
        animateClass: "animate__slideInLeft",
      };
    const section3 = {
        title: "日々の美容面もサポート",
        img: "/assets/img/section3__image.jpg",
        pathname: "/product",
        description1: "LOUVREDO様のコンセプトに賛同し",
        description2: "取扱店舗としてご契約させていただいてます。",
        buttonText: "商品",
        animateClass: "animate__slideInLeft",
      };
    const section4 = {
        title: "新潟駅から徒歩9分",
        img: "/assets/img/section4__image.jpg",
        pathname: "/access",
        description1: "弁天ICから車で5分",
        description2: "無料駐車場を1台分ご用意しております。",
        buttonText: "アクセス",
        animateClass: "animate__slideInLeft",
      };

    return (
        <div className={home.container}>
          <Header pathname={"/"}/>
          <main className={main.main}>
              <Main {...section1} />
              <Main {...section2} />
              <Main {...section3} />
              <Main {...section4} />
          </main>
          <Footer />
        </div>
    );
};