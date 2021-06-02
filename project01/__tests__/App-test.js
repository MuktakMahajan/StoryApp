/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import Screen from '../App/components/screen1';
 import Adapter from 'enzyme-adapter-react-16';
 import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */
Enzyme.configure({ adapter: new Adapter() });
 // Note: test renderer must be required after react-native.
 
 
 test('Screen snapShot',()=>{
   const snap = renderer.create(
     <Screen/>
   ).toJSON();
   expect(snap).toMatchSnapshot();
 });

 test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});