function FormField(props) {
  const shouldShowField = (props) => {
    if (props.conditionalLogic !== null && props.conditionalValue !== null) {
      return props.conditionalLogic(props.conditionalValue);
    } else {
      return true;
    }
  };

  return shouldShowField(props) ? (
    <div>
      <label>{props.humanName}</label>
      <input
        type={props.type}
        onChange={(e) => {
          props.onChange(props.name, e.target.value);
        }}
        name={props.name}
      ></input>
    </div>
  ) : null;
}

export default FormField;
