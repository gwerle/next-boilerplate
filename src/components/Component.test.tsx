import React from 'react';

import Home from '@src/pages';
import { render, screen } from '@testing-library/react';

describe('HelloWorld', () => {
  it('renders a HelloWorld', () => {
    render(<Home />);

    expect(screen.getByText(/boilerplate/)).toBeInTheDocument();
  });
});
