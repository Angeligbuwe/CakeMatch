                       SPECIFICATION


# 1. FEATURE

This feature allows the customer to provide a celebration type, a
preferred flavour, a colour or theme, and a decoration preference.
CakeMatch recommends a matching cake style, a filling, a decoration, and
a short reason for the recommendation.

# 2. Customer/User Flow

1. The customer selects the celebration type.
2. The customer selects a preferred flavour.
3. The customer selects a colour or theme.
4. The customer selects a decoration preference.
5. CakeMatch recommends a cake style, a filling, a decoration, and a
   short reason.
6. The website displays the recommendation in the order summary.

# 3. Frontend Changes

- Add input fields or selections for celebration type, flavour, colour
  or theme, and decoration preference, alongside the existing guest-number
  input.
- Display the recommended cake style, filling, decoration, and reason in
  the order summary, alongside the existing cake-size recommendation.
- No changes to the existing cake-size input or display.

# 4. Backend/API Changes

- Add a new rule-based TypeScript lookup function, separate from
  `recommendCakeSize`, that takes celebration type, flavour, colour or
  theme, and decoration preference, and returns a cake style, filling,
  decoration, and reason.
- The lookup uses separate per-field rules (celebration type maps to a
  style, flavour maps to a filling, decoration preference maps to a
  decoration, and colour or theme is validated and used in the reason
  text). It does not use one combined table covering every possible
  four-field combination.
- Add a new API-style function, `postCakeStyleRecommendation`, following
  the same pattern as the existing `postCakeSizeRecommendation` in
  `api/cake-size-recommendation.ts`. This is a plain TypeScript function
  that returns a status and a body; it does not assume or require a real
  HTTP router or server to exist.
  - It imports only the new lookup function.
  - The lookup function does not import from the API folder or from any
    test, following the package-boundary rule in ADR 001 and ADR 002.
- No changes to the existing `cake-size-recommendation.ts` or its API
  route.

# 5. Data Changes

- No database is introduced.
- The rule tables (celebration type, flavour, colour or theme, and
  decoration preference, mapped to style, filling, decoration, and
  reason) are defined directly in TypeScript code, the same way the
  cake-size ranges are defined in `cake-size-recommendation.ts`.

# 6. What It Leaves Alone (Out of Scope)

- The feature does not calculate the cake price.
- It does not handle delivery options.
- It does not handle AI-generated recommendations.
- It does not change the existing cake-size recommendation feature.
- It does not add a database, payment system, or unrelated functionality.

# 7. What Must Be True Before It Runs?

A valid celebration type, flavour, colour or theme, and decoration
preference must be selected.

# 8. What's Guaranteed After?

After all four valid inputs are provided, CakeMatch will recommend a
cake style, a filling, a decoration, and a short reason, based on the
customer's selections.

# 9. What Can Go Wrong?

The input is invalid when any of the four fields is empty, missing, or
not one of the supported options.

# 10. What Happens When It Does?

When this happens, CakeMatch should display an error message asking the
customer to complete all four selections with supported options.

# 11. Success Case

Given: the customer selects a celebration type, flavour, colour or
theme, and decoration preference, all supported
When: the customer requests a cake-style recommendation
Then: CakeMatch displays a recommended cake style, filling, decoration,
and a short reason.

# 12. Error Case

Given: the customer leaves one or more of the four fields empty, or
selects an unsupported option
When: the customer requests a cake-style recommendation
Then: CakeMatch displays an error message asking the customer to
complete all four selections with supported options.

# 13. Tests

- Unit tests for the lookup function:
  - At least one test per supported celebration type, confirming it
    returns a valid style, filling, decoration, and reason.
  - A test confirming that a missing or empty field returns an error.
  - A test confirming that an unsupported option returns an error.
- API route tests, following the pattern of
  `api/cake-size-recommendation.test.ts`:
  - A success test checking status 200 and the recommendation body.
  - A failure test checking status 400 and the error message.

# 14. Acceptance Criteria

- Given all four valid inputs, the API returns status 200 with a cake
  style, filling, decoration, and reason.
- Given any missing or unsupported input, the API returns status 400
  with an error message asking the customer to complete all selections.
- The new lookup function does not import from the API folder or any
  test file.
- The new API route imports only the new lookup function.
- The existing cake-size recommendation feature is unaffected.
- All new and existing tests pass.

# 15. Assumptions

- For the first version, the supported values are fixed as follows:
  - Celebration type: Birthday, Wedding, Anniversary
  - Flavour: Vanilla, Chocolate, Red Velvet
  - Colour or theme: White, Gold, Pink
  - Decoration preference: Simple, Elegant, Floral
- Each field is validated independently against its own list above. A
  missing, empty, or unsupported value in any one field is an error,
  regardless of the other three fields.
- This feature is independent of, and does not combine with, the
  existing cake-size recommendation in this first version.

# 16. Out of Scope

- Combining the cake-style recommendation with the cake-size
  recommendation into a single response.
- Estimated prices, dietary requirements, event dates, image uploads,
  customer reviews, delivery or collection options, WhatsApp contact,
  and light and dark mode (as noted in the README's future features).
- AI-generated recommendations.
- A database or persistent storage of recommendations.
