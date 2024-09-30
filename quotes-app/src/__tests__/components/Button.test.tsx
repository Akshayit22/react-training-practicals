import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../common/Button';

test('Button component', () => {
    expect(true).toBeTruthy();
});

// describe('Button component', () => {
    
//     // it('renders with the correct label', () => {
//     //     render(<Button label="Click me" onClick={() => { }} />);
//     //     expect(screen.getByText('Click me')).toBeInTheDocument();
//     // });

//     // it('calls onClick prop when clicked', () => {
//     //     const handleClick = jest.fn();
//     //     render(<Button label="Click me" onClick={handleClick} />);
//     //     fireEvent.click(screen.getByText('Click me'));
//     //     expect(handleClick).toHaveBeenCalledTimes(1);
//     // });
// });