import 'react-native';
import React from 'react';
import EditScreen from '../App/components/EditScreen/index';
import {mount, shallow} from 'enzyme';
import renderer from 'react-test-renderer';

let wrapper
it('renders correctly', () => {
  renderer.create(<EditScreen />);
});

test('App snapshot', () => {
  wrapper = render.create(<EditScreen />).toJSON();
  expect(wrapper).toMatchSnapshot();
});

test('EditScreen Class', () => {
  expect(EditScreen).toBeDefined();
});

it('should have 5 Views', () => {
  wrapper = shallow(<EditScreen />);
  expect(wrapper.find('View')).toHaveLength(5);
});

it('should have 1 TextInput', () => {
  wrapper = shallow(<EditScreen />);
  expect(wrapper.find('TextInput')).toHaveLength(1);
});

it('should have 1 Button', () => {
  wrapper = shallow(<EditScreen />);
  expect(wrapper.find('Button')).toHaveLength(1);
});
