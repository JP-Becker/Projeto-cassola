import { HeaderContainer, Logo, NavLink } from "./HeaderStyled";

function Header() {
    return (
      <HeaderContainer>
        <Logo src="/logo.png" alt="Dentist logo" />
        <div>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#specializations">Specializations</NavLink>
          <NavLink href="#contact">Contact me</NavLink>
        </div>
      </HeaderContainer>
    );
  }
  
  export default Header;


