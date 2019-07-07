1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects?

        Array.map, Array.filter, Object.assign

    Which method do we use to create a new object while extending the properties of another object?

        Object.assign

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is
    the store known as a 'single source of truth' in a redux application?

        actions are functions that dispatch action packets (JS Objects) to the reducer
        actions describe "what happened" in a redux application

        reducers are pure functions that do not write directly to state, but rather return updated portions
        of the state back to the redux store

        store holds the state of the Redux application, it is known as the single source of truth because because
        it holds a single state object tree that cannot be rewritten or reshaped and describes the entire state
        of the application.

        Without redux or store, your application can have multiple sources of truth depending on which components
        hold their own state.

3.  What is the difference between Application state and Component state? When would be a good time to use  
    one over the other?

    Application state is global and is contained within the redux store. Component state exists only at the component level.

    Application state should be used if one or more components depend on having access to the glocal redux state.

    Component state should be used if no other component in your application requires access to it. An example would be
    form field data. Other components may update depending on how that form data is computed by the actions and reducers,
    but they won't depend on the data being typed into those fields at the time the user is filling out the form.

4.  What is middleware?

        Middleware is either a custom or 3rd party extension that intercepts the point between dispatching
        an action and the moment that action reaches the reducer.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

        redux-thunk is middleware that allow us to handle actions that require special case handling depending on the
        outcome of an asyncronous action like an call to a server for example.

        redux-thunk can also allow us to handle complex synchronous logic that requires access to the store.

6.  Which `react-redux` method links up our `components` with our `redux store`?

        connect
