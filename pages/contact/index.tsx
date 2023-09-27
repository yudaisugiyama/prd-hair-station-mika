import { Header } from "../../components/Header";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";
import home from '../../styles/Home.module.scss'
import main from '../../styles/Main.module.scss'
import { Photographer } from "../../components/Photographer";

export default function ContactPage() {
    return (
        <div className={home.container}>
          <Header pathname={"/contact"}/>
          <main className={main.main}>
            <Contact/>
            <Photographer/>
          </main>
          <Footer />
        </div>
    );
};