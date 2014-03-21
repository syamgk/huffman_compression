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

//test case:
show(frequency("aaabccdeeeeeffg"));
