// index.jsx
import { useState } from 'react'; // Importa o hook useState do React para gerenciar o estado
import './Stylevak.css'; // Importa o arquivo CSS para estilizar o componente

function Vakinha() {
    // Define o estado 'progresso' com um valor inicial de 20%.
    // 'setProgresso' é a função usada para atualizar este estado.
    const [progresso, setProgresso] = useState(20); //

    // Define a meta de arrecadação. É uma constante, então não precisa de useState.
    const valorMeta = 60000;

    // Função 'doar' é chamada quando o botão é clicado.
    const doar = () => {
        // Calcula o novo progresso, garantindo que não ultrapasse 100%.
        const novoProgresso = Math.min(progresso + 10, 100); //
        setProgresso(novoProgresso); // Atualiza o estado do progresso.
        alert('Obrigado pela sua doação!'); // Exibe um alerta de agradecimento.
    };

    // Calcula o valor arrecadado atual com base no progresso.
    // toLocaleString formata o número para o padrão brasileiro de moeda.
    const valorArrecadadoAtual = (progresso / 100 * valorMeta).toLocaleString('pt-BR', { minimumFractionDigits: 2 });

    // Calcula o número de doadores com base no progresso.
    // Esta é uma simulação simples, pode ser ajustada.
    const numeroDoadores = Math.floor(progresso / 10) * 20 + 20;

    return (
        <> {/* Fragmento React para agrupar elementos sem adicionar um nó extra ao DOM */}
            {/* Seção com apelo emocional */}
            <section className="pts-emotional-appeal">
                <div className="pts-emotional-container">
                    <h2>AJUDE OS ANIMAIS QUE MAIS PRECISAM!</h2>
                    <div className="pts-stories">
                        <p>Guardem esses nomes, porque eles carregam histórias de dor: <strong>Arthur</strong> é um cavalo que
                            apanhava no rosto, sem entender o motivo de tanta crueldade. <strong>Juan</strong> é um cãozinho que
                            chorava enquanto cuspia sangue, jogado na rua, invisível para o mundo. <strong>Filó</strong>, uma
                            mini poodle, teve seu corpo explorado por humanos, mas nunca perdeu a vontade de viver.
                            Hoje, eles
                            estão salvos, graças ao Patas do Amanhã.</p>
                        
                        <p>Queremos salvar mais, e para isso precisamos manter nossa estrutura em funcionamento e abrir espaço
                            para salvar mais vidas. Temos que construir mais 10 baias. E fazer manutenção de muitos espaços,
                            comprar ventiladores e reformar áreas que estão desgastadas pelo tempo e uso. E PARA ISSO LANÇAMOS
                            UMA VAKINHA.</p>
                        <div className="pts-stats">
                            <div className="pts-stat-item">
                                <span className="pts-stat-number">600</span>
                                <span className="pts-stat-label">resgatados vivendo conosco</span>
                            </div>
                            <div className="pts-stat-item">
                                <span className="pts-stat-number">12.000+</span>
                                <span className="pts-stat-label">vidas salvas</span>
                            </div>
                            <div className="pts-stat-item">
                                <span className="pts-stat-number">30</span>
                                <span className="pts-stat-label">profissionais dedicados</span>
                            </div>
                        </div>

                            <p>Nossa ONG é um lugar onde vivem 600 resgatados, mais de 12 mil já foram salvos. Contamos com uma
                                enfermaria, um centro cirúrgico, uma equipe médica formada por 4 veterinários e 6 assistentes de
                                veterinária, além de outros 20 funcionários que se dedicam 24 horas, de coração, para cuidar de cada
                                vida que resgatamos.</p>
    
                            <p>Mas sabe como tudo isso é possível? Com as doações de pessoas como você: 1, 5, 10 reais. E todas as
                                campanhas que fazemos para arrecadar. Cada tratamento, cada vida salva só acontece porque vocês
                                acreditam que esses animais merecem viver com dignidade.</p>
    
                            <p>Acontece que de um tempo para cá, com o crescimento da causa animal, muitas pessoas começaram a
                                pensar que, porque fazemos uma boa gestão e oferecemos o melhor para eles, não precisamos de ajuda.
                                E aí fica a pergunta: Como manter um lugar assim sem o apoio de quem entende o valor de uma vida?
                                Como continuar salvando Arthurs, Juans e Filós sem que vocês entendam que é a sua contribuição que
                                faz essa roda girar?</p>
                        <p className="pts-call-to-action">
                            Não larguem nossas mãos, nem aquelas patinhas que caminharam tanto por estradas de sofrimento. Vamos juntos nesse projeto!
                        </p>
                    </div>
                </div>
            </section>

            {/* Área da Vakinha */}
            <section className="pts-vakinha-section">
                <div className="pts-vakinha-container">
                    <h1>Ajude Nossa Causa</h1>

                    <div className="pts-progress-container">
                        <div
                            className="pts-progress-bar"
                            // A largura da barra é definida diretamente pelo estado 'progresso'.
                            // A variável CSS '--progress' não é estritamente necessária aqui se 'width' já define o valor.
                            style={{ width: `${progresso}%` }}
                        >
                            <span>{progresso}%</span> {/* Exibe a porcentagem atual da barra */}
                        </div>
                    </div>

                    <div className="pts-vakinha-info">
                        <p>Arrecadado: <strong className="pts-arrecado">R$ {valorArrecadadoAtual}</strong> de <strong className="pts-meta">R$ {valorMeta.toLocaleString('pt-BR')}</strong></p>
                        <p>Doadores: {numeroDoadores}</p>
                        <p>Tempo restante: 8 Meses</p>
                    </div>

                    <button
                        className="pts-donate-button"
                        onClick={doar} // Associa a função 'doar' ao clique do botão
                    >
                        Doar Agora
                    </button>
                </div>
            </section>
        </>
    );
}

export default Vakinha; // Exporta o componente Vakinha para ser usado em App.jsx