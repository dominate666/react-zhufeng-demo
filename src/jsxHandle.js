export function createElement(ele, props, ...children) {
  let virualDom = {
    $$typeof: Symbol("react.element"),
    key: null,
    type: null,
    ref: null,
    props: {},
  };
  let len = children.length;
  virualDom.key = ele;
  if (props !== null) {
    virualDom.props = {
      ...props,
    };
  }
  if (len === 1) virualDom.props.children = children[0];
  if (len > 1) virualDom.props.children = children;
  return virualDom;
}
