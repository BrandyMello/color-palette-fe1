import React from 'react';
import { shallow } from 'enzyme';
import SavedProjectsNav from './SavedProjectsNav';
import Projects from '../Projects/Projects';
import { NavLink } from 'react-router-dom';

describe('SavedProjectsNav', () => {
  it('should match snapshot', () => {
    const mockProjects = [{
      id: 1,
      name: 'Warm Colors'
    }, {
      id: 2,
      name: 'Cool Colors'
    }];

    const wrapper = shallow(<SavedProjectsNav
      projects={mockProjects}
    />);

    expect(wrapper).toMatchSnapshot();
  });
})
