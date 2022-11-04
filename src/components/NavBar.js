import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
const linksToJSX = links.map((link) => {
const linktag = `#${link}`
return <a href ={linktag} key={link}>{link}</a>
})
  return <nav>
{linksToJSX}
  </nav>;
}

export default NavBar;
