import React from "react";
import { shallow } from "enzyme";
import SaveProjects from "./SaveProjects";

describe("SaveProjects", () => {
  let wrapper;
  let mockProjects;

  beforeEach(() => {
    mockProjects = [{ name: "Autumn", id: 1 }, { name: "Seabreeze", id: 2 }];

    wrapper = shallow(
      <SaveProjects projects={mockProjects} saveNewProject={jest.fn()} />
    );
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should update state when handleChange is called", () => {
    const mockEvent = {
      target: { name: "projectName", value: { name: "Fall", id: 3 } }
    };
    const expected = { name: "Fall", id: 3 };

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state("projectName")).toEqual(expected);
  });

  it("should reset state when clearInput is called", () => {
    const expected = { projectName: "" };

    wrapper.instance().setState({ projectName: "Fall" });

    wrapper.instance().clearInput();

    expect(wrapper.state()).toEqual(expected);
  });

  it("should run handleChange when the inputs detect a change", () => {
    const mockEvent = {
      target: { name: "projectName", value: { name: "Fall", id: 3 } }
    };

    wrapper.instance().handleChange = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.update();
    wrapper.find('[name="projectName"]').simulate("change", mockEvent);

    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent);
  });
});
