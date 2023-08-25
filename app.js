
{/* <div id="parent">
    <div id="child">
        <h1>iam an h1 tag</h1>
    </div>
</div> */}

const parent = React.createElement('div', {id: 'parent'},
    React.createElement('div', {id: 'child'},
    React.createElement('h1', {}, 'I am an h1 tag')
    )
);

console.log(parent);

const heading = React.createElement('h1', { id: 'heading' }, 'Hello world from React');
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
