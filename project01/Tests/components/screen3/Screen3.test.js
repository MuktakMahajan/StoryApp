import 'react-native';
import React from 'react';
import Screen3 from '../../../App/components/screen3/index';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    renderer.create(<Screen3 />);
});

let wrapper
test('App snapshot', () => {
    wrapper = render.create(<Screen3 />).toJSON();
    expect(wrapper).toMatchSnapshot();
});

test('Screen3 Class exists', () => {
    expect(Screen3).toBeDefined();
});

it('Text', () => {
    wrapper = shallow(<Screen3 />);
    expect(wrapper.find('Text')).toHaveLength(1);
});

it('Views', () => {
    wrapper = shallow(<Screen3 />);
    expect(wrapper.find('View')).toHaveLength(3);
});

it('Image', () => {
    wrapper = shallow(<Screen3 />);
    expect(wrapper.find('Image')).toHaveLength(1);
});