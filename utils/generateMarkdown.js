// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
  if ("Apache License 2.0" === license) {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

  }

  else if ("GNU GPLv3" === license) {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
 }

 else if ("MIT" === license) {
  return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
 }

 else if ("ISC" === license) {
  return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
 }

  else {
    return '';
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


  return `
# ${data.title}

## Description
${data.description}


## Table of Contents
* [Installation](#Installation) 
* [Usage](#Usage)
* [License](#License)
* [Tests](#Tests)


## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
