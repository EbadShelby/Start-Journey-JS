import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

console.log("get date in 5 days:");
const today = dayjs();
let date = today.add("5", "days");
let formattedDate = date.format("MMMM, dddd");

console.log(formattedDate);

console.log("calculate 1 month after today:");
date = today.add("1", "month");
formattedDate = date.format("MMMM, dddd");
console.log(formattedDate);

console.log("subtract 1 month in date");

date = today.subtract("1", "month:");
formattedDate = date.format("MMMM, dddd");
console.log(formattedDate);

console.log("display week:");
date = today;
let week = "";
for (let i = 1; i <= 7; i++) {
  date = date.add("1", "days");
  week += date.format("'dddd' ");
}

console.log(week);

