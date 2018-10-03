import * as React from 'react';
import Paper from '../paper/Paper';
import UserForm from '../form/UserForm';

export default class UserPage extends React.Component {

  public state = {
    value: '',
  }

  public onChange = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({value: e.target.value});

  // public onSave() {
  // }

  public render() {
    return (
      <Paper>
        <UserForm
          value={this.state.value}
          onChange={this.onChange}
          // tslint:disable-next-line:jsx-no-lambda
          onSave={() => null}
        />
        <p>{this.state.value}</p>
      </Paper>
    );
  }
}
