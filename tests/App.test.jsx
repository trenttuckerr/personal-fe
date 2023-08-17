// eslint-disable-next-line no-unused-vars
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App.jsx';

describe('App Component', () => {
  it('renders without crashing', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).not.toBeNull();
    expect(tree.children[1].children[0].children[0]).toEqual(
      'trenttucker.com'
    );
  });

  it('updates count correctly', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();

    // Find the button and simulate click event
    const button = tree.children[2].children[1].children[0];
    expect(button.children[0].children[0]).toEqual('count is 0');

    // Initial count
    expect(button).toBeDefined();

    // Simulate click and check count
    button.props.onClick();
    expect(button.children[0].children[0]).toEqual('count is 1');

    // Simulate click and check count
    button.props.onClick();
    expect(button.children[0].children[0]).toEqual('count is 2');

    // Simulate click and check count
    button.props.onClick();
    expect(button.children[0].children[0]).toEqual('count is 3');
  });
});
