import "../Header/Button.css";
const SelectedButton = ({name}) => {
    return (
      <button className="SelectedButton">
        {name}
        {/* <h6 className="titleText"></h6> */}
      </button>
    );
  };


  export default SelectedButton;