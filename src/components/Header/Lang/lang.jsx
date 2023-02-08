import { useTranslation } from 'react-i18next';

const Lang = () => {

  const { t, i18n } = useTranslation();


  const changeLanguage = (language) => {
      i18n.changeLanguage(language);
      window.localStorage.setItem("LNG", language)
  };
    
    
  return (
    <>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("ua")}>UA</button>
      <div>{t("text")}</div>

    </>
  )
}

export default Lang