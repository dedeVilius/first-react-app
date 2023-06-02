function CourseItem(props) {

  const { logo, sticker, title, description, category, date } = props

  const isStickerEnabled = sticker ? <div className="sticker"><span>{props.sticker}</span></div> : '';
  const isCategoryEnabled = category ? <span className="category"><i className="fa-solid fa-graduation-cap"></i> {category}</span> : '';
  const isDateEnabled = date ? <span className="date"><i className="fa-solid fa-sun"></i> {date}</span> : '';

  return (
    <div className="course-box">
      {isStickerEnabled}
      <div className="image">
        <img src={logo} alt="logo" />
      </div>
      <div className="more-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="type">
        {isCategoryEnabled}
        {isDateEnabled}
      </div>
    </div>
  )
}

export default CourseItem;