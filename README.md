# Solar Permit Map

The Virginia Solar Permitting Map aims to document and bring transparency to the various permitting processes involved in solar facility siting in the hopes of providing a central source of truth that can be referred to when process questions arise, or changes are considered. By illustrating how the various review processes relate to one another and where public engagement may take place, inefficiencies and opportunities to streamline the process may be observed and brought forth.

__Solar Permit Map__: [https://solarpermitmap.coopercenter.org/](https://solarpermitmap.coopercenter.org/)

## Getting Started
### Github
Any changes made to the master branch are automatically pushed into the live server on Azure. Make sure changes are as intended before pushing to the master branch. Commit changes to branches other than master branch then merge when appropriate. Make sure you commit changes frequently to save changes to GitHub.

### Azure
SolTax are hosted on Azure which is a cloud platform by Microsoft. When commit changes are pushed onto the master branch, it is deployed directly to Azure. For Azure login, contact Mary Beth Wetherell at [meh4q@virginia.edu](mailto:meh4q@virginia.edu).

## Structure
__images__ - The folder contains the images used in the Solar Permit Map <br>
__main.js__ - Contains JavaScript functions used to create HTML elements (Modals, navigation bar etc.) that are shared <br>
__style.css__ - Contains styling/positioning for all elements <br>
__staticwebapp.config.json__ - Overrides default 404.html page to instead use 404.html from the repository <br>
__swim-lanes__ - The folder contains the various Solar Permit Map pages (Accessed from navigation bar dropdown) <br>
&nbsp;&nbsp;&nbsp;&nbsp;__exempt-130-permit.html__ - Exempt from DEQ Section 130 Permit <br>
&nbsp;&nbsp;&nbsp;&nbsp;__deq-130-permit.html__ - DEQ Section 130 Permit <br>
&nbsp;&nbsp;&nbsp;&nbsp;__noi-500-kw.html__ - SCC Notice to Construct <br>
&nbsp;&nbsp;&nbsp;&nbsp;__deq-pbr.html__ - DEQ PBR<br>
&nbsp;&nbsp;&nbsp;&nbsp;__cpcn-100-mw.html__ - SCC CPCN for Facilities >100 MW<br>
&nbsp;&nbsp;&nbsp;&nbsp;__cpcn-5-mw.html__ - SCC CPCN for Facilities >5 MW but ≤100 MW <br>

## Development
1. Clone the Solar Permit repository and create a new branch for development

    __Working with Github in VS Code Tutorial__: [https://docs.djangoproject.com/en/3.1/intro/tutorial01/](https://docs.djangoproject.com/en/3.1/intro/tutorial01/)

2. During development, use the Live Server extension in Visual Studio Code to run HTML files on the local server at [https://localhost8000](https://localhost8000) or [http://127.0.0.1:8000](http://127.0.0.1:8000). Use the local server to check if the changes made to the Solar Permit Map are successful. 

    __Live Server Extension__: [https://ritwickdey.github.io/vscode-live-server/](https://ritwickdey.github.io/vscode-live-server/#:~:text=Open%20a%20HTML%20file%20and,editor%20and%20choose%20the%20options.&text=Press%20F1%20or%20ctrl%2Bshift,Server%20to%20stop%20a%20server.)

 3. Once the changes are as intended, commit and push the changes to the master branch to be automatically deployed to Azure.    
