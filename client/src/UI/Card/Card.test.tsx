import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from './Card';

describe('App tests', () => {
  it('should display title', () => {
    render(<Card title="Card Title" />);

    const heading = screen.getByText(/Card Title/i);

    expect(heading).toBeInTheDocument();
  });

  it('should should display alt text', () => {
    const icon = 'https://static-cdn.jtvnw.net/ttv-boxart/29595-188x250.jpg';
    render(<Card title="Card Title" icon={icon} />);

    const testImage = document.querySelector('img');

    expect(testImage.alt).toContain('category icon');
    expect(testImage.src).toEqual(icon);
  });
});
