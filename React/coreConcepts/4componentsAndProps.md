- Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
- Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props” or properties) and return React elements describing what should appear on the screen.
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
- Always start component names with a capital letter because React treats components with lowercase letters as DOM tags, not React tags.
- Recommended to name props from the component’s own point of view rather than the context in which it is being used. In this example, `Avatar` doesn’t need to know that it is being rendered inside a `Comment`. This is why we have given its prop a more generic name: `user` rather than `author`.
```
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
```
- If a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be extracted to a separate component.
- Props are read only or immutable. All React components must act like pure functions with respect to their props. Meaning a component should not change the value of its props.