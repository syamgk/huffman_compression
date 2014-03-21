function encode(str) {
  output = ""
  for (ch in str)
    output += codes[str[ch]];
    return output;
}