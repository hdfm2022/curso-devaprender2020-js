const data1 = new Date();
const data2 = new Date('December 15 1988 09:30');
const data3 = new Date(1988, 11, 15, 0, 0, 0, 0); // 11 dezembro
console.log(1, data1);
console.log(2, data2);
console.log(3, data3);
data3.setFullYear(2050);
console.log(3, data3);
console.log(data3.toDateString());
console.log(data3.toTimeString());
console.log(data3.toISOString());