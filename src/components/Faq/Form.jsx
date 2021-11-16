import React, { useState, useContext } from "react";
import styles from './faq.module.scss'
 
import {ArticleContext} from './index'
import useForm from './useForm'

function validator(values)
{ let errors = {};
   
  if(!values.title) { errors.title = "Title is required" }
  if(!values.about) { errors.about = "About is required" }

return errors;
}


function  Form() {
  const [articles, setArticles] = useContext(ArticleContext)

  function submitForm() { return setArticles(prev => [...prev,  values ]) }

//  const {handleChange, handleSubmit, values, errors} = useForm( () => setArticles(prev => [...prev,  values ]), validator)
  const {handleChange, handleSubmit, values, errors} = useForm( submitForm, validator)

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Форма</legend>
            <label className={styles.label}>
              <input
                onChange={handleChange}
                value={values.title}
                type="text"
                name="title"
                placeholder="Добавьте заголовок"
              />
              {errors.title && <p style={{color : 'red'}}>{errors.title}</p>}
            </label>
            <label className={styles.label}>
              <input
                onChange={handleChange}
                value={values.about}
                type="text"
                name="about"
                placeholder="Добавьте текст"
              />
              {errors.about && <p style={{color : 'red'}}>{errors.about}</p>}
            </label>
            <button type="submit">Добавить</button>
          </fieldset>
        </form>
      </div>
    );
}

export default Form;
