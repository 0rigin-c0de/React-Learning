import {createElement} from React

function Identity(props){
    return props.children
}

let element = createElement(
    Identity,{},createElement(h1,{},'Hello World!')
)

ReactDOM.render(element,document.getElementById('root'))