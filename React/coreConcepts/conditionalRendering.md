- React has conditional rendering.
- Inline if with logical && operator: In JavaScript, `true && expression` always evaluates to `expression`, and `false && expression` always evaluates to `false`. Therefore, if the condition is `true`, the element right after `&&` will appear in the output. If it is `false`, React will ignore and skip it.
- Inline If-Else with Conditional Operator: `condition ? true : false`.
- You can hide a rendered component by returning null instead of its render output. This does not affect the firing of the component’s lifecycle methods.
```
  if (!props.warn) {
    return null;
  }
```