import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter, Link, MemoryRouter } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Header from './index';

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

describe('Header', () => {
  configure({ adapter: new Adapter() });

  it('renders without error', async () => {
    await act(async () => {
      render(<BrowserRouter><Header /></BrowserRouter>, container);
    });
  });

  it('should render correctly', () => {
    const output = shallow(
      <Header />,
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
