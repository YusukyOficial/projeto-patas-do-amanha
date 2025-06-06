import './Style.css';

function Socios() {
  return (
    <>
      <div class="pts-container">
            <div class="pts-titulo-seja">
                <h1>
                    Seja Socio
                </h1>
            </div>     
        </div>
        <div class="pts-texto">
            <h2>
                Todos os dias, cães e gatos são resgatados das ruas em busca de uma segunda chance. Com sua ajuda,
                conseguimos oferecer abrigo, cuidados veterinários, alimentação e muito amor.
                Ao se tornar um sócio, você faz parte dessa corrente do bem e transforma realidades. Com uma contribuição
                mensal, você garante dignidade e esperança para quem não pode pedir por ajuda.
                Seja a voz de quem não tem voz.
            </h2>
        </div>
         <section class="pts-socio">
            <div class="pts-socio">
                <h1>Junte-se ao Time</h1>
                <h2>É só preencher o formulário que nossos voluntários entrarão em contato com você.</h2>
                <h2>Como agradecimento você recebe notícias, fotos e vídeos mensais sobre a ONG.</h2>
            </div>
        </section>
        <div class="pts-form">
            <form class="pts-cadastro">
                    <label class="pts-label" for="nome">Nome:</label>
                    <input class="pts-input" type="text" id="nome" name="nome" required placeholder="Maria"/>
                    <label class="pts-label" for="nome">Sobre nome:</label>
                    <input class="pts-input" type="text" id="nome" name="nome" required placeholder="Garcia Monteiro"/>
                    <label class="pts-label" for="numero">WhatsApp:</label>
                    <input class="pts-input" type="text" id="numero" name="numero" required placeholder="(xx)xxxxx-xxxx"/>
                    <label class="pts-label" for="email">E-mail:</label>
                    <input class="pts-input" type="text" id="email" name="email" required placeholder="Maria@exemplo.com"/>
                    <label class="pts-label" for="email">Confirmação E-mail:</label>
                    <input class="pts-input" type="text" id="email" name="email" required placeholder="Maria@exemplo.com"/>
                    
                    <div class="pts-divPts">
                        <button type="submit" class="pts-btn">Enviar</button>
                    </div>
            </form>
        </div>
    </>
  );
}

export default Socios;