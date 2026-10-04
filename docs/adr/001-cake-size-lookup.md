# 1. Cake-Size Lookup Instead of AI Recommendations

## Status

Accepted

## Context

CakeMatch needs to recommend a suitable cake size based on the customer's
number of guests. One option was to use an AI model to generate the
recommendation. Instead, we chose to use simple, fixed guest-number ranges
(a lookup table) to decide the cake size.

## Decision

Use simple guest-number ranges to recommend a cake size, instead of an AI
model. The ranges map directly to a cake size:

- 1–10 guests: Small cake
- 11–20 guests: Medium cake
- 21–40 guests: Large cake
- 41 or more guests: Extra-large cake

## Consequences

- The recommendation is predictable: the same number of guests always
  produces the same cake size.
- The logic is easy to test, since each range and its boundary can be
  checked with a simple test case.
- The recommendation only considers the number of guests, not other
  factors such as cake shape, tiers, or portion sizes.

## When to Reopen

Reconsider this decision if cake-size recommendations later need to take
into account cake shape, tiers, portion sizes, or real bakery data.
