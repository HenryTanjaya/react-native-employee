import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text, View } from 'react-native';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
  renderShift() {
    const Shifts = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return Shifts.map(shift => <Picker.Item value={shift} label={shift} key={shift} />);
  }
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555 888 999"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ paddingLeft: 20 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            {this.renderShift()}
          </Picker>
        </CardSection>
      </View>
    );
  }
}
const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};
function mapStateToProps(state) {
  const { name, phone, shift } = state.employeeForm;
  return {
    name,
    phone,
    shift
  };
}
export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
