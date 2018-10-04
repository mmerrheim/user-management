import * as React from "react";

interface IProps {
  name: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input: React.SFC<IProps> = (props: IProps) => {
  return (
    <div className={formatWrapperClass(props)}>
      <label htmlFor={props.name}>{props.label}</label>
      <div className="field">
        <input type="text"
          name={props.name}
          className="form-control"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
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

export default Input;
