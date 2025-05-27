import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '../PostComments'

describe('Teste para o componente PostComments', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComments />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    
    it('Deve permitir a inserção de dois comentários', () => {
        render(<PostComments />);

        const commentInput = screen.getByTestId('comment-input');
        const submitButton = screen.getByTestId('submit-button');

        fireEvent.change(commentInput, { target: { value: 'Meu primeiro comentário!' } });
        fireEvent.click(submitButton);
        expect(screen.getByText('Meu primeiro comentário!')).toBeInTheDocument();
        
        fireEvent.change(commentInput, { target: { value: 'Meu segundo comentário!' } });
        fireEvent.click(submitButton);
        expect(screen.getByText('Meu segundo comentário!')).toBeInTheDocument();
    })
});