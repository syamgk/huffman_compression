var codes ={}
function assignCodes(node,pat ='') {
  if (typeof node == "string")
    codes[node] = pat
  else {
    assignCodes(node[0],pat+"0")
    assignCodes(node[1],pat+"1")
  }
  return codes;
}