import React from 'react';
import { shallow } from 'enzyme';
import ProjectsDropDown from './ProjectsDropDown';

describe('ProjectsDropDown', () => {
  it('should match snapshot', () => {
    const mockProjects = [{
      id: 1,
      name: 'Warm Colors'
    }, {
      id: 2,
      name: 'Cool Colors'
    }];

    const wrapper = shallow(<ProjectsDropDown
      projects={mockProjects}
      handleDropDown={jest.fn()}
    />);

    expect(wrapper).toMatchSnapshot();
  });
})
