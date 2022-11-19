import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MainHome from '../index';

describe("Main Home render Page", () => {
    it('renders the Main Home page', async() => {
        render(<MainHome/>);
        const searchElements = screen.getAllByText(/search/i);
        expect(searchElements.length).toBe(1);
    });  
    
    it('render input components', () => {
        render(<MainHome/>);
        const nicElement = screen.getByLabelText(/Enter Govijana Seva Officer's NIC/i);
        expect(nicElement).toBeInTheDocument();
    });
    
    it('renders a search button', () => {
        render(<MainHome/>);
        const submitButton = screen.getByRole('button', { name: /search/i });
        expect(submitButton).toBeInTheDocument();
    }); 
});