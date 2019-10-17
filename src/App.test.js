import React from 'react';
import { shallow, mount } from 'enzyme';
import Projects from './Projects/Projects';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the projects array in state when when a new project is saved is called', () => {
    const mockProjects = [{
      id: 1,
      name: 'Warm Colors'
    }];
    const expectedProjects = [{
      id: 1,
      name: 'Warm Colors'
    }];

    const wrapper = shallow(<App />)
    
    wrapper.setState({ projects: mockProjects });
    expect(wrapper.state('projects')).toEqual(expectedProjects);
  });

  it('should update palettes in state when a new palette is added is called', () => {
    const mockPalettes = [
      {
        colorFive: "#472C25",
        colorFour: "#91371B",
        colorOne: "#F7E5D4",
        colorThree: "#EB712F",
        colorTwo: "#FADDAF",
        name: "Spiced",
        projectId: 1
      }
    ]
    const mockNewPalettes = [
      {
        colorFive: "#472C25",
        colorFour: "#91371B",
        colorOne: "#F7E5D4",
        colorThree: "#EB712F",
        colorTwo: "#FADDAF",
        name: "Spiced",
        projectId: 1
      }
    ]

    const wrapper = shallow(<App />)
    wrapper.setState({ palettes: mockPalettes });
    expect(wrapper.state('palettes')).toEqual(mockNewPalettes);
  });

  it('should delete a specific palette when deleteSpecificPalette is called', () => {
    const originalPalettes = [
      {
        colorFive: "#472C25",
        colorFour: "#91371B",
        colorOne: "#F7E5D4",
        colorThree: "#EB712F",
        colorTwo: "#FADDAF",
        name: "Spiced",
        projectId: 1
      }
    ]

    const wrapper = shallow(<App />)
    wrapper.setState({palettes: originalPalettes});
    wrapper.instance().deleteSpecificPalette(1);
    wrapper.setState({ palettes: [] })
    expect(wrapper.state('palettes')).toEqual([])
  });

  it('should delete a specific project when deleteSpecificProject is called', () => {
    const mockProject = [{
      id: 1,
      name: 'Warm Colors'
    }];

    const wrapper = shallow(<App />)
    wrapper.setState({ projects: mockProject });
    wrapper.instance().deleteSpecificProject(1);
    wrapper.setState({projects: []})
    expect(wrapper.state('projects')).toEqual([])
  });
});

describe('Routes', () => {
  it('should route to People', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/projects/:id']}>
        <App />
      </MemoryRouter>
    )

    expect(wrapper.find(Projects)).toHaveLength(1)
  });
});