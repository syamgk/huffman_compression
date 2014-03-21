function buildTree(tuples) {
  while (tuples.length > 1) {
    leastTwo = tuples.slice(0,2);
    theRest = tuples.slice(2);
    combFreq = leastTwo[0][0] + leastTwo[1][0];
    tuples = theRest.concat([[combFreq,leastTwo]]);
    tuples.sort();   
  }  
  return tuples[0];
}

//test case: # a little diff with python output

tup = [[1, "b"],[1, "d"],[1, "g"],[2, "c"],[2, "f"],[3, "a"],[5, "e"]];
buildTree(tup);
