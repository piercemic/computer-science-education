- JSX is a syntax extension to JavaScript that describes what the UI should look like with React elements.
- Recommended to wrap elements in parentheses to avoid automatic semicolon insertion.
- Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both.
- After compilation, JSX expressions evaluate to JS objects.
- JSX prevents injection attacks by escaping embedded values and rendering everything as a string.
- Babel compiles JSX to ```React.createElement()``` calls.

```
const reactElement = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```
```
const reactElement = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```