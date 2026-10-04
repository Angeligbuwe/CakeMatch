                       
                        SPECIFICATION


# 1. FEATURE

This feature allows the customer to enter the number of guests, and CakeMatch recommends a suitable cake size.

# 2. What it leaves alone?

- The feature does not calculate the cake price.
- It does not handle delivery options.
- And it also does not handle AI-generated recommendations.

# 3. The interface – what goes in, what comes out?

- Input : The customer’s number of guest.
- Output : The recommended cake size is clearly displayed in the order summary.

# 4. What must be true before it runs?            

A valid number of guests must be entered.

# 5. what's guaranteed after?

After a valid number is entered, CakeMatch will recommend a suitable cake size based on the customer’s number of guests.

# 6. What can go wrong?

The number of guests must be a positive whole number. The input is invalid when it is empty, zero, negative, a decimal number, or not a number.

# 7. what happens when it does?

When this happens CakeMatch should display an error message asking the customer to enter a valid number.

# 8. Cake-size rules

- 1–10 guests: Small cake
- 11–20 guests: Medium cake
- 21–40 guests: Large cake
- 41 or more guests: Extra-large cake

# 9. Normal case

Given : the customer enters 20 guests
When : the customer requests a cake-size recommendation
Then : CakeMatch displays a suitable "Medium cake".

# 10. Error case

Given : the customer enters 0 guests
When : the customer requests a cake-size recommendation
Then : the CakeMatch display an error message asking the customer to enter a valid number.


