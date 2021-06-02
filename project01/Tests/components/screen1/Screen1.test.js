import React, {Component } from 'react'
import { mount, shallow } from 'enzyme'
import { TouchableOpacity } from 'react-native'
import Screen1 from '../../../App/components/screen1'
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'
Enzyme.configure({ adapter: new Adapter() })


describe('Screen1', () => {
    let wrapper
    test('snapshot for screen1', ()=> {
        wrapper = renderer.create(<Screen1/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
    
    test('unit test', ()=>{
        wrapper = mount(<Screen1 />)
        
        wrapper
        .findWhere((node) => node.props().testID === 'click')
        .filter(TouchableOpacity)
        .at(0)
        .prop('onPress')()
        expect(props.navigation.navigate).toHaveBeenCalledTimes(1)
    });

    it('should have 8 Views', () => {
        wrapper = shallow(<Screen1 />);
        expect(wrapper.find('View')).toHaveLength(8);
    });
});
