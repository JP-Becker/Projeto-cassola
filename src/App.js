import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/ContactForm/ContactForm";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";

function App() {
  return (
    <>
      {/* <GlobalStyle /> */}
      <Header />
      <Main />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
