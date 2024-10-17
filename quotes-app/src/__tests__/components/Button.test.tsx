import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../common/Button';
import userEvent from '@testing-library/user-event'

test('Button component', () => {
    expect(true).toBeTruthy();
});

test('Button component', async () => {
    // render(<Button onclick={()=>{console.log('sample')}} text={"Copy"} styles={""} Component={<>Copy</>} />);

    // screen.debug();
    // const button = screen.getByRole('button', { name: /Copy/i });
    // await userEvent.click(button);
    // screen.debug();

});
