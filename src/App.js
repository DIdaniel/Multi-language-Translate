import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="App">
      <nav
        style={{ widows: "100%", padding: "2rem 0", backgroundColor: "grey" }}
      >
        <button onClick={() => handleClick("en")}>English</button>
        <button onClick={() => handleClick("ko")}>Korean</button>
        <button onClick={() => handleClick("chi")}>Chinese</button>
      </nav>
      <section>
        <p>{t("Thanks.1")}</p>
        <p>{t("Why.1")}</p>
      </section>
    </div>
  );
}

export default App;
