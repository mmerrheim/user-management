import * as React from 'react';
import Button from '../../../common/Button';
import Input from '../../../common/Input';

import './UserForm.scss';

interface IProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
}

const UserForm: React.SFC<IProps> = (props) => {
  return (
    <div className="UserForm">
      <h1>Create Collaborator</h1>
      <hr/>
      <form>
        <Input
          name="username"
          label="Username"
          value={props.value}
          onChange={props.onChange}
        />
        <Button
          label="Save"
          className="btn btn-default"
          onClick={props.onSave}
        />
      </form>
    </div>  );
};

export default UserForm;
