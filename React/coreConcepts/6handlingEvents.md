- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.
- You cannot return `false` to prevent default behavior in React. You must call `preventDefault` explicitly.
- The event (e) parameter is a synthetic event. A synthetic event is a cross-browser wrapper around the browser’s native event that allows events to work identically across all browsers.
- Generally, if you refer to a method without `()` after it, such as `onClick={this.handleClick}`, you should bind that method, `this.handleClick = this.handleClick.bind(this);`.
- You can pass extra parameters to event handlers using arrow function or [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind). In both cases, the React event will be passed as a second argument after the ID. With an arrow function, we have to pass it explicitly, but with bind any further arguments are automatically forwarded.
```
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```