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

  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("Tracking", data);

  return `
# ${data.title}

## Description
${data.description}


## Table of Contents
 * [Tests](#Tests)


## 
${data.installation}

## 
${data.usage}

## 
${renderLicenseBadge(data.license)}

## 
${data.contributing}

## Tests
${data.tests}

## 
${data.questions}
`;
}

module.exports = generateMarkdown;
