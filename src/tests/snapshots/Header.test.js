import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header/Header';

describe('<Header />', () => {
  const header = shallow(<Header />);

  it('should match the snapshot', () => {
    expect(header).toMatchSnapshot();
  });
});
