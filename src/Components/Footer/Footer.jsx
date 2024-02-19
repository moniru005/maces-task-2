import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import logoImage from '/public/favicon2.png';


const Footer = () => {
  return (
    <>
      <footer className="footer footer-center p-10 bg-slate-900 text-primary-content">
        <aside>
        <img className="w-16" src={logoImage} alt="" />

          <p className="font-medium text-lg">
            Maces ACCUWEATHER.           </p>
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://github.com/moniru005" target="blank">
              <FaGithub className="text-3xl"/>
            </a>
            <a href="https://www.linkedin.com/in/moniru005" target="blank">
              <FaLinkedin className="text-3xl"/>
            </a>
            <a href="https://www.facebook.com/mits005" target="blank">
              <FaFacebook className="text-3xl"/>
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
