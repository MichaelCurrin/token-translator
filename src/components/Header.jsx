import React from "react";
import "./Header.css";
function Header() {
  return (
    <header id="header">
      <h1>Token Translator</h1>

      <a
        href="https://github.com/MichaelCurrin/token-translator"
        title="Go to GitHub repo"
      >
        <img
          src="https://img.shields.io/static/v1?label=MichaelCurrin&message=token-translator&color=blue&logo=github"
          alt="MichaelCurrin - token-translator"
        />
      </a>
    </header>
  );
}

export default Header;
