import './Style.css';
import img from './img/img-apadrinhamento.jpg'

function Apadrinhamento() {
  return (
    <>
        <section>
            <div className='Conteiner'>
                    <div className='Sub-conteiner'>
                        <div>
                            <h2 className='Apadri-Titulo'>Apadrinhamento</h2>
                        </div>
                        <div className='Text'>
                            <div className='Sub-text'>
                                <h4 className='frase'>Adote um amiguinho de quatro patas no coração!</h4>
                                <p className='frase-sobre'>Na nossa ONG, nos dedicamos incansavelmente a oferecer um ambiente repleto de cuidado, carinho e conforto, garantindo que cada animal viva com o máximo bem-estar.</p>
                            </div>

                            <div className='Principal-text'>
                                <h3>Contamos com sua compreensão e paciência para preencher o questionário abaixo, que nos ajudará a encontrar o animal com o perfil ideal para ser apadrinhado por você. Ao se tornar dindo(a) de um dos nossos focinhos, com uma contribuição mensal de R$100,00, você receberá notícias do seu afilhado e poderá visitá-lo periodicamente no sítio para viver momentos especiais ao lado dele!</h3>
                            </div>
                        </div>
                    
                    </div>
                <div className='img'>
                    <img src={img} alt="img-Dog" className='imgDog' />
                </div>
            </div>
            <div className='Cadastro'>
                <h2 className='Text-cadastro'>
                    Formulário de adoção
                </h2>
                <form>
                    <input type="text" placeholder="Nome completo:" required />
                    <input type="text" placeholder="CPF:" required />
                    <input type="email" placeholder="E-mail:" required />
                    <input type="tel" placeholder="Telefone:" required />
                    <textarea className='TextArea' placeholder='Conte-nos sobre seu interesse em adotar e seu ambiente familiar'></textarea>

                </form>

                <br></br>

                <label className="pts-check">
                    <input 
                        type='checkbox' 
                        id='confirmacao' 
                        required
                        className="pts-check-input" 
                    />
                    <span className="pts-check-text">Eu confirmo que os dados acima estão corretos</span>
                </label> <br/>
            
                <button type="submit" className='buttonForm'>Enviar Cadastro</button>

            </div>

            <h4 className='Frase-questionário '>Irremos te mandar uma mensagem o mais rapido possivel !</h4>

            
        </section>
    </>
  );
}

export default Apadrinhamento;