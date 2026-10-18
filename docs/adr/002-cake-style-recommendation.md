# 2. Cake-Style Recommendation Using a Rule-Based Lookup

## Status

Accepted

## Context

CakeMatch is adding a new Cake Style Recommendation Assistant. Based on the
customer's celebration type, preferred flavour, colour or theme, and
decoration preference, it should recommend a cake style, a filling, a
decoration, and a short reason for the recommendation.

## Options Considered

1. A rule-based lookup using a pure TypeScript function.
2. An AI/LLM-generated recommendation using an external service.

## Decision

Build the first cake-style recommendation using separate per-field
TypeScript lookup rules (celebration type, flavour, colour or theme, and
decoration preference each validated and looked up on their own),
instead of a rule-based Approach A table covering every possible
four-field combination.

### Reasons for Choosing Approach A

- It fits the existing CakeMatch architecture and package boundary.
- Its output is predictable and easy to test with Jest.
- It does not require a network connection, API key, or additional
  dependency.
- It is the smallest and safest first version.
- It can be extended later with more combinations.
- Separate per-field rules keep the feature small and testable, avoid a
  large combined table, and follow the existing cake-size pattern.

## Consequences

### Evidence

All 15 tests passed, the TypeScript check reported no errors, and the
existing cake-size feature remained unchanged.

### Trade-off

The first version does not provide a specially designed recommendation
for every possible combination. Rule tables may still become larger as
more options are added, but this is acceptable for the first version.

### Next Step

Add more supported choices in a later iteration, such as Baby Shower,
strawberry flavour, and blue themes.

## When to Reopen

Reconsider this decision if more supported options are added, or if
recommendations need to depend on relationships between several inputs
rather than on each field independently.
