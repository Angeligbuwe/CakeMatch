const CELEBRATION_STYLES: Record<string, string> = {
  Birthday: "Classic round cake",
  Wedding: "Tiered cake",
  Anniversary: "Elegant two-tier cake",
};

const FLAVOUR_FILLINGS: Record<string, string> = {
  Vanilla: "Vanilla buttercream filling",
  Chocolate: "Chocolate ganache filling",
  "Red Velvet": "Cream cheese filling",
};

const SUPPORTED_COLOURS_OR_THEMES = ["White", "Gold", "Pink"];

const DECORATION_STYLES: Record<string, string> = {
  Simple: "Simple buttercream finish",
  Elegant: "Fondant with decorative details",
  Floral: "Fresh or sugar flower decoration",
};

export const INVALID_CAKE_STYLE_INPUT_ERROR =
  "Please select a supported celebration type, flavour, colour or theme, and decoration preference.";

export interface CakeStyleRequest {
  celebrationType?: unknown;
  flavour?: unknown;
  colourOrTheme?: unknown;
  decorationPreference?: unknown;
}

export interface CakeStyleRecommendation {
  style: string;
  filling: string;
  decoration: string;
  reason: string;
}

function lookup(
  options: Record<string, string>,
  value: unknown
): string | undefined {
  return typeof value === "string" ? options[value] : undefined;
}

export function recommendCakeStyle(
  input: CakeStyleRequest
): CakeStyleRecommendation {
  const style = lookup(CELEBRATION_STYLES, input?.celebrationType);
  const filling = lookup(FLAVOUR_FILLINGS, input?.flavour);
  const decoration = lookup(DECORATION_STYLES, input?.decorationPreference);
  const colourOrTheme = input?.colourOrTheme;
  const hasValidColourOrTheme =
    typeof colourOrTheme === "string" &&
    SUPPORTED_COLOURS_OR_THEMES.includes(colourOrTheme);

  if (!style || !filling || !decoration || !hasValidColourOrTheme) {
    throw new Error(INVALID_CAKE_STYLE_INPUT_ERROR);
  }

  return {
    style,
    filling,
    decoration,
    reason: `A ${style} suits a ${input.celebrationType} and pairs well with a ${colourOrTheme} theme.`,
  };
}
