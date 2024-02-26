/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
// import * from 'qr-image';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    // message : "Please enter the URL: ";
    { message: "Please enter the URL: ", name: "URL" },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.log(answers);
    const url = answers.URL;
    let qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("url.png"));

    fs.writeFile("URL.txt", `the entered data url is : ${url}`, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
