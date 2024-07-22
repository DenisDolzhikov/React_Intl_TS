import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import { messages } from './i18n/messages';
import { useAppSelector } from './store';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';

import { LOCALES } from './i18n/locales';
import { IntlProvider } from 'react-intl';

function App() {
  const locale = useAppSelector(state => state.languageState.currentLanguage);

  return (
    <IntlProvider 
      messages={messages[locale]} 
      locale={locale} 
      defaultLocale={LOCALES.ENGLISH}
    >
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutUsPage />} />
          <Route path='contact' element={<ContactUsPage />} />
        </Route>
      </Routes>
    </IntlProvider>
  )
}

export default App
