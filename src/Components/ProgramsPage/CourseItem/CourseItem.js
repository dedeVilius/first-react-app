function CourseItem(props) {

  const { logo, sticker, title, description, typeCategory, typeDate } = props

  return (
    <div className="course-box">

      {sticker ?
        <div className="sticker">
          <span>{props.sticker}</span>
        </div> : ''}

      <div className="image">
        <img src={logo} alt="logo" />
      </div>
      <div className="more-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="type">

        {typeCategory ? <span className="category"><i className="fa-solid fa-graduation-cap"></i> {typeCategory}</span> : ''}
        {typeDate ? <span className="date"><i className="fa-solid fa-sun"></i> {typeDate}</span> : ''}
      </div>
    </div>
  )
}

export default CourseItem;