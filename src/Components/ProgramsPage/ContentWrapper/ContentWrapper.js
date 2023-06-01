import AsideFormWrapper from "../AsideFormWrapper/AsideFormWrapper";
import CourseListWrapper from "../CourseListWrapper/CourseListWrapper";

function ContentWrapper() {
  return (
    <div className="body-content-wrapper">
      <AsideFormWrapper title='Rastos 6 programos' />
      <CourseListWrapper />
    </div>
  )
}

export default ContentWrapper;