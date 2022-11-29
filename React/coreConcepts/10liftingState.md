- When several components need to reflect the same data, React recommends lifting the shared state to the closest common ancestor. As opposed to trying to sync the state between different components.
- To implement, you need to  Then move the state to the shared component and pass down data from its props. In the shared component you need to make a function to handle prop changes from the child components. Also the child component will need to call the shared component function to update its prop's.
- Lifting Up State implmentations
  - Shared Component
    - Add the state for all shared components.
    - Create any additional logic for determining state of individual components.
    - Add handler functions to update state from a child component.

```
handleCelsiusChange(temperature) {
  this.setState({scale: 'c', temperature});
}
```
  
  - Child Components
    - Refactor the local state to props. For example, `this.state.temperature` becomes `this.props.temperature`. 
    - Refactor setting the state. For examples, `this.setState()` becomes `this.props.onTemperatureChange()`.
- The shared state component becomes the source of truth.
- Lifting state involves writing more “boilerplate” code than two-way binding approaches, but as a benefit, it takes less work to find and isolate bugs. Since any state “lives” in some component and that component alone can change it, the surface area for bugs is greatly reduced. Additionally, you can implement any custom logic to reject or transform user input.
- When you see something wrong in the UI, you can use React Developer Tools to inspect the props and move up the tree until you find the component responsible for updating the state.