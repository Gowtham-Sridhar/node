const fs = require("fs");
const path = require("path");

// create folder
// fs.mkdir(path.join(__dirname, "test"), {}, (err) => {
//   if (err) throw err;
//   console.log("folder created...");
// });

// fs.writeFile(
//   path.join(__dirname, "test", "robot.txt"),
//   "Gowtham Sridhar",
//   (err) => {
//     if (err) throw err;
//     console.log("The file has been saved");

//     fs.appendFile(
//       path.join(__dirname, "test", "robot.txt"),
//       " Amirtha Nandhini",
//       (err) => {
//         if (err) throw err;
//         console.log("file updated...");
//       }
//     );

//     // read file
//     fs.readFile(
//       path.join(__dirname, "test", "robot.txt"),
//       "utf8",
//       (err, data) => {
//         if (err) throw err;
//         console.log(data);
//       }
//     );
//   }
// );

// rename file
fs.rename(
  path.join(__dirname, "test", "robot.txt"),
  path.join(__dirname, "test", "crawler.txt"),
  (err) => {
    if (err) throw err;
    console.log("file renamed...");
  }
);
