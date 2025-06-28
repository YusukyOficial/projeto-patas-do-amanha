import React from 'react';
import './Style.css'; // Importa a folha de estilos que vamos criar
import { FaRegMoneyBillAlt, FaPaypal } from 'react-icons/fa'; // Ícones de dinheiro e PayPal
import { SiPix } from 'react-icons/si'; // Ícone do PIX

// Substitua pelo caminho correto da sua imagem QR Code nos assets do projeto
import qrCodeImage from './qrcode-placeholder.png'; 

const Doacao = () => {
  return (
    <div className="doacao-container">
      <div className="doacao-header">
        <h1>Faça sua doação</h1>
        <p>
          Hoje O Patas do Amnahã é a maior organização de proteção animal do Brasil. Atua há 14 anos pela defesa dos
          direitos e respeitos aos animais, entenda como você pode nos ajudar a continuar lutando por eles.
        </p>
      </div>

      <div className="donation-grid">
        <div className="donation-card">
          <FaRegMoneyBillAlt className="card-icon" />
          <h2>Doando R$ 10,00</h2>
          <p>Você ajuda a impulsionar nossas campanhas de conscientização</p>
        </div>

        <div className="donation-card">
          <FaRegMoneyBillAlt className="card-icon" />
          <h2>Doando R$ 20,00</h2>
          <p>Você ajuda a alimentar um animal em abrigos parceiros e com os custos de monitoramento de fauna</p>
        </div>

        <div className="donation-card">
          <FaRegMoneyBillAlt className="card-icon" />
          <h2>Doando R$ 50,00</h2>
          <p>Você ajuda com medicamentos mensais dos animais em abrigos parceiros e animais silvestres em reabilitação no Pantanal</p>
        </div>

        <div className="donation-card">
          <FaRegMoneyBillAlt className="card-icon" />
          <h2>Doando R$ 100,00</h2>
          <p>Você ajuda com todos os custos de uma castração segura e nos cuidados médicos veterinários das onças sob os nossos cuidados</p>
        </div>

        <div className="donation-card large">
          <FaRegMoneyBillAlt className="card-icon" />
          <h2>Doando + de R$ 100,00</h2>
          <p>Nós conseguimos expandir nossos mutirões de castração e auxilia na manutenção da nossa Base de Atendimento Patas do Amanhã</p>
        </div>
      </div>

      <div className="payment-section">
        <div className="payment-method pix">
          <div className="payment-title">
            <div className="payment-icon-wrapper pix-icon-bg">
              <SiPix />
            </div>
            <h3>Doe pelo PIX</h3>
          </div>
          <p>Acesse a área Pix dentro do app do seu banco e aponte para o QR Code abaixo:</p>
          <img src={qrCodeImage} alt="QR Code PIX" className="qr-code" />
          <span>12.111.222/0001-68</span>
        </div>

        <div className="payment-method paypal">
          <div className="payment-title">
            <div className="payment-icon-wrapper paypal-icon-bg">
              <FaPaypal />
            </div>
            <h3>Doe pelo PayPal</h3>
          </div>
          <p>Clique no botão abaixo para doar com sua conta PayPal de forma rápida e segura:</p>
          <button className="paypal-button">Doar com PayPal</button>
          <span className="small-text">(É necessário ter uma conta para realizar a doação)</span>
        </div>
      </div>
    </div>
  );
};

export default Doacao;