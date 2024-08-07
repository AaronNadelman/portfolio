import Footer from "../../components/footer/footer";
import NavBar from "../../components/navBar/navBar";
import SectionHome from "../../components/section/section";


const Home = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 ...">
      <NavBar />
      <SectionHome />
      <Footer />
    </div>
  );
}

export default Home;