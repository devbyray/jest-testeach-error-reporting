# Better Error Reporting using Jest test.each

Right out of the box the Jest method `test.each` seems very handy in multiple ways. But one of the down sides is the error reporting. If one of those tests are failing, it's not very easy to read which one went wrong.

But the team of Jest offers a handy way of making it easier to read. It doesn't need a lot of work 👍.

## Solution

If you have "%o" in the test description, it will output the whole object. This will cause the issue for readability. Well with the example below the object is still small, so that won't cause an issue. But with most requests that are send by big applications this will cause issues.

```ts
test.each([
  {a: 1, b: 1, expected: 2},
  {a: 1, b: 2, expected: 3},
  {a: 2, b: 1, expected: 3},
])('add %o', (input) => {
  expect(input.a * input.b).toBe(input.expected);
});
```

The solution is that you can spread the properties of the input object and use them in the string (which is normally an `it()` outside the `test.each()`) like this `'add($a, $b) = $expected'`.

```ts
test.each([
  {a: 1, b: 1, expected: 2},
  {a: 1, b: 2, expected: 3},
  {a: 2, b: 1, expected: 3},
])('add($a, $b) = $expected', ({a, b, expected}) => {
  expect(a * b).toBe(expected);
});
```

## Example with larger data set

In the files `bad-error-reporting.spec.ts` is an example of how you should not do the error reporting with the `test.each()`. in the file `good-error-reporting.spec.ts` you can see, how to get a more readable report in the terminal.

You can run both in the terminal:

- Bad 👎 `npx jest src/bad-error-reporting.spec.ts`
- Good ✅ `npx jest src/good-error-reporting.spec.ts`

The nice thing about the error reporting of the good example, you can also see that there is a clear overview which one succeed and which failed. With the bad example you should scroll endlessly to the top to find that 😅.