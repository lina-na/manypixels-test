import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { MockedProvider } from '@apollo/react-testing';
import { act } from 'react-dom/test-utils';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';
import App from './App';

const mock = [];

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

describe('App', () => {
  configure({ adapter: new Adapter() });

  it('renders without error', async () => {
    await act(async () => {
      render(<MockedProvider mock={mock}><App /></MockedProvider>, container);
    });
  });

  it('should render correctly', () => {
    const output = shallow(
      <App />,
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
