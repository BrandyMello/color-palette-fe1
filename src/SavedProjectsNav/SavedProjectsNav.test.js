import React from 'react';
import { shallow } from 'enzyme';
import SavedProjectsNav from './SavedProjectsNav';

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