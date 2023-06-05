import './container.css';

function Container({ children, classes }) {
  const addedClasses = classes ? classes : '';
  return (
    <div className={`container ${addedClasses}`}>
      {children}
    </div>
  )
}

export default Container;