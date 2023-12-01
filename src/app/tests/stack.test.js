class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }
  get peek(){
    return this.items[this.top]
  }

  push(values) {
    this.top += 1;
    this.items[this.top] = values;
  }
}

describe("My stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("ta vazio", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it("pode jogar pro alto", () => {
    stack.push('1');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('1');
  });

});
