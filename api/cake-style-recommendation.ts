import {
  recommendCakeStyle,
  CakeStyleRequest,
  CakeStyleRecommendation,
  INVALID_CAKE_STYLE_INPUT_ERROR,
} from "../cake-style-recommendation";

export function postCakeStyleRecommendation(body: CakeStyleRequest): {
  status: number;
  body: CakeStyleRecommendation | { error: string };
} {
  try {
    const recommendation = recommendCakeStyle(body);
    return { status: 200, body: recommendation };
  } catch {
    return {
      status: 400,
      body: { error: INVALID_CAKE_STYLE_INPUT_ERROR },
    };
  }
}
