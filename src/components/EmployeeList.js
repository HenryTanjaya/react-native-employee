import React, { Component } from 'react';
import { FlatList } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeeFetch();
    // this.createDataSource(this.props);
  }
  // componentWillReceiveProps(nextProps) {
  // nextProps are next set of props that component will be render
  //this.props old set of props
  //   this.createDataSource(nextProps);
  // }
  // createDataSource({ employees }) {
  //   const ds = new ListView.DataSource({
  //     rowHasChanged: (r1, r2) => r1 !== r2
  //   });
  //   this.dataSource = ds.cloneWithRows(employees);
  // }
  renderItem({ item }) {
    return <ListItem employee={item} />;
  }
  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderItem}
        keyExtractor={employees => `${employees.uid}`}
      />
    );
  }
}

function mapStateToProps(state) {
  const employees = _.map(state.employees, (val, uid) => ({ ...val, uid }));
  //{shift:'Monday', name:'A',id:'123'}
  return {
    employees
  };
}

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
