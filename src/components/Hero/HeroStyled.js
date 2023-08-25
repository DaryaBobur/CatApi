import styled from 'styled-components';
import girlAndPet from '../../images/hero-icons/girl-and-pet.svg';

export const HeroTitle = styled.h1`
  font-size: 44px;
  font-weight: 500;
  line-height: 1.32;

  margin-bottom: 10px;
`;
export const ContainerStyled = styled.div`
  padding-left: 147px;
`;

export const Section = styled.section`
  padding-top: 50px;
`;

export const Description = styled.p`
  color: #8c8c8c;
  font-size: 20px;
  margin-bottom: 60px;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;

  a {
    text-decoration: none;
  }
`;

export const VotingCardImg = styled.div`
  padding: 37px 19px;

  border-radius: 20px;

  border: 4px solid rgba(255, 255, 255, 0.6);
  background: #b4b7ff;
`;

export const BreedsCardImg = styled.div`
  padding: 17px 11px 18px 10px;

  border-radius: 20px;
  border: 4px solid rgba(255, 255, 255, 0.6);
  background: #97eab9;
`;

export const GalleryCardImg = styled.div`
  padding: 4px 13px;

  border-radius: 20px;
  border: 4px solid rgba(255, 255, 255, 0.6);
  background: #ffd280;
`;

export const Category = styled.h2`
  color: #ff868e;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 2px;

  margin-top: 10px;
  padding: 10px 0px;
  border-radius: 10px;
  background-color: #fff;
`;

export const ContainerImg = styled.div`
background-image: url(${girlAndPet});
background-repeat: no-repeat;
background-size: contain;
width: 775px;
height: 900px;
position: absolute;
right: 0;
`

export const ContainerBackground = styled.div`
width: 680px;
height: 840px;
background-color: #FBE0DC;
position: absolute;
right: 30px;
top: 30px;
border-radius: 20px;
`