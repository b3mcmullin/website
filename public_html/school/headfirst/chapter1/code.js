var word = "bottles";
var count = 99;
while (count > 0) {
  console.log(count + " " + word + " of juice on the wall");
  console.log(count + " " + word + " of juice,");
  console.log("Take one down, pass it around,");
  count = count - 1
  console.log(count + " " + word + " of juice on the wall.");
  if (count < 0) {
    console.log("No more " + word + " of beer on the wall.");
  }
}

