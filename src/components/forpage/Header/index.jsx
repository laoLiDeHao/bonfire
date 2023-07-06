import { useState } from "react";
import st from "./styles.module.scss";
import svgs from "../../../assets/svgs";
export default function Header() {
  return (
    <div className={st.header}>
      <div className={st.inner}>
        <div className={st.left}>
          <div className={st.logo}>Bonfire</div>
          <div className={st.navs}>
            <Navs />
          </div>
        </div>
        <div className={st.right}>
          <div className={st.search}>
            <Searchbar />
          </div>
          <div className={st.toolbar}><Toolbar/></div>
        </div>
      </div>
    </div>
  );
}

function Navs() {
  const [active, setActive] = useState(0);

  const list = [
    { label: "HOME", index: 0 },
    { label: "SHOW", index: 1 },
    { label: "CREATE", index: 2 },
    { label: "NEW", index: 3 },
  ];

  return (
    <div className={st.nav}>
      <ul>
        {list.map(({ label, index }) => (
          <li
            key={index}
            onClick={() => setActive(index)}
            className={[active === index ? st.li_active : ""].join(" ")}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Searchbar() {
  return (
    <div className={st.searchbar}>
      <div className={st.inner}>
        <input type="text" />
        <img src={svgs.search} alt="" />
      </div>
    </div>
  );
}

function Toolbar() {
  return <div className={st.toolbar}>
      <div className={st.icons}>
        <img src={svgs.gift} alt="" />
      </div>
      <div className={st.icons}>
        <img src={svgs.bell} alt="" />
      </div>
      <div className={st.icons}>
        <img src={svgs.user} alt="" />
      </div>
  </div>; 
}
