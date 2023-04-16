import { HeaderContainer, Logo, Navigation, NavLink } from "./HeaderStyled";

function Header() {
    return (
      <HeaderContainer>
        <Logo src="/logo.png" alt="Dentist logo" />
        <Navigation>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#specializations">Specializations</NavLink>
          <NavLink href="#contact">Contact me</NavLink>
        </Navigation>
      </HeaderContainer>
    );
  }
  
  export default Header;


