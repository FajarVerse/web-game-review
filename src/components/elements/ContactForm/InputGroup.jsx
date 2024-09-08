import Input from "./input";
import Label from "./label";

const InputGroup = (props) => {
  const { type, id, placeHolder, children } = props;

  return (
    <>
      <div className="input-group">
        <Label id={id}>{children}</Label>
        <Input type={type} id={id} name={id} placeHolder={placeHolder} />
      </div>
    </>
  );
};

export default InputGroup;
