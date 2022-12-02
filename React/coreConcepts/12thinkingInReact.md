
## How To Build A React App: Searchable Products
*Setup*
- Start with mock data, a JSON file.

*Implementation*
1. **Break The UI Into A Component Hierarchy**<br/>
  a. Draw boxes around every component (and subcomponent) in the mock and give them all names. You can identify components based on the single responsibility principle. Each component should ideally do only do one thing.<br/>
  b. Arrange the components into a hierarchy.
 - `FilterableProductTable`
    - `SearchBar`
    - `ProductTable`
      - `ProductCategoryRow`
      - `ProductRow`
2. **Build A Static Version in React**<br/>
  *A Few Rules For Easier Programming*
  - Do not use state because state is only for interactivity, data that changes over time.
  - Build top-down, unless implementing a larger project. In which case you'll want to also write tests as build.
  - Each component will only have a `render` method. And the top most component will take the mock data.
3. **Identify The Minimal (but complete) Representation Of UI State**<br/>
The goal is have an interactive UI using the least amount of state necessary and compute everything else on demand.<br/> <br/>
**How To Decide If a Component Needs State**
- Is it passed in from a parent via props? If so, it probably isn’t state.
- Does it remain unchanged over time? If so, it probably isn’t state.
- Can you compute it based on any other state or props in your component? If so, it isn’t state.
4. **Identify Where Your State Should Live**<br/><br/>
**How To Identify Which Component Mutates/Owns State**<br/>
For each piece of state in your application:
- Identify every component that renders something based on that state.
- Find a common owner component (a single component above all the components that need the state in the hierarchy).
- Either the common owner or another component higher up in the hierarchy should own the state.
- If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.
5. **Add Inverse Data Flow**<br/>
Support data flowing the other way: components deep in the hierarchy need to update the state.