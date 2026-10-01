export function recommendCakeSize(guests: number): string {
  if (!Number.isInteger(guests) || guests <= 0) {
    throw new Error("Please enter a valid number of guests.");
  }

  if (guests <= 10) {
    return "Small cake";
  }

  if (guests <= 20) {
    return "Medium cake";
  }

  if (guests <= 40) {
    return "Large cake";
  }

  return "Extra-large cake";
}
