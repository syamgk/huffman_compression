function frequency(str) {
  var freqs = {};
  for (ch in str)
    if(freqs[str[ch]] === undefined) {
      freqs[str[ch]] = 0;
      freqs[str[ch]] += 1;
    }
    else
      freqs[str[ch]] += 1;
  return freqs;
}

function sortFreq(freqs) {
  var tuples = []
  for (x in freqs)
    tuples.push([freqs[x],x]);
  return tuples.sort();
}

function buildTree(tuples) {
  while (tuples.length > 1) {
    leastTwo = tuples.slice(0,2);                          // get the 2 to combine
    theRest = tuples.slice(2);                             // then the remaining
    combFreq = leastTwo[0][0] + leastTwo[1][0];            // the branch points freq
    tuples = theRest.concat([[combFreq,leastTwo]]);        // add branch point to the end
    tuples.sort();                                         // sort it into places
  }  
  return tuples[0];                       // Return the single tree inside the list
}

function trimTree(tree) {
  // Trim the freq counters off, leaving just the letters
  var p = tree[1];           // ignore freq count in [0]
  if(typeof p == "string")   // if just a leaf, return it
    return p;              
  else                       // trim left then right and recombine 
    return Array(trimTree(p[0]), trimTree(p[1]));
}

var codes ={}
function assignCodes(node,pat ='') {
  if (typeof node == "string")     //if reached a leaf: set its code
    codes[node] = pat 
  else {                           //Branch point.
    assignCodes(node[0],pat+"0")   //Do the left branch
    assignCodes(node[1],pat+"1")   //then do the right branch
  }
  return codes;
}

function encode(str) {
  output = ""
  for (ch in str)
    output += codes[str[ch]];
    return output;
}

function decode(tree,str) {
  var output = "";
  var p = tree
  for (n in str) {
    if (str[n] == '0')           // if "0" head up the left branch
      p = p[0];
    else                         // else go up the right one
      p = p[1];
    if (typeof p === "string"){  // found a char: add output
      output += p;
      p =tree;                   //restart for next char.
    }}
   return output;
}
main()//test_function calling

// test condition :
function main() {
  str = prompt("Enter a String");        // prompt ! enter string
  freqs = frequency(str);                // calling frequency 
  sortd = sortFreq(freqs);               // sorted frequency
  tree = buildTree(sortd);               // building tree
  tree = trimTree(tree  );               // trim frequency from tree 
  assignCodes(tree,pat ='');             // assigning codes to corresponding char:
  encd = encode(str);                    // calling encode 
  alert(encd);                           // show encoded string
  dcd = prompt("Enter the string to be decoded"); // enter the code string(eg:00110101)
  alert(decode(tree,dcd));                // shows the original by decoding it
}
