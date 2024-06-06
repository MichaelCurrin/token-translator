import headerImage from '../header-image.jpg';
import './Header.css';

function Header() {
  return (
    <header id="header">
      <h1>Token Translator</h1>

      <p>
        <i>
          Convert the token input limits of LLMs like ChatGPT into real-world
          measures like number of pages
        </i>
      </p>
      <img src={headerImage} alt="Robot holding books" width="202"></img>

      <div>
        <a
          href="https://github.com/MichaelCurrin/token-translator"
          title="Go to GitHub repo"
        >
          <img
            src="https://img.shields.io/static/v1?label=MichaelCurrin&message=token-translator&color=blue&logo=github"
            alt="MichaelCurrin - token-translator"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
