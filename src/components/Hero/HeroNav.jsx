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
  Category,
} from './HeroStyled';

const HeroNav = () => {
  return (
    <Section>
      <ContainerStyled>
        <HeroTitle>Hi&#128075;</HeroTitle>
        <Text>Lets start using The Cat API</Text>

        <NavList>
          <li>
            <a href="">
              <VotingCardImg>
                <img src={vote} alt="vote" />
              </VotingCardImg>
              <Category>VOTING</Category>
            </a>
          </li>
          <li>
            <a href="">
              <BreedsCardImg>
                <img src={cat} alt="cat breeds" />
              </BreedsCardImg>
              <Category>BREEDS</Category>
            </a>
          </li>
          <li>
            <a href="">
              <GalleryCardImg>
                <img src={gallery} alt="gallery" />
              </GalleryCardImg>
              <Category>GALLERY</Category>
            </a>
          </li>
        </NavList>
      </ContainerStyled>
    </Section>
  );
};

export default HeroNav;
