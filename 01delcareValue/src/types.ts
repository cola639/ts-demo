//myOwnType

////1
type mType = string | number;
let first: mType;
let second: mType;
first = "123";
second = 123;

////2
let c: 1 | 2;
let d: number | string;
d = 2;
d = "2";

//as alert
let someValue: unknown = "this is length";
let strLength: number = (someValue as string).length; //equal to (<string>someValue).length;

console.log(strLength);
