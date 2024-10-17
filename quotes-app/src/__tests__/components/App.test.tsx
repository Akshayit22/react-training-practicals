import { render } from "@testing-library/react";
import App from "../../App";

test('Renders main page correctly', () => {

    // render(<App/>)
    // const header = screen.getByText('/Random Quote Generator/')
    // expect(header).toBeInTheDocument();

    // expect(true).toBeTruthy();
});

describe('Renders Appp', ()=>{
    it('renders app ', ()=>{
        render(<App />)
    })
})