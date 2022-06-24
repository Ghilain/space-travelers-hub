import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStore';
import RocketPage from '../pages/RocketPage';

const rockets = [
  {
    description: 'Description example',
    id: 1,
    rocket_name: 'First mission',
    active: true,
  },
];

describe('testing the rendering of missions', () => {
  it('', () => {
    const { container } = render(
      <Provider store={store}>
        <RocketPage key={rockets[0]} rockets={rockets[0]} />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
