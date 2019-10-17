import React from 'react';
import { shallow } from 'enzyme';
import RandomPalette from './RandomPalette';

describe('RandomPalette', () => {
  let wrapper;
  let mockPalette;

  beforeEach(() => {
    mockPalette = [
      {
        name: "SeaBreeze",
        projectName: "Cool Colors",
        colorOne: "#013163",
        colorTwo: "#015E7E",
        colorThree: "#00AAB2",
        colorFour: "#C5BBCC",
        colorFive: "#A96B70",
        projectId: 1
      }
    ];
    wrapper = shallow(<RandomPalette colors={mockPalette} generateRandomPalette={jest.fn()} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});