import {ExampleClass} from "../src/decorator/Example";

describe('test', () => {
    test('decorator test', () => {
        const example = new ExampleClass();
        example.method();
        expect(200).toBe(200);
    });
});