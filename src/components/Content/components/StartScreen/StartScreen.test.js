import React from 'react';
import { shallow } from 'enzyme';
import StartScreen from './StartScreen';

describe('<StartScreen />', () => {
  const startScreen = shallow(<StartScreen />);
  it('should match the snapshot', () => {
    expect(startScreen.html()).toMatchSnapshot();
  });

  it('should have an svg image', () => {
    expect(startScreen.find('svg').length).toEqual(1);
  });
});
