const readline = require("readline");
const fs = require("fs");

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const project_title = prompt.question("Enter the title of your project: ");
const description = prompt.question("Enter a description of your project: ");
const installation_instructions = prompt.question("Enter instructions on how to install your project: ");
const usage_information = prompt.question("Enter information on how to use your project: ");
const contribution_guidelines = prompt.question("Enter guidelines for contributing to your project: ");
const test_instructions = prompt.question("Enter instructions on how to test your project: ");
const license = prompt.question("Choose a license for your project: \n\n1. MIT\n2. Apache 2.0\n3. GNU General Public License v3.0\n\nEnter your choice: ");
const github_username = prompt.question("Enter your GitHub username: ");
const email_address = prompt.question("Enter your email address: ");

// Create the README.md file.
const readme_file = fs.open("README.md", "w", function(err, fd) {
    if (err) {
      console.log(err);
      return;
    }
  
    // Write to the file.
    readme_file.write("# " + project_title + "\n\n");
    readme_file.write("**Description:**\n\n");
    readme_file.write(description + "\n\n");
    readme_file.write("**Installation:**\n\n");
    readme_file.write(installation_instructions + "\n\n");
    readme_file.write("**Usage:**\n\n");
    readme_file.write(usage_information + "\n\n");
    readme_file.write("**Contributing:**\n\n");
    readme_file.write(contribution_guidelines + "\n\n");
    readme_file.write("**Tests:**\n\n");
    readme_file.write(test_instructions + "\n\n");
    readme_file.write("**License:**\n\n");
    if (license == "1") {
      readme_file.write("This project is licensed under the MIT license.\n\n");
    } else if (license == "2") {
      readme_file.write("This project is licensed under the Apache 2.0 license.\n\n");
    } else if (license == "3") {
      readme_file.write("This project is licensed under the GNU General Public License v3.0.\n\n");
    }
    readme_file.write("**Questions:**\n\n");
    readme_file.write("If you have any questions, please contact me at " + email_address + " or on GitHub at " + github_username + ".");

    readme_file.close();
  });

// Create a license badge.
const license_badge = "";
if (license == "MIT") {
  license_badge = "[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
} else if (license == "Apache 2.0") {
  license_badge = "[![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
} else if (license == "GNU General Public License v3.0") {
  license_badge = "[![GNU General Public License v3.0](https://img.shields.io/badge/License-GPL%20v3-red.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)"
}

// Add the license badge to the README.md file.
const license_badge_file = fs.open("README.md", "a");
license_badge_file.write("\n\n" + license_badge);
license_badge_file.close();

console.log("The README.md file has been generated.");