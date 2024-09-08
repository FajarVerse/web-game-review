import AuthLayouts from "../components/layout/AuthLayouts";
import NavBar from "../components/layout/NavBar";
import Contact from "../components/fragments/Contact";

const ContactPage = () => {
  return (
    <>
      <NavBar />
      <AuthLayouts classNameSection="contact">
        <Contact />
      </AuthLayouts>                                                                                                                                                                                                                                                          
    </>
  );
};

export default ContactPage;
