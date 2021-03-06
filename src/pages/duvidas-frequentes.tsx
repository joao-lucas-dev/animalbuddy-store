import React from 'react';

import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { Container, ImageArea, Overflow, TopicArea } from '../styles/pages/FAQ';

const FAQ: React.FC = () => {
  return (
    <>
      <SEO
        title="Dúvidas Frequentes"
        description="Somos um petshop online que trabalha com amor para que você e seus pets tenham a melhor experiência em segurança e bem-estar. Por isso, mantemos nossas orelhas sempre em pé para captar o lançamento de produtos e levá-los até você."
        image="/logo_seo.png"
      />

      <Header closeMenu />
      <Container>
        <ImageArea>
          <Overflow>
            <h1>Dúvidas Frequentes</h1>
          </Overflow>
        </ImageArea>

        <TopicArea>
          <h1>1. O site AnimalBuddy é confiável?</h1>

          <p>
            Nas Políticas de Privacidade esclarecemos nosso compromisso com sua
            privacidade e segurança. Nós somos especialistas no que fazemos.
          </p>

          <p>
            Adquirimos a segurança SSL (Secure Sockets Layer), e uma de suas
            funções é criptografar todas as transações realizadas no site,
            mantendo o sigilo de todas as informações coletadas.
          </p>

          <p>
            Sua compra é realizada através do MercadoPago, a maior plataforma de
            pagamentos online do Brasil. Por isso, fique tranquilo(a), pois sua
            compra está segura.
          </p>
        </TopicArea>

        <TopicArea>
          <h1>2. Como realizar o pagamento via boleto?</h1>

          <p>
            Para pagamentos via boleto, preencha seus dados pessoais na página
            do checkout e, após clicar em “finalizar compra”, você será
            redirecionado para o serviço do Mercado Pago e o boleto será gerado.
            Em seguida, imprima-o e realize o pagamento nas Lotéricas Caixa ou
            por meio do Internet Banking do seu banco copiando o código de
            barras.
          </p>

          <p>
            Salientamos que o pagamento via boleto{' '}
            <strong>NÃO É PARCELADO</strong>, ou seja, será gerado o valor total
            da compra.
          </p>
        </TopicArea>

        <TopicArea>
          <h1>3. Como parcelar minha compra? </h1>

          <p>
            Para parcelar sua compra, após ser redirecionado para o serviço do
            Mercado Pago, selecione os dados do seu cartão de crédito e quantas
            parcelas desejar.
          </p>

          <p>
            O AnimalBuddy parcela sua compra em até <strong>12 VEZES!</strong>
          </p>
        </TopicArea>

        <TopicArea>
          <h1>4. Todos os produtos acompanham o código de rastreio?</h1>

          <p>
            Sim, todos os produtos vendidos em nossa loja possuem código de
            rastreamento válidos nacionalmente. Você irá receber o código de
            rastreio pelo e-mail em até 5 dias úteis, este é o prazo que nossos
            fornecedores pedem. Se mesmo após este período você não tiver
            recebido, entre em contato conosco via WhatsApp{' '}
            <a
              href="https://wa.me/5581971112339?text=Ol%C3%A1,%20gostaria%20de%20da%20sugest%C3%A3o%20sobre%20as%20Pol%C3%ADticas%20e%20Termos."
              target="_blank"
              rel="noreferrer"
            >
              (81) 97111-2339
            </a>{' '}
            ou pelo e-mail:{' '}
            <a href="mailto:contato@animalbuddy.com.br">
              contato@animalbuddy.com.br.
            </a>
          </p>

          <p>
            O AnimalBuddy parcela sua compra em até <strong>12 VEZES!</strong>
          </p>
        </TopicArea>

        <TopicArea>
          <h1>5. Quanto tempo demora para o meu produto chegar?</h1>

          <p>
            O prazo varia de 20 a 40 dias dependendo do fornecedor e da região
            do endereço de entrega.
          </p>
        </TopicArea>

        <TopicArea>
          <h1>6. Caso meu produto demore a chegar, o que eu faço?</h1>

          <p>
            Passado o prazo estipulado, recomendamos que você entre em contato
            com os Correios para esclarecer o motivo da demora. Caso os Correios
            não esteja de posse de seu pedido entre em contato imediatamente
            conosco para verificarmos o motivo da demora diretamente com nossos
            fornecedores. Dessa forma, confirmada a existência de um problema na
            logística de seu pedido, efetuamos o reenvio ou restituição do valor
            total da sua compra após as etapas de verificação.
          </p>
        </TopicArea>
      </Container>

      <Footer />
    </>
  );
};

export default FAQ;
