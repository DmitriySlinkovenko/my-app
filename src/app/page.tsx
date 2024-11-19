import Header from "./components/Header";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default function Home() {
  return (
    <main>
      <Header />
      <Main />
      <Services />
      <AboutUs />
      <Footer />
    </main>
  );
}
