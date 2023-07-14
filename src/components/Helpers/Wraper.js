export const wrapper = props=>{
    return props.children;
}
// Remember the children prop holds all the content you're passing between the opening and closing tag

// And that's the same as our wrapper. These two syntaxes here render empty wrappers which don't render any actual HTML element to the DOM It's just built into React,
// return (<></>)
// return (<React.Fragment></React.Fragment>)

//portals
//that a modal, sidebar drawer, dialog ets basically is an overlay on your page. It is an overlay to the entire page. So logically, it's above everything else. And if it's then nested in some other HTML code, it might technically work because of styling, but it's not good code. It's not a good structure. And it can even lead to real problems again, with styling, or with accessibility, if you have such nested overlay content, because if, for example, a screen reader has to interpret your HTML code, which is being rendered, it might not see this as a general overlay,