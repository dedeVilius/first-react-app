import IframeMap from "../../Components/ContactUsPage/IframeMap/IframeMap";
import ShopsWrapper from "../../Components/ContactUsPage/ShopsWrapper/ShopsWrapper";


function ContactUsPage() {
  return (
    <div className="content-wrapper">
      <div className="container">
        <div className="left-side">
          <ShopsWrapper />
        </div>
        <div className="right-side">
          <IframeMap />
        </div>
      </div>
    </div>
  )
}

export default ContactUsPage;