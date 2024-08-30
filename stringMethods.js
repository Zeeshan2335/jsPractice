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

// includes()
// this method is used to find the same text from the string
// it returns true or false flag.
// it is case sencitive

const string1 = "This is Syed Zeeshan";
// console.log(string1.includes("This"));// true
// console.log(string1.includes("this"));// false

// startWith() it is case sensative as same as includes
// it is check only starting indexs of stirngs

string1.startsWith("This");
// console.log(string1.startsWith("This"));// true
// console.log(string1.startsWith("this"));//flase
// console.log(string1.startsWith("Th")); //true

// endWith()
// it is case sensative as includes metho
// it check ending indexs of the stirng

// code example:
const endWith = string1.endsWith("Zeeshan");
const endWith2 = string1.endsWith("Zees");
const endWith3 = string1.endsWith("zeeshan");
// console.log(endWith);// true
// console.log(endWith2);// false
// console.log(endWith3);// false

// search()
// search method works as includes but it returns the starting index number
// first it check the value is avalaible or not in the string.
// then if that value is avaiaible in string then in return its starting index number
// if value is not available in the string then it returns -1
// it is case sensative like includes()
const string2 = "there is JavaScript String Methods Learning";
const search1 = string2.search("Methods"); // 26 is the starting index of the value which we pass to function
const search2 = string2.search("is"); // 6 is the starting index
const search3 = string2.search("java"); //-1
const search4 = string2.search("Java"); //9 is the starting index

console.log("-->", search4);
 