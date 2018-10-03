import * as React from 'react';
import { IUserEntity } from '../../model/userEntity';
import UserForm from '../UserForm';

interface Props {
  member: IUserEntity;
  onChange: (fieldName: string, value: string) => void;
  onSave: () => void;
}

const UserPage: React.StatelessComponent<Props> = (props) => {
  return (
    <UserForm
      member={props.member}
      onChange={props.onChange}
      onSave={props.onSave}
    />
  );
}

export default UserPage;
