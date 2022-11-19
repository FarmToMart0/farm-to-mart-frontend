import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Success from '../index';

describe("Success page rendering", () => {
    it('renders the GSO registration Success page', async() => {
        render(<Success/>);
        const searcgElements = screen.getAllByText(/Succesfull!/i);
        expect(searcgElements.length).toBe(1);
    });  
    
    it('renders a go to home button', async() => {
        render(<Success/>);
        const goButton = screen.getByRole('button', { name: /go to home/i });
        expect(goButton).toBeInTheDocument();
    }); 
});