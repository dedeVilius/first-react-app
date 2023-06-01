import AsideForm from "../AsideForm/AsideForm";

function AsideFormWrapper(props) {
  return (
    <aside>
      <div className="aside-bar">
        <h2>{props.title}</h2>
        <AsideForm />
      </div>
    </aside>
  )
}

export default AsideFormWrapper;