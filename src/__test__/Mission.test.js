import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStore';
import Missions from '../pages/Mission';

const mission = [
  {
    description: 'Description example',
    id: 1,
    name: 'First mission',
    reserved: true,
  },
];

describe('testing the rendering of missions', () => {
  it('', () => {
    const { container } = render(
      <Provider store={store}>
        <Missions key={mission[0]} mission={mission[0]} />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
