// replace methods

let str = "ABBAAANHCCCFRTAAAAAKIRCCc";
let newStr = str.replace("CCC", "_").replace("AAA", "-");

console.log(newStr); // Output: "ABBANH_FRT"

// let str = "ABBAAANHCCCFRTAAAKIRCCC";

// Replace "AAA" with "-"
let modifiedStr = str.replace(/AAA/g, "-");

// Replace "CCC" with "_"
modifiedStr = modifiedStr.replace(/CCC/g, "_"); // there is g flag is used for replace all existing "CCC" in the string 

console.log(modifiedStr); // Output: "ABB-NH_FRT-KIR_"

// The g flag is essential when you want to apply a regular expression to multiple parts of a string. It makes your regular expression global, meaning it continues to search the entire string for matches rather than stopping after the first one. This is particularly useful for tasks like replacing all instances of a substring, finding all matches, or counting occurrences of a pattern in a string.