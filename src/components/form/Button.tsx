import * as React from 'react';

interface IProps {
  label: string;
  className: string;
  onClick: () => void;
}

const Button: React.StatelessComponent<IProps> = (props) => {

  return (
    <button type="button"
      className={props.className}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;