import * as React from 'react';
import { IUserEntity } from '../../model/userEntity';
import UserPage from '../page/UserPage';
import { History } from 'history';

interface State {
  user: IUserEntity;
}

interface Props {
  history: History;
}

export class PageContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      user: {
        id: -1,
        username: '',
      }
    };

    this.onFieldValueChange = this.onFieldValueChange.bind(this);
  }

  private onFieldValueChange(fieldName: string, value: string) {
    const nextState = {
      ...this.state,
      member: {
        ...this.state.user,
        [fieldName]: value,
      }
    };

    this.setState(nextState);
  }

  private onSave = () => {
    // memberAPI.saveMember(this.state.member)
    //   .then(() => {
    //     toastr.success('Member saved.');
    //     this.props.history.goBack();
    //   });
    console.log("ok");
  }

  render() {
    return (
      <UserPage
        member={this.state.user}
        onChange={this.onFieldValueChange}
        onSave={this.onSave}
      />
    );
  }
}
