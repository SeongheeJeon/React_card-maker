import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import { useHistory } from "react-router-dom";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);
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

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};
export default Maker;
