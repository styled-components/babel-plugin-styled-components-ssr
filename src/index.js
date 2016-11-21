import template from 'babel-template'

const buildWrapper = template(`(function() { var c = VALUE;  c.identifier = IDENTIFIER; return c })()`)

let id = 0

export default function({ types }) {
  return {
    visitor: {
      TaggedTemplateExpression: {
        enter(path) {
          const tag = path.node.tag
          if ((tag.object && tag.object.name == 'styled') || (tag.callee && tag.callee.name == 'styled')) {
            if (path.node._styledComponentsSeen) {
              return
            }

            id++
            const wrapper = buildWrapper({ VALUE: path.node, IDENTIFIER: types.numericLiteral(id) })
            path.node._styledComponentsSeen = true
            path.replaceWith(wrapper)
          }
        }
      }
    }
  }
}
