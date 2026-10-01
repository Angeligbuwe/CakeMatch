import { recommendCakeSize } from "./cake-size-recommendation";

test("20 guests recommends a Medium cake", () => {
  expect(recommendCakeSize(20)).toBe("Medium cake");
});

test("0 guests returns an error asking for a valid number", () => {
  expect(() => recommendCakeSize(0)).toThrow(/valid number/i);
});
