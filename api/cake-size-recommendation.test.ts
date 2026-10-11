import { postCakeSizeRecommendation } from "./cake-size-recommendation";

test("valid guests returns 200 with the recommendation", () => {
  const response = postCakeSizeRecommendation({ guests: 20 });

  expect(response.status).toBe(200);
  expect(response.body).toEqual({ recommendation: "Medium cake" });
});

test("invalid guests returns 400 with an error", () => {
  const response = postCakeSizeRecommendation({ guests: 0 });

  expect(response.status).toBe(400);
  expect(response.body).toEqual({
    error: "Please enter a valid number of guests.",
  });
});
