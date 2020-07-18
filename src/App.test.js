import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('example test', () => {
    const { getByText } = render( < App / > );
    const linkElement = getByText(/Test/i);
    expect(linkElement).toBeInTheDocument();
});