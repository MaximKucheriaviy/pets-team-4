import { useTranslation } from 'react-i18next';
import { Btn, Box } from './lang.styled';
const Lang = () => {

  const { t, i18n } = useTranslation();


  const changeLanguage = (language) => {
      i18n.changeLanguage(language);
      window.localStorage.setItem("LNG", language)
  };
    
    
  return (
    <Box>
      <Btn onClick={() => changeLanguage("en")}>🏴󠁧󠁢󠁥󠁮󠁧󠁿</Btn>
      <Btn onClick={() => changeLanguage("ua")}>🇺🇦</Btn>
    

    </Box>
  )
}

export default Lang