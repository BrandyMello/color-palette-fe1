import React from "react";
import { shallow } from "enzyme";
import Nav from "./Nav";

describe("Nav", () => {
  it("renders the title of the app in <h1> tags", () => {
    const wrapper = shallow(<Nav title="Bananas" />);
    const title = <h1>Color Palette</h1>;

    expect(wrapper.contains(title)).toEqual(true);
  });
  it("renders the image of the logo for the app in an <img> tag", () => {
    const wrapper = shallow(
      <Nav
        img="https://user-images.githubusercontent.com/46384968/66802881-2ce58a80-eedb-11e9-97f2-e60bf5a8e28b.png"
        className="logo"
      />
    );
    const img = (
      <img
        src="https://user-images.githubusercontent.com/46384968/66802881-2ce58a80-eedb-11e9-97f2-e60bf5a8e28b.png"
        className="logo" alt="Frida"
      ></img>
    );

    expect(wrapper.contains(img)).toEqual(true);
  });
  it("should match the snapshot", () => {
    const wrapper = shallow(
      <Nav
        title="Color Palette"
        img="https://user-images.githubusercontent.com/46384968/66802881-2ce58a80-eedb-11e9-97f2-e60bf5a8e28b.png"
        className="logo"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
