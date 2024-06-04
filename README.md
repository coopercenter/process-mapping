# Solar Permit Map

The Virginia Solar Permitting Map aims to document and bring transparency to the various permitting processes involved in solar facility siting in the hopes of providing a central source of truth that can be referred to when process questions arise, or changes are considered. By illustrating how the various review processes relate to one another and where public engagement may take place, inefficiencies and opportunities to streamline the process may be observed and brought forth.

__Solar Permit Map__: [https://solarpermitmap.coopercenter.org/](https://solarpermitmap.coopercenter.org/)

## Sections
1. [Getting Started](#getting-started)
2. [Structure](#structure)
3. [Development](#development)

## Getting Started
### Github
Any changes made to the master branch are automatically pushed into the live server on Azure. Make sure changes are as intended before pushing to the master branch. Commit changes to branches other than master branch then merge when appropriate. Make sure you commit changes frequently to save changes to GitHub.

### Azure
SolTax are hosted on Azure which is a cloud computing platform run by Microsoft. When commit changes are pushed onto the master branch, it is deployed directly to Azure. For Azure login information, contact Mary Beth Wetherell at [meh4q@virginia.edu](mailto:meh4q@virginia.edu).

## Structure
__images__ - The folder contains the images used in the Solar Permit Map <br>
__main.js__ - Contains JavaScript functions used to create HTML elements (Modals, navigation bar etc.) that are shared
__staticwebapp.config.json__ - Overrides default 404.html page to instead use 404.html from the repository
__swim-lanes__ - The folder contains the various Solar Permit Map pages (Accessed from navigation bar dropdown) <br>
&nbsp;&nbsp;&nbsp;&nbsp;__exempt-130-permit.html__ - Exempt from DEQ Section 130 Permit <br>
&nbsp;&nbsp;&nbsp;&nbsp;__deq-130-permit.html__ - DEQ Section 130 Permit <br>
&nbsp;&nbsp;&nbsp;&nbsp;__noi-500-kw.html__ - SCC Notice to Construct <br>
&nbsp;&nbsp;&nbsp;&nbsp;__deq-pbr.html__ - DEQ PBR<br>
&nbsp;&nbsp;&nbsp;&nbsp;__cpcn-100-mw.html__ - SCC CPCN for Facilities >100 MW<br>
&nbsp;&nbsp;&nbsp;&nbsp;__cpcn-5-mw.html__ - SCC CPCN for Facilities >5 MW but ≤100 MW <br>
