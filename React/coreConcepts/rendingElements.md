- Unlike browser DOM elements, React elements are plain objects, and are cheap to create.
- Applications built with just React usually have a single root DOM node, but can have isolated nodes.
- To render a React element, first pass the DOM element to ```ReactDOM.createRoot()```, then pass the React element to root.render():

```
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
const element = <h1>Hello, world</h1>;
root.render(element);
```
- React elements are immutable (an object whose state cannot be modified after it is created.) Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.
- React only updates whats necessary to bring the DOM to its desired state.