const byteSize = (str) => {
  // write your code here
  // Create a Blob object from the input string
  const blob = new Blob([str], { type: 'text/plain' });

  // Get the size of the Blob in bytes
  const sizeInBytes = blob.size;

  return sizeInBytes;


// Test cases
//console.log(byteSize('hello world')); // Output: 11
//console.log(byteSize('안녕하세요')); // Output: 15
//console.log(byteSize('')); // Output: 0

};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
