import CssBaseline from "@mui/material/CssBaseline"
import UserStartingLayout from "./layouts/UserStartingLayout/UserStartingLayout"
import "./common.css"
import i18next from "i18next"
import { I18nextProvider } from "react-i18next"
import { default as ResourceEn } from "~/utils/resource/Resource.en";
import { default as ResourceVn } from "~/utils/resource/Resource.vn";



<meta name="viewport" content="initial-scale=1, width=device-width" />

i18next.init({
  lng: 'en', // Ngôn ngữ mặc định
  fallbackLng: 'en', // Ngôn ngữ dự phòng nếu không tìm thấy ngôn ngữ được yêu cầu
  resources: {
    en: { translation: ResourceEn },
    vi: { translation: ResourceVn },
  },

})



function App() {
  return (
    <I18nextProvider i18n = {i18next}>
    <CssBaseline/>
    <UserStartingLayout/>
    </I18nextProvider>
  )
}

export default App
