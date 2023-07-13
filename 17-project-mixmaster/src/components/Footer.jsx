import Wrapper from '../assets/wrappers/Footer';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <p>Developed by &copy;Alaa Seada {currentYear} </p>
    </Wrapper>
  );
};

export default Footer;
