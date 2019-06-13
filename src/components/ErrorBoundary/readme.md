### ErrorBoundary example:

```js
const TestComponent = () => { throw new Error('render error'); return null; }

<ErrorBoundary>
    <TestComponent />
</ErrorBoundary>
```

### How to use
Render a fallback compoennt when something goes wrong in render function.  
No need to wrap every component with an ErrorBoundary.  
Find a good error handling strategy for the app.
