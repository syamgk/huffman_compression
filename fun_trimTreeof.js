function trimTree(tree) {
  var p = tree[1];
  if(typeof p == "string")
    return p;
  else 
    return Array(trimTree(p[0]), trimTree(p[1]));
}
