{
  /* <div id="parent">
    <div id="child">
        <h1>Heading</h1>
    </div>
</div> */
}

const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', { id: 'heading' }, 'I am h1 tag'),
    React.createElement('h2', { id: 'heading' }, 'I am h2 tag'),
  ])
);

const heading = React.createElement(
  'h1',
  { id: 'heading' },
  'Hello world from react!'
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
