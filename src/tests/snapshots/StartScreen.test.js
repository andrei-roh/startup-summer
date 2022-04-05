import React from 'react';
import { shallow } from 'enzyme';
import StartScreen from '../../components/Content/components/StartScreen/StartScreen';

describe('<StartScreen />', () => {
  const startScreen = shallow(<StartScreen />);
  it('should match the snapshot', () => {
    expect(startScreen.html()).toMatchSnapshot();
  });
});
