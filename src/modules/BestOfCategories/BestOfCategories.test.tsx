import React from 'react';
import { render, screen } from '@testing-library/react';
import BestOfCategories from './BestOfCategories';

describe('BestOfCategories', () => {
  it('should render title', () => {
    render(<BestOfCategories title="Best Of Games" />);

    const heading = screen.getAllByText(/Best Of Games/i);

    expect(heading[0]).toBeInTheDocument();
  });
});
