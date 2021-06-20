import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import { useHistory } from "react-router-dom";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "Seonghee",
      company: "samsung",
      theme: "dark",
      title: "Software Engineer",
      email: "se5nghee@naver.com",
      message: "go for it",
      fileName: "hee",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "Seonghee2",
      company: "samsung",
      theme: "light",
      title: "Software Engineer",
      email: "se5nghee@naver.com",
      message: "go for it",
      fileName: "hee",
      fileURL: null,
    },
    3: {
      id: "3",
      name: "Seonghee3",
      company: "samsung",
      theme: "colorful",
      title: "Software Engineer",
      email: "se5nghee@naver.com",
      message: "go for it",
      fileName: "hee",
      fileURL: null,
    },
  });

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card; // 해당 key가 있을 경우 value가 변경되고,
      // 없으면 새로 생성됨.
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};
export default Maker;
