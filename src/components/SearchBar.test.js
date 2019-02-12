import React from 'react';
import { shallow, mount, render } from 'enzyme';
import SearchBar from './SearchBar';
// https://devhints.io/enzyme


describe('<SearchBar>', () => {
  it('should render correctly', () => {
    const component = shallow(<SearchBar />);
    expect(component).toMatchSnapshot();
  });

  it('should update state when typing into input', () => {
    const component = mount(<SearchBar />);

    component.find('input')
      .simulate('change', { target: { value: 'climate' } });
    
    expect(component.state().query).toEqual('climate');
    expect(component).toMatchSnapshot();
    component.unmount();
  });

});