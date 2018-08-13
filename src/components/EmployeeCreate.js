import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPressed() {
    const { phone, name, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPressed.bind(this)}>Create</Button>
        </CardSection>
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
export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);
