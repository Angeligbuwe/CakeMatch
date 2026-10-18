import { postCakeStyleRecommendation } from "./cake-style-recommendation";

test("valid input returns 200 with the recommendation", () => {
  const response = postCakeStyleRecommendation({
    celebrationType: "Wedding",
    flavour: "Chocolate",
    colourOrTheme: "Gold",
    decorationPreference: "Elegant",
  });

  expect(response.status).toBe(200);
  expect(response.body).toEqual({
    style: "Tiered cake",
    filling: "Chocolate ganache filling",
    decoration: "Fondant with decorative details",
    reason: "A Tiered cake suits a Wedding and pairs well with a Gold theme.",
  });
});

test("invalid input returns 400 with an error", () => {
  const response = postCakeStyleRecommendation({
    celebrationType: "Graduation",
    flavour: "Chocolate",
    colourOrTheme: "Gold",
    decorationPreference: "Elegant",
  });

  expect(response.status).toBe(400);
  expect(response.body).toEqual({
    error:
      "Please select a supported celebration type, flavour, colour or theme, and decoration preference.",
  });
});
