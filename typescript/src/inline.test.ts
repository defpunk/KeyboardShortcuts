import Inline from './inline'

describe("practice", () => {
  it('should return 42', () => {
    const inline = new Inline();
    const result = inline.practice();
    expect(result).toBe(42);
  });
});