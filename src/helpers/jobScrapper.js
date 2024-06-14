// // jobScraper.js

// const { chromium } = require('playwright');

// async function scrapeJobDetails(url) {
//   let jobDetails;

//   try {
//     const browser = await chromium.launch({ headless: true });
//     const page = await browser.newPage();

//     await page.goto(url);
//     await page.waitForSelector('h1');

//     // Determine the site based on the URL
//     const site = getSiteFromUrl(url);

//     switch (site) {
//       case 'linkedin':
//         jobDetails = await scrapeLinkedIn(page);
//         break;
//       case 'indeed':
//         jobDetails = await scrapeIndeed(page);
//         break;
//       default:
//         throw new Error('Unsupported job listing site');
//     }

//     // Close the browser
//     await browser.close();
//   } catch (error) {
//     console.error('Error during job scraping:', error);
//   }

//   return jobDetails;
// }

// async function scrapeLinkedIn(page) {
//   return await page.evaluate(() => {
//     const getText = (selector) => {
//       const element = document.querySelector(selector);
//       return element ? element.innerText.trim() : 'n/a';
//     };

//     const getPayScale = () => {
//       const payElement = document.querySelector('.salary');
//       if (payElement) {
//         const payText = payElement.innerText.trim();
//         const payScaleMatch = payText.match(/(\$\d+K?-\$\d+K?)|(\$\d+K?)/);
//         if (payScaleMatch) {
//           return payScaleMatch[0];
//         }
//       }
//       return 'n/a';
//     };

//     const jobTypeMatch = document.body.innerText.match(/(Full-time|Part-time|Contract)/i);
//     const jobType = jobTypeMatch ? jobTypeMatch[0] : 'n/a';

//     const remoteMatch = document.body.innerText.match(/(Remote)/i);
//     const remote = remoteMatch ? 'yes' : 'no';

//     return {
//       companyName: getText('.topcard__org-name-link'),
//       jobTitle: getText('h1'),
//       location: getText('.topcard__flavor--bullet'),
//       jobType,
//       remote,
//       jobSite: 'LinkedIn',
//       payType: document.querySelector('.salary') ? 'salary' : 'n/a',
//       payScale: getPayScale(),
//       payAmount: getPayScale(),
//       notes: getText('.description__text'),
//     };
//   });
// }

// async function scrapeIndeed(page) {
//   return await page.evaluate(() => {
//     const getText = (selector) => {
//       const element = document.querySelector(selector);
//       return element ? element.innerText.trim() : 'n/a';
//     };

//     const getPayScale = () => {
//       const payElement = document.querySelector('.salaryText');
//       if (payElement) {
//         const payText = payElement.innerText.trim();
//         return payText;
//       }
//       return 'n/a';
//     };

//     const jobType = document.querySelector('.jobMetadataHeader-item').textContent.trim();

//     const remote = document.querySelector('.jobMetadataHeader-item').textContent.includes('Remote') ? 'yes' : 'no';

//     return {
//       companyName: getText('.icl-u-lg-mr--sm.icl-u-xs-mr--xs'),
//       jobTitle: getText('h1.icl-u-xs-mb--xs.icl-u-xs-mt--none.jobsearch-JobInfoHeader-title'),
//       location: getText('.jobsearch-InlineCompanyRating.icl-u-xs-mt--xs.jobsearch-CompanyInfoWithoutHeaderImage'),
//       jobType,
//       remote,
//       jobSite: 'Indeed',
//       payType: document.querySelector('.salaryText') ? 'salary' : 'n/a',
//       payScale: getPayScale(),
//       payAmount: getPayScale(),
//       notes: getText('.jobsearch-JobComponent-description')
//     };
//   });
// }

// function getSiteFromUrl(url) {
//   if (url.includes('linkedin.com')) {
//     return 'linkedin';
//   } else if (url.includes('indeed.com')) {
//     return 'indeed';
//   } else {
//     throw new Error('Unsupported job listing site');
//   }
// }

// module.exports = scrapeJobDetails;
