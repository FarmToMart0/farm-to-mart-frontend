import * as React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderAuth from '../HeaderAuth';

describe("HeaderAuth", async() => {
    it('should render same text passed into title prop', () => {
        render(
            <HeaderAuth 
              title="Test Title"
            />
        );
        const headerElement = screen.getByText(/test title/i);
        expect(headerElement).toBeInTheDocument();
    });
})