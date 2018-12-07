function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.querySelector('#nested .target')
}
function deepestChild() {
  let div= document.getElementById('grand-node')
  let nextDiv = div.children[0]

  while (nextDiv) {
    div= nextDiv
    nextDiv= div.children[0]
  }

  return div
}