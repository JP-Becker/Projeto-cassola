import { MainContainer, Section, SectionTitle, MainText } from "./MainStyled"
import { HomePage } from "../../pages/HomePage/HomePage"
function Main() {
    return (
      <MainContainer>
        <Section id="home">
          <HomePage />
        </Section>
        <Section id="specializations">
          <SectionTitle>Our Specializations</SectionTitle>
          <MainText>At My Dental Practice, we offer a wide range of dental services, including:</MainText>
          <ul>
            <li>General dentistry</li>
            <li>Cosmetic dentistry</li>
            <li>Orthodontics</li>
            <li>Oral surgery</li>
          </ul>
        </Section>
        <Section id="contact">
          <SectionTitle>Contact Us</SectionTitle>
          <MainText>If you have any questions or would like to schedule an appointment, please fill out the form below and we will get back to you as soon as possible.</MainText>
        </Section>
      </MainContainer>
    )
}

export default Main
  
  
  