function sortFreq(freqs) {
  var tuples = []
  for (x in freqs)
    tuples.push([freqs[x],x]);
  return tuples.sort();
}

//test case:

freqs = {'a': 3, 'c': 2, 'b': 1, 'e': 5, 'd': 1, 'g': 1, 'f': 2}
show(sortFreq(freqs));

