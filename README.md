# Javascript Type Coercion
This code demonstrates a common error in Javascript due to its implicit type coercion. When adding a number and a string, Javascript concatenates the values instead of performing numerical addition, leading to unexpected results.

## Bug
The function `foo` adds two values.  If the inputs are both numbers, it works correctly. However, if one input is a string and the other a number, the result is unexpected because the number is coerced into a string, leading to string concatenation.

## Solution
The solution involves explicit type checking or conversion to ensure both inputs are numbers before performing addition. This prevents implicit type coercion and gives the intended result.