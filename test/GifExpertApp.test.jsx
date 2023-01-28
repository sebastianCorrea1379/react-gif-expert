import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Pruebas en GifExpertApp.jsx', () => {
   
    test('Debe desplegar el card de Saitama', () => {
        
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: 'Saitama' } });
        fireEvent.submit(form);

        expect(screen.getByText('Saitama')).toBeTruthy();

    });


});