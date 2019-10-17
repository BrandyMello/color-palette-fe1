import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Projects from './Projects/Projects';
import App from './App';

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
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