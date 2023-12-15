import "./style.css";

export function Sobre() {
  return (
    <div className="sobre">
      <h1>Hello World!</h1>
        
        <div className="descricao">
            lorem ipsum dolor sit amet, consectetur adip <br></br>
            lorem 
        </div>

        <div className="exp">
            <h1>Minhas Experiencias</h1>
            <div className="hagens">
                <h1>Estágiario Full Stack </h1>
                <h3>Hagens - 09/2022 - 12/2023</h3>
                <li></li>
            </div>
            
            <div className="ntic">
                <h1>Estágiario Full Stack</h1>
                <h3>PUC NTIC</h3>
                <li></li>
            </div>

            <div className="resumo">
              <h1>Minha trajetoria</h1>
              <h2>lorem sdfi9wnguweuwjtnu94we4wjmw erghierwyhrweruwyjnr</h2>
            </div>

            <div className="links">
            <h1>Meus links</h1>
              <h2>
              <a href="http://linkedin.com/in/andrezambroni" target="_blank">Linkedin</a></h2>
              <h2>GitHub</h2>
              <h2>Outros</h2>
            </div>

        </div>

    </div>
  );
}
