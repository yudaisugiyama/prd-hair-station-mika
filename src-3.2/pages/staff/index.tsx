import { Header } from "../../components/Header";
import { Staff } from "../../components/Staff";
import { Footer } from "../../components/Footer";
import home from '../../styles/Home.module.scss'
import main from '../../styles/Main.module.scss'

export default function StaffPage() {
    return (
        <div className={home.container}>
          <Header pathname={"/staff"}/>
          <main className={main.main}>
            <Staff />
          </main>
          <Footer />
        </div>
    );
};