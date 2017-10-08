import '../lib/applyMods';

// Build text-modified array based on text string and count
export default (text, count) => {
  let output = [];
  for (var i = 0; i < count; i += 1) {
      output.push(text.applyMods(i));
  };

  return output;
}
