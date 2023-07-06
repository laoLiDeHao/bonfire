import Flowlinegrid from "../../components/canvasfullscene/flowlinegrid";
import Header from "../../components/forpage/Header";
import Mainarea from "../../components/forpage/Main";
import styles from "./styles.module.scss";
import { Col, Row } from "antd";
export default function Home() {
  return (
    <div>
      <aside>aside</aside>
      <header>
        <Header />
      </header>
      <main>
        <div className={styles.inner}><Mainarea/></div>
        <div className={styles.back}><Flowlinegrid></Flowlinegrid></div>
      </main>
      <footer>footer</footer>
    </div>
  );
}


