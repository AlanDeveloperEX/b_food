import React from 'react';
import { FooterElement, FooterContainer, FooterGrid, FooterColumns, ContainerSocial, FooterLinks, BorderIcon } from './Footer.elements';
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterElement>
      <FooterContainer>
        <FooterGrid>

          <FooterColumns>
            <h3>BFood</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>

            <ContainerSocial>
              <FooterLinks to={{pathname: 'https://www.instagram.com/'}} target="_blank">

                <BorderIcon>
                  <FaInstagram />
                </BorderIcon>

              </FooterLinks>

              <FooterLinks to={{pathname: 'https://www.facebook.com/'}} target="_blank">

                <BorderIcon>
                  <FaFacebookF />
                </BorderIcon>

              </FooterLinks>

              <FooterLinks to={{pathname: 'https://www.twitter.com/'}} target="_blank">

                <BorderIcon>
                  <FaTwitter />
                </BorderIcon>

              </FooterLinks>

              <FooterLinks to={{pathname: 'https://www.whatsapp.com/'}} target="_blank">

                <BorderIcon>
                  <FaWhatsapp />
                </BorderIcon>

              </FooterLinks>

            </ContainerSocial>

          </FooterColumns>

          <FooterColumns>
            <h3>About</h3>

            <FooterLinks to='/'>History</FooterLinks>
            <FooterLinks to='/'>Our Team</FooterLinks>
            <FooterLinks to='/'>Branding Guidelines</FooterLinks>
            <FooterLinks to='/'>Terms & Conditions</FooterLinks>
            <FooterLinks to='/'>Our Team</FooterLinks>

          </FooterColumns>

          <FooterColumns>
            <h3>Services</h3>

            <FooterLinks to='/'>How to Order</FooterLinks>
            <FooterLinks to='/'>Our Product</FooterLinks>
            <FooterLinks to='/'>Order Status</FooterLinks>
            <FooterLinks to='/'>Promo</FooterLinks>
            <FooterLinks to='/'>Payment Methods</FooterLinks>

          </FooterColumns>

          <FooterColumns>
            <h3>Other</h3>

            <FooterLinks to='/'>Contact US</FooterLinks>
            <FooterLinks to='/'>Help</FooterLinks>
            <FooterLinks to='/'>Privacy</FooterLinks>

          </FooterColumns>

        </FooterGrid>
      </FooterContainer>
    </FooterElement>
  )
}

export default Footer;
