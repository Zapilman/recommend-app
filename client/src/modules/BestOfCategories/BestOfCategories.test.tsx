import { screen } from '@testing-library/react';
import BestOfCategories from './BestOfCategories';
import { renderWithProviders } from '../../utils/test-utils';

describe('BestOfCategories', () => {
  it('should render title', () => {
    renderWithProviders(<BestOfCategories title="Best Of Games" />);

    const heading = screen.getAllByText(/Best Of Games/i);

    expect(heading[0]).toBeInTheDocument();
  });

  it('should render max 10 elements', () => {
    renderWithProviders(<BestOfCategories title="Best Of Games" />, {
      preloadedState: {
        counter: { value: 0 },
      },
    });

    const heading = screen.getAllByText(/MOBA/i);
    screen.debug();
    console.log(heading[0].parentElement);

    expect(heading[0].style.height).toEqual(
      heading[0].parentElement.style.height,
    );
  });
});
