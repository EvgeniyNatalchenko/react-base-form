import React, { useState } from "react";
import styles from './faq.module.scss'
 
function  Form({addArticle}) {

  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');


  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (title && about) {
    addArticle({ title, about });
   
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
