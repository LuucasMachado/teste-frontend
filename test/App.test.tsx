import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
    test('should first', () => { 
        render(<App />)

        const NavbBar = screen.getByText('teste');
        expect(NavbBar).toBeInTheDocument();
     })
});