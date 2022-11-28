- Form elements naturally keep some internal state. 
- Controlled component have access to the form data.
- Component state should be the "single source of truth" for all form values. Meaning a rendered value should be passed something like `this.state.value`.
- With a controlled component, the input’s value is always driven by the React state.
- In React, a `<textarea>` uses a value attribute as opposed to child text.
- The `<select>` tag uses a value attribute to track the `selected` attribute.
```
<select value={this.state.value} onChange={this.handleChange}>
```
- `<input type="text">`, `<textarea>`, and `<select>` all work similarly in React because they all accept a `value` attribute that you can use to implement a controlled component.
- `<input type="file">` is a uncontrolled component because the value is read only.
- When you need to handle multiple controlled input elements, you can add a `name` attribute to each element and let the handler function choose what to do based on the value of `event.target.name`.
```
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
```
- Consider [uncontrolled components](https://reactjs.org/docs/uncontrolled-components.html) as an input form alternative when you are converting a preexisting codebase to React, or integrating a React application with a non-React library.