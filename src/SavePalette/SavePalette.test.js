import React from "react";
import { shallow } from "enzyme";
import SavePalette from "./SavePalette";

describe("SavePalette", () => {
  let wrapper;
  let mockPalette;
  let mockProjects;

  beforeEach(() => {
    mockProjects = [{ name: "SeaBreeze", id: 1 }];

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

    wrapper = shallow(
      <SavePalette
        projects={mockProjects}
        colors={mockPalette}
        saveNewPaletteToProject={jest.fn()}
      />
    );
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should update state when handleChange is called", () => {
    const mockEvent = {
      target: {
        name: "paletteName",
        value: {
          name: "SeaBreeze",
          projectName: "Cool Colors",
          colorOne: "#013163",
          colorTwo: "#015E7E",
          colorThree: "#00AAB2",
          colorFour: "#C5BBCC",
          colorFive: "#A96B70",
          projectId: 1
        }
      }
    };
    const expected = {
      name: "SeaBreeze",
      projectName: "Cool Colors",
      colorOne: "#013163",
      colorTwo: "#015E7E",
      colorThree: "#00AAB2",
      colorFour: "#C5BBCC",
      colorFive: "#A96B70",
      projectId: 1
    };

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state("paletteName")).toEqual(expected);
  });
});
