//Function that returns a license badge based on the license passed
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license != 'None'){ 
        return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`
    } else {return``};
   
}

//Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license){  
        return `[license](#license)`}
  ;
}


//verify the type of license based on the license provide a short description
function renderLicenseSection(license) {
    if(license != 'None'){
     return ` This project is licensed under the terms of the ${license} license`  
    } else {
       return ``
    }; 
}
//Create a section in badge section
function renderBadgeSection(license){
    if(license != 'None'){
        return `${license} license`  
       } else {
          return ``
       }; 
}
//Creates a section with github link 
function renderGithubLink(gitHubName)  {
    if(gitHubName != ''){
     return `[Github](https://github.com/${gitHubName})`  
    } else {
        ``
    }; 
}


//function to generate markdown for README
//literal implementation for readme
function generateMarkdown(data) {
  return `
  # ${data.projectTitle} ${renderLicenseBadge(data.license)}

## Description
 ${data.description}
## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- ${renderLicenseLink(data.license)}
- [Badges](#badges)
- [Features](#features)
- [How-to-Contribute](#how-to-contribute)
- [Test](#test)
- [Questions](#questions)

## Installation

 ${data.installation}

## Usage

 ${data.usage}

## Credits


 ${data.credits}

## License

${renderLicenseSection(data.license)}

 
## Badges
 ${renderBadgeSection(data.license)}


## Features
 ${data.features}



## How-to-Contribute

## Tests

## Questions
-${renderGithubLink(data.gitHubName)}

-${data.emailaddy}
`;
}

module.exports = generateMarkdown;
