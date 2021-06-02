import 'react-native';
import React from 'react';
import Screen2 from '../../../App/components/screen2/index';
import {mount, shallow} from 'enzyme';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    renderer.create(<Screen2 />);
});

let wrapper
test('snapshot', () => {
    wrapper = render.create(<Screen2 />).toJSON();
    expect(wrapper).toMatchSnapshot();
});

test('Screen2 Class exists', () => {
    expect(Screen2).toBeDefined();
});

it('Texts', () => {
    wrapper = shallow(<Screen2 />);
    expect(wrapper.find('Text')).toHaveLength(2);
});

it('Views', () => {
    wrapper = shallow(<Screen2 />);
    expect(wrapper.find('View')).toHaveLength(11);
});

