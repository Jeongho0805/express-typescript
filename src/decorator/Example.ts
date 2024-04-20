/**
 * 여기서의 T는 생성자 함수를 뜻한다.
 */
function LogMethods<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args); // 원본 클래스의 생성자 함수 호출
            Object.getOwnPropertyNames(constructor.prototype).forEach(property => {
                if (typeof (this as any)[property] === 'function' && property !== 'constructor') { // 생성자 제외 전체 메서드에 적용
                    const original = (this as any)[property];
                    (this as any)[property] = function (...args: any[]) {
                        console.log("method call start");
                        const result = original.apply(this, args);
                        console.log(`method call end`);
                        return result;
                    }
                }
            });
        }
    }
}

@LogMethods
export class Example {

    constructor() {
        console.log("생성자 함수 실행");
    }

    method1() {
        console.log("메서드 1 실행");
    }
}