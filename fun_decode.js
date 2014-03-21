function decode(tree,str) {
  var output = "";
  var p = tree
  for (n in str) {
    if (str[n] == '0')
      p = p[0];
    else
      p = p[1];
    if (typeof p === "string"){
      output += p;
      p =tree;
    }}
   return output;
}