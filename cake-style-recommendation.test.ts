import { recommendCakeStyle } from "./cake-style-recommendation";

const VALID_INPUT = {
  celebrationType: "Birthday",
  flavour: "Vanilla",
  colourOrTheme: "White",
  decorationPreference: "Simple",
};

describe("recommendCakeStyle - success cases", () => {
  test("Birthday, Vanilla, White, Simple returns the matching recommendation", () => {
    const result = recommendCakeStyle(VALID_INPUT);

    expect(result).toEqual({
      style: "Classic round cake",
      filling: "Vanilla buttercream filling",
      decoration: "Simple buttercream finish",
      reason:
        "A Classic round cake suits a Birthday and pairs well with a White theme.",
    });
  });

  test("Wedding, Chocolate, Gold, Elegant returns the matching recommendation", () => {
    const result = recommendCakeStyle({
      celebrationType: "Wedding",
      flavour: "Chocolate",
      colourOrTheme: "Gold",
      decorationPreference: "Elegant",
    });

    expect(result).toEqual({
      style: "Tiered cake",
      filling: "Chocolate ganache filling",
      decoration: "Fondant with decorative details",
      reason: "A Tiered cake suits a Wedding and pairs well with a Gold theme.",
    });
  });

  test("Anniversary, Red Velvet, Pink, Floral returns the matching recommendation", () => {
    const result = recommendCakeStyle({
      celebrationType: "Anniversary",
      flavour: "Red Velvet",
      colourOrTheme: "Pink",
      decorationPreference: "Floral",
    });

    expect(result).toEqual({
      style: "Elegant two-tier cake",
      filling: "Cream cheese filling",
      decoration: "Fresh or sugar flower decoration",
      reason:
        "A Elegant two-tier cake suits a Anniversary and pairs well with a Pink theme.",
    });
  });
});

describe("recommendCakeStyle - error cases", () => {
  test("unsupported celebration type throws an error", () => {
    expect(() =>
      recommendCakeStyle({ ...VALID_INPUT, celebrationType: "Graduation" })
    ).toThrow("Please select a supported celebration type");
  });

  test("unsupported flavour throws an error", () => {
    expect(() =>
      recommendCakeStyle({ ...VALID_INPUT, flavour: "Strawberry" })
    ).toThrow("Please select a supported celebration type");
  });

  test("unsupported colour or theme throws an error", () => {
    expect(() =>
      recommendCakeStyle({ ...VALID_INPUT, colourOrTheme: "Blue" })
    ).toThrow("Please select a supported celebration type");
  });

  test("unsupported decoration preference throws an error", () => {
    expect(() =>
      recommendCakeStyle({ ...VALID_INPUT, decorationPreference: "Rustic" })
    ).toThrow("Please select a supported celebration type");
  });

  test("missing colour or theme throws an error", () => {
    expect(() =>
      recommendCakeStyle({ ...VALID_INPUT, colourOrTheme: "" })
    ).toThrow("Please select a supported celebration type");
  });

  test("empty input throws an error", () => {
    expect(() => recommendCakeStyle({})).toThrow(
      "Please select a supported celebration type"
    );
  });
});
