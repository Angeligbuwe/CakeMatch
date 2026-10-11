import { recommendCakeSize } from "../cake-size-recommendation";

interface RecommendationRequestBody {
  guests?: unknown;
}

export function postCakeSizeRecommendation(body: RecommendationRequestBody): {
  status: number;
  body: { recommendation: string } | { error: string };
} {
  try {
    const recommendation = recommendCakeSize(body?.guests as number);
    return { status: 200, body: { recommendation } };
  } catch {
    return {
      status: 400,
      body: { error: "Please enter a valid number of guests." },
    };
  }
}
