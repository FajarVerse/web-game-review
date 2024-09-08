const Input = (props) => {
  const { type, id, placeHolder } = props;

  return (
    <>
      <input type={type} id={id} name={id} placeholder={placeHolder} required />
    </>
  );
};

export default Input;
