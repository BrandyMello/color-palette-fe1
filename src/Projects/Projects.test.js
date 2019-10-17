import React from 'react';
import { shallow } from 'enzyme';
import Projects from './Projects';

describe('Projects', () => {
  it('should match the snapshot', () => {
    const mockProjects = [{
      id: 1,
      name: 'Warm Colors'
    }, {
      id: 2,
      name: 'Cool Colors'
    }]

    const mockProps = { 
      id: 3, 
      name: "Neutral Colors", 
      created_at: "2019-10-08T23:00:51.517Z", updated_at: "2019-10-08T23:00:51.517Z", palettes: [{
        colorFive: "#472C25",
        colorFour: "#91371B",
        colorOne: "#F7E5D4",
        colorThree: "#EB712F",
        colorTwo: "#FADDAF",
        name: "Spiced",
        projectId: 1
      }, {
          colorFive: "#472C25",
          colorFour: "#91371B",
          colorOne: "#F7E5D4",
          colorThree: "#EB712F",
          colorTwo: "#FADDAF",
          name: "Spiced",
        projectId: 1
        }] }
    const wrapper = shallow(<Projects
      {...mockProps}  
      palettes={mockProjects}
      updateProjectName={jest.fn()}
      deleteSpecificProject={jest.fn()}
      deletespecificPalette={jest.fn()}
    />);

    expect(wrapper).toMatchSnapshot();
  });
})