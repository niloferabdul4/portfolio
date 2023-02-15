import React from "react";
import "./footer.css";
import Social from "../Header/Social";


function Footer() {
  return (
    <footer>
      <p className="footer_title">Nilofer Abdul</p>

      <div className="footerSocial">
        {Social &&
          Social.map((social) => (
            <div className='footersocial_links' >
            <a href={social.iconLink} key={social.id}>
              {social.iconName}
            </a>
            </div>
          ))}
      </div>

      <p className="copy_right">&#169; 2023 copyright all right reserved</p>
    </footer>
  );
}

export default Footer;