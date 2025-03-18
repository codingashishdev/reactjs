function customRender(reactComponent, mainComponent){
    /* this code will creates problem if there is third attribute
    const domElement = document.createElement(reactComponent.type)
    domElement.innerHTML = reactComponent.children
    domElement.setAttribute('href', reactComponent.props.href)
    domElement.setAttribute('target', reactComponent.props.target)

    mainComponent.appendChild(domElement)
    */

    const domElement = document.createElement(reactComponent.type)
    domElement.innerHTML = reactComponent.children
    for (const prop in reactComponent.props) {
        if(prop == 'children') continue;
        domElement.setAttribute(prop, reactComponent.props[prop])
    }
    mainComponent.appendChild(domElement);
}

const reactComponent = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'See my page'
}

const mainComponent = document.getElementById("root");

customRender(reactComponent, mainComponent)
