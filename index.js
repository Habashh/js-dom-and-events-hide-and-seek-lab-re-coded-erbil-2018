function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.querySelector('#nested .target')
}
function deepestChild() {
  let div = document.getElementById('grand-node')
  let nextDiv = div.children[0]

  while (nextDiv) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}

}
function increaseRankBy(n){
  
}