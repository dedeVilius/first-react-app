import Container from "../../Components/Container/Container";
import Banner from "../../Components/ProgramsPage/Banner/Banner";
import ContentWrapper from "../../Components/ProgramsPage/ContentWrapper/ContentWrapper";

function ProgramsPage(props) {
  return (
    <Container>
      <h1>{props.title}</h1>
      <Banner />
      <ContentWrapper />
    </Container>
  )
}

export default ProgramsPage;