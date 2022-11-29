- Convert a function component into a class:
  1. Create an ES6 class, with the same name, that ```extends React.Component```.
  2. Add a single empty method to it called ```render()```.
  3. Move the body of the function into the ```render()``` method.
  4. Replace props with ```this.props``` in the ```render()``` body.
  5. Delete the remaining empty function declaration.
```
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```
- How to add local state to a class
  1. Replace this.props.date with this.state.date in the ```render()``` method.
  2. Add a class constructor that assigns the initial ```this.state```. Class components should always call the base constructor with props:
  ```
    constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  ```
- Mounting in React is setting a timer (usually ```setInterval()```) after a component is initially rendered to the DOM.
- Unmounting in React is clearing the time (usually ```clearInterval()```) whenever the DOM produced by the component is removed.
- Lifecycle methods are ```componentDidMount``` and ```componentWillUnmount```.
- The ```componentDidMount()``` method runs after the component output has been rendered to the DOM. This is a good place to set up a timer.
```
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
```
- Tear down the timer in the `componentWillUnmount()`:
```
 componentWillUnmount() {
    clearInterval(this.timerID);
  }
```
- While `this.props` is set up by React itself and `this.state` has a special meaning, you are free to add additional fields to the class manually if you need to store something that doesn’t participate in the data flow (like a timer ID).
- How to use `setState()`:
  1. Do not modify state without using `setState()`.
  2. Do not rely on `this.prop` and `this.state` or current values for calculating the next state. State updates are asychronous. Meaning the `setState()` calls may get out of order, thus incorrectly calculating the state. Use a function that accepts the state and props as arguments.
  ```
  this.setState((state, props) => ({
    counter: state.counter + props.increment
  }));
  ```
  3. When you call setState(), React merges the object you provide into the current state.
- A components state local or encapsulated, meaning it is not accessible by a parent or child component. However a component can pass it's state down as props.
- React has "top-down" data flow. Meaning each component's isolated data can flow down to children components.
