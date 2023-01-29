import React from "react";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

function Header() {
  return (
    <header>
      <h1>
        <TipsAndUpdatesIcon style={{marginRight: "0.5rem"}} />
        Catatan
      </h1>
    </header>
  );
}

export default Header;
