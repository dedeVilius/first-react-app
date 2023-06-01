import Banner from "../../Components/ProgramsPage/Banner/Banner";
import ContentWrapper from "../../Components/ProgramsPage/ContentWrapper/ContentWrapper";

function ProgramsPage(props) {
  return (
    <div className="container">
      <h1>{props.title}</h1>
      <Banner />
      <ContentWrapper />
    </div>
  )
}

export default ProgramsPage;