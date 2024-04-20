import {Example} from "../src/decorator/Example";

describe('test', () => {
    test('decorator test', () => {
        const example = new Example();
        example.method1();
    });
});