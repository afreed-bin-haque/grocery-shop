import React from "react";

function Footer(){
  return(
    <footer id="footer" className="footer">
    <div className="copyright">
        &copy; Copyright <strong><span>{ process.env.NEXT_PUBLIC_APP_Name }</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
        Designed by <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Contact me : ">Afreed Bin Haque</a>
    </div>
   </footer>
  );
}

export default Footer;