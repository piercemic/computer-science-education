- JSX is a syntax extension to JavaScript that describes what the UI should look like with React elements.
- Wrap elements in parentheses to avoid automatic semicolon insertion.
- Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both.
- JSX prevents injection attacks by escaping embedded values before they're rendered.
- Babel compiles JSX expressions to JavaScript function calls, React.createElement(), and objects,

### Two Identical Examples
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