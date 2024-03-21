function customRender(reactElement, container){
    const domElementContainer = document.createElement(reactElement.type)
    domElementContainer.innerHTML = reactElement.children
    domElementContainer.setAttribute('href', reactElement.props.href)
    domElementContainer.setAttribute('target', reactElement.props.target)

    container.appendChild(domElementContainer)
}

const reactElement = 
{
  type: "a"
  ,
  props:
  {
    href: "https://google.com",
    target: "_blank",
  }
  ,
  children: "click me to visit google",
};
 
 const mainContainer = document.querySelector('#root')

 customRender(reactElement, mainContainer)
 