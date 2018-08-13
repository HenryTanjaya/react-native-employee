import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { text } from 'react-native-communications';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }
  onAccept() {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
  }
  onButtonPressed() {
    const { phone, name, shift } = this.props;
    // this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    this.props.employeeSave({ phone, name, shift, uid: this.props.employee.uid });
  }
  onTextPressed() {
    const { phone, name, shift } = this.props;
    text(phone, `Hi ${name}, your coming shift is on ${shift}`);
  }
  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPressed.bind(this)}>Save Changes</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPressed.bind(this)}>Text Schedule</Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Fire Employee
          </Button>
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={() => this.setState({ showModal: !this.state.showModal })}
        >
          Are you sure you want to fire?
        </Confirm>
      </Card>
    );
  }
}
function mapStateToProps(state) {
  const { name, phone, shift } = state.employeeForm;
  return {
    name,
    phone,
    shift
  };
}
export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(
  EmployeeEdit
);
