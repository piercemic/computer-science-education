- React recommends using composition over inheritance because props and composition give you all the flexibility you need to customize a component’s look and behavior in an explicit and safe way. 
- When components don't know their children, use the special `children` prop to pass elements directly in the output. For example, everthing within the `FancyBorder` tags in `WelcomeDialog` will get passed as a `children` prop.
```
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}
```
- You can omit using `children` props for "holes", similar to "slots", where you come up with your own convention like `props.left` instead of `props.children`.