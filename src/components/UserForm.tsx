import * as React from 'react';
import Button from './form/Button';
import Input from 'src/components/form/Input';
import { IUserEntity } from '../model/userEntity';

interface IProps {
  member: IUserEntity;
  onChange: (fieldName: string, value: string) => void;
  onSave: () => void;
}

const UserForm: React.SFC<IProps> = (props) => {
  return (
    <form>
      <h1>Manage member</h1>

      <Input
        name="username"
        label="Usernname"
        value={props.member.username}
        onChange={props.onChange}
      />

      <Button
        label="Save"
        className="btn btn-default"
        onClick={props.onSave}
      />
    </form>
  );
};

export default UserForm;
