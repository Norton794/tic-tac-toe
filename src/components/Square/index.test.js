import { Square } from './index.js';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";


let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("render with value", () => {
    act(() => {
        render(<Square value="X" />, container);
    });
    const button = container.querySelector('button');
    expect(button.value).toBe("X");
});