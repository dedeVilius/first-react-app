import IframeMap from "../../Components/ContactUsPage/IframeMap/IframeMap";
import ShopsWrapper from "../../Components/ContactUsPage/ShopsWrapper/ShopsWrapper";
import Container from "../../Components/Container/Container";


function ContactUsPage() {
  return (
    <div className="content-wrapper">
      <Container classes="col-2">
        <div className="left-side">
          <ShopsWrapper />
        </div>
        <div className="right-side">
          <IframeMap />
        </div>
      </Container>
    </div>
  )
}

export default ContactUsPage;