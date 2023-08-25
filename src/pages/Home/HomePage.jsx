import { Container, Section } from './HomePageStyled';
import Header from 'components/Header/Header';
import HeroImg from 'components/Hero/HeroImg';
import HeroNav from 'components/Hero/HeroNav';

const HomePage = () => {
  return (
    <Section>
      <Container>
        <Header />
        <HeroNav />
      </Container>
      <HeroImg />
    </Section>
  );
};

export default HomePage;
