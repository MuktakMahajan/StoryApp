import 'react-native';
import React from 'react';
import Screen4 from '../../../App/components/screen4/index';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Screen4 />);
});

let wrapper
test('App snapshot', () => {
    wrapper = render.create(<Screen4 />).toJSON();
    expect(wrapper).toMatchSnapshot();
});

test('Screen4 Class exists', () => {
    expect(Screen4).toBeDefined();
});

it('Views', () => {
    wrapper = shallow(<Screen4 />);
    expect(wrapper.find('View')).toHaveLength(11);
});

it('Texts', () => {
    wrapper = shallow(<Screen4 />);
    expect(wrapper.find('Text')).toHaveLength(2);
});