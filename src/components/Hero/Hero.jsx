import vote from '../../images/hero-icons/vote-table.svg';
import cat from '../../images/hero-icons/pet-breeds.svg';
import gallery from '../../images/hero-icons/images-search.svg';
import {
  HeroTitle,
  ContainerStyled,
  Section,
  Description,
  Text,
  NavList,
  VotingCardImg,
  BreedsCardImg,
  GalleryCardImg,
  Category
} from './HeroStyled';

const Hero = () => {
  return (
    <Section>
      <ContainerStyled>
        <HeroTitle>Hi&#128075;</HeroTitle>
        <Description>Welcome to MacPaw Bootcamp 2023</Description>
        <Text>Lets start using The Cat API</Text>

        <NavList>
          <li>
            <VotingCardImg>
              <img src={vote} alt="vote" />
            </VotingCardImg>
            <Category>VOTING</Category>
          </li>
          <li>
            <BreedsCardImg>
              <img src={cat} alt="cat breeds" />
            </BreedsCardImg>
            <Category>BREEDS</Category>
          </li>
          <li>
            <GalleryCardImg>
              <img src={gallery} alt="gallery" />
            </GalleryCardImg>
            <Category>GALLERY</Category>
          </li>
        </NavList>
      </ContainerStyled>
    </Section>
  );
};

export default Hero;
