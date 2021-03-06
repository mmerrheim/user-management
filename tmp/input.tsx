import * as React from "react";

interface IProps {
  label: string;
  name: string;
  value: string;
  onChange: (fieldName: string, value: string) => void;
  error?: string;
}

 const Input: React.SFC<IProps> = (props) => {
  return (
    <div className={formatWrapperClass(props)}>
      <label htmlFor={props.name}>{props.label}</label>
      <div className="field">
        <input type="text"
          name={props.name}
          className="form-control"
          value={props.value}
          onChange={onChangeInput(props)}
        />
      </div>
      <div className="help-block">{props.error}</div>
    </div>
  )
};

const formatWrapperClass = (props: IProps) => {
  const wrapperClass = 'form-group';

  return props.error ?
    `${wrapperClass} has-error` :
    wrapperClass;
};

const onChangeInput = (props: IProps) => (e: React.ChangeEvent<HTMLInputElement>) => {
  props.onChange(e.target.name, e.target.value);
};

export default Input;