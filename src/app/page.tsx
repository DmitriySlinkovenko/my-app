import Header from "./components/Header";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Main />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
