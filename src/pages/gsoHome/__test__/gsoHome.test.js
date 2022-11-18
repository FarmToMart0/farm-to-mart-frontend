import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GSOHome from '../index';

describe("Gso Home render Page", () => {
    it('renders the GSO Home page', async() => {
        render(<GSOHome/>);
        const loginElements = screen.getAllByText(/search/i);
        expect(loginElements.length).toBe(1);
    });  
    
    it('render 2 input components', () => {
        render(<GSOHome/>);
        const nicElement = screen.getByLabelText(/enter Farmer's NIC/i);
        expect(nicElement).toBeInTheDocument();
    });
    
    it('renders a submit button', () => {
        render(<GSOHome/>);
        const submitButton = screen.getByRole('button', { name: /search/i });
        expect(submitButton).toBeInTheDocument();
    }); 
});