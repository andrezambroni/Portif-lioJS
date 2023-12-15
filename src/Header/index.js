import "./style.css";
import LogoAZ from "../svg/logoAZ";

export function Header() {
  <header>
    <div className="header_left">
      <LogoAZ />
      <div className="nome">André Zambroni</div>
    </div>

    <div className="header_right">
      <button href="#" className="">Sobre</button>
      <button>Experiencia</button>
      <button>Habilidade</button>
      <button>Projetos</button>
      <button>Sobre</button>
      <button>Curriculo</button>
      <button>Contato</button>
      
    </div>
  </header>;
}
