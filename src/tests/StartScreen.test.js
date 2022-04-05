import React from 'react';
import { shallow } from 'enzyme';
import StartScreen from '../components/Content/components/StartScreen/StartScreen';

describe('<StartScreen />', () => {
  const startScreen = shallow(<StartScreen />);

  it('should have an svg image', () => {
    expect(startScreen.find('svg').length).toEqual(1);
  });
});
