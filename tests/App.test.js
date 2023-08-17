import React from 'react';
import { expect } from 'chai';
import renderer from 'react-test-renderer';
import App from '../src/App.js';

describe('App Component', () => {
  it('renders without crashing', () => {
    const components = renderer.create(<App />)
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).to.not.be.null;
    expect(tree.children[1].children[0].children[0]).to.equal('trenttucker.com');
  });

  it('updates count correctly', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();

    // Find the button and simulate click event
    const button = tree.children[2].children[1].children[0];
    expect(button.children[0].children[0]).to.equal('count is 0');
    
    // Initial count
    expect(button).to.not.be.undefined;

    // Simulate click and check count
    button.props.onClick();
    expect(button.children[0].children[0]).to.equal('count is 1');

    // Simulate click and check count
    button.props.onClick();
    expect(button.children[0].children[0]).to.equal('count is 2');

    // Simulate click and check count
    button.props.onClick();
    expect(button.children[0].children[0]).to.equal('count is 3');
  });
});
