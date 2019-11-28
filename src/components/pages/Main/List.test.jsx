import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter, Link, MemoryRouter } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';
import List from './List';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('List', () => {
  configure({ adapter: new Adapter() });

  it('renders without error', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <List />
        </BrowserRouter>,
        container,
      );
    });
  });

  it('should render correctly', () => {
    const output = shallow(
      <List />,
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('accepts an object `to` prop', () => {
    const to = {
      pathname: '/',
    };

    render(
      <MemoryRouter>
        <Link to={to}>link</Link>
      </MemoryRouter>,
      container,
    );

    const a = container.querySelector('a');

    expect(a.getAttribute('href')).toEqual('/');
  });
});
