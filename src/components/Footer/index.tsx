import React, { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';

import {
  Footer,
  Divider,
  Container,
  Content,
  Left,
  Mid,
  Right,
  RedesSociais,
} from './styles';

const FooterApp: React.FC = () => {
  return (
    <Footer>
      <Divider />
      <Container>
        <Content>
          <Left>
            <Image src="/logo.svg" alt="Logo" width={200} height={30} />

            <span>© 2021, AnimalBuddy</span>
          </Left>
          <Mid>
            <span>MENU PRINCIPAL</span>

            <ul>
              <li>
                <Link href="/produtos" scroll>
                  <a>Produtos</a>
                </Link>
              </li>
              <li>
                <Link href="/quem-somos" scroll>
                  <a>Quem Somos</a>
                </Link>
              </li>
              <li>
                <Link href="/duvidas-frequentes" scroll>
                  <a>Dúvidas Frequentes</a>
                </Link>
              </li>
              <li>
                <Link href="/politicas-e-termos" scroll>
                  <a>Políticas e Termos</a>
                </Link>
              </li>
              <li>
                <Link href="/fale-conosco" scroll>
                  <a>Fale Conosco</a>
                </Link>
              </li>
            </ul>

            <span>SIGA-NOS</span>

            <RedesSociais>
              <a
                href="https://www.facebook.com/animalbuddyoficial"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineFacebook size={30} color="#7239f2" />
              </a>
              <a
                href="https://instagram.com/animalbuddyoficial?igshid=27m4ftv66i6a"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram size={30} color="#7239f2" />
              </a>
            </RedesSociais>
          </Mid>
          <Right>
            <span>CONTATO</span>

            <ul>
              <li>
                <a
                  href="https://wa.me/5581971112339"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp: (81) 97111-2339
                </a>
              </li>
              <li>
                <a href="mailto:contato@animalbuddy.com.br">
                  E-mail: contato@animalbuddy.com.br
                </a>
              </li>
            </ul>

            <Image src="/mercadopago.png" width={300} height={70} />
          </Right>
        </Content>
      </Container>
    </Footer>
  );
};

export default memo(FooterApp);
