// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license != ''){ 
        return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`
    } else { ``};
   
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//added to table of contents
function renderLicenseLink(license) {
if (license != '') {
   `[badge](#license)` ;
} else { ``};
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license != ''){
     `  ## License

        ${data.license}`  
    } else {
        ``
    };

   
}

// TODO: Create a function to generate markdown for README
//literal implementation for readme
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}

## Description
 ${data.description}
## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

 ${data.installation}

## Usage

 ${data.usage}

## Credits


 ${data.credits}

## License

 ${data.license}

 ${renderLicenseBadge(data.license)}
## Badges
 ${data.license}

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features
 ${data.feautures}

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.
[How to create a Professional README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

## Questions

`;
}

module.exports = generateMarkdown;
