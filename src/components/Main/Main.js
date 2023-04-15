import { MainContainer, Section, SectionTitle } from "./MainStyled"

function Main() {
    return (
      <MainContainer>
        <Section id="home">
          <SectionTitle>Welcome to My Dental Practice</SectionTitle>
          <p>Here at My Dental Practice, we are committed to providing the highest quality dental care to our patients. Whether you need a routine check-up or more extensive dental work, our experienced team is here to help.</p>
        </Section>
        <Section id="specializations">
          <SectionTitle>Our Specializations</SectionTitle>
          <p>At My Dental Practice, we offer a wide range of dental services, including:</p>
          <ul>
            <li>General dentistry</li>
            <li>Cosmetic dentistry</li>
            <li>Orthodontics</li>
            <li>Oral surgery</li>
          </ul>
        </Section>
        <Section id="contact">
          <SectionTitle>Contact Us</SectionTitle>
          <p>If you have any questions or would like to schedule an appointment, please fill out the form below and we will get back to you as soon as possible.</p>
          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div>
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" name="subject" />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message"></textarea>
            </div>
          </form>
        </Section>
      </MainContainer>
    )
}

export default Main
  
  
  