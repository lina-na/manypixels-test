import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MockedProvider } from '@apollo/react-testing';
import { BrowserRouter } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';
import Main from './index';

let container = null;

const mock = [];

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Main', () => {
  configure({ adapter: new Adapter() });

  it('renders without error', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <MockedProvider mock={mock}>
            <Main />
          </MockedProvider>
        </BrowserRouter>,
        container,
      );
    });
  });

  it('should render correctly', () => {
    const output = shallow(
      <MockedProvider mock={mock}><Main /></MockedProvider>,
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
