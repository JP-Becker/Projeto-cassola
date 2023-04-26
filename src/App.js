import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/ContactForm/ContactForm";
import { WhatsApp } from "./components/WhatsApp/WhatsApp";

function App() {
  return (
    <>
      {/* <GlobalStyle /> */}
      <Header />
      <Main />
      <WhatsApp />
      <Footer />
    </>
  );
}

export default App;
