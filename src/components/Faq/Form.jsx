import React, { useState, useContext } from "react";
import styles from './faq.module.scss'
 
import {ArticleContext} from './index'

function  Form() {

  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [articles, setArticles] = useContext(ArticleContext)

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (title && about) {
      setArticles(prev => [...prev, { title, about }]);
   
    }
  };

    return (
      <div>
        <form onSubmit={handleSubmitForm}>
          <fieldset>
            <legend>Форма</legend>
            <label className={styles.label}>
              <input
                onChange={e => setTitle(e.target.value)}
                value={title}
                type="text"
                name="title"
                placeholder="Добавьте заголовок"
              />
            </label>
            <label className={styles.label}>
              <input
                onChange={e => setAbout(e.target.value)}
                value={about}
                type="text"
                name="about"
                placeholder="Добавьте текст"
              />
            </label>
            <button type="submit">Добавить</button>
          </fieldset>
        </form>
      </div>
    );
}

export default Form;
