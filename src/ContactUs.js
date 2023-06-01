import ShopsWrapper from "./ShopsWrapper";
import IframeMap from "./IframeMap";

function ContactUs() {
  return (
    <div className="content-wrapper">
      <div className="container">
        <div className="left-side">
          <ShopsWrapper/>
        </div>
        <div className="right-side">
          <IframeMap/>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;