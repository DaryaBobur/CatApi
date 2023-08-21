import logo from '../../images/logo.svg'
import { HeaderStyled, LogoLink } from './HeaderStyled';
const Header = () => {
  return (
    <HeaderStyled>
      <LogoLink href="/public/index.html">
        <img src={logo} alt="logo" width={104} height={24} />
      </LogoLink>
    </HeaderStyled>
  );
};

export default Header;
