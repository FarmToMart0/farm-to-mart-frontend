import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../index';

describe("Login render Page", async() => {
    it('renders the Login page', () => {
      render(<Login/>);
      const loginElements = screen.getAllByText(/sign in/i);
      expect(loginElements.length).toBe(2);
    });
  
    it('render 2 input components', () => {
      render(<Login/>);
      const nicElement = screen.getByLabelText(/national identity card number/i);
      const passwordElement = screen.getByLabelText(/password/i);
      expect(nicElement).toBeInTheDocument();
      expect(passwordElement).toBeInTheDocument();
    });
  
    it('renders a submit button', () => {
      render(<Login/>);
      const submitButton = screen.getByRole('button', { name: /sign in/i });
      expect(submitButton).toBeInTheDocument();
    });
  });