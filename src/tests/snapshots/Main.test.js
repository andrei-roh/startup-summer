import React from 'react';
import { shallow } from 'enzyme';
import Main from '../../components/Main';

describe('<Main />', () => {
  const main = shallow(<Main />);
  it('should match the snapshot', () => {
    expect(main).toMatchSnapshot();
  });
});
