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
__404.html__ - Error page
__about.html__ - Explains program and provides credentials of authors
__index.html__ - Full website homepage, displaying map of all permit pages and all possible permit types
__swim-lanes__ - The folder contains the various Solar Permit Map pages (Accessed from navigation bar dropdown) <br>
&nbsp;&nbsp;&nbsp;&nbsp;__exempt-130-permit.html__ - Exempt from DEQ Section 130 Permit <br>
&nbsp;&nbsp;&nbsp;&nbsp;__deq-130-permit.html__ - DEQ Section 130 Permit <br>
&nbsp;&nbsp;&nbsp;&nbsp;__noi-500-kw.html__ - SCC Notice to Construct <br>
&nbsp;&nbsp;&nbsp;&nbsp;__deq-pbr.html__ - DEQ PBR<br>
&nbsp;&nbsp;&nbsp;&nbsp;__cpcn-100-mw.html__ - SCC CPCN for Facilities >100 MW<br>
&nbsp;&nbsp;&nbsp;&nbsp;__cpcn-5-mw.html__ - SCC CPCN for Facilities >5 MW but ≤100 MW <br>
<br>
__inter-landing.html__ - Interconnection home page, describing and providing links to the different permit maps
__inter-pjm-map.html__ - PJM interconnection map
__inter-scc-map.html__ - SCC interconnection map


## Development
1. Clone the Solar Permit repository and create a new branch for development

    __Working with Github in VS Code Tutorial__: [https://docs.djangoproject.com/en/3.1/intro/tutorial01/](https://docs.djangoproject.com/en/3.1/intro/tutorial01/)

2. During development, use the Live Server extension in Visual Studio Code to run HTML files on the local server at [https://localhost8000](https://localhost8000) or [http://127.0.0.1:8000](http://127.0.0.1:8000). Use the local server to check if the changes made to the Solar Permit Map are successful. 

    __Live Server Extension__: [https://ritwickdey.github.io/vscode-live-server/](https://ritwickdey.github.io/vscode-live-server/#:~:text=Open%20a%20HTML%20file%20and,editor%20and%20choose%20the%20options.&text=Press%20F1%20or%20ctrl%2Bshift,Server%20to%20stop%20a%20server.)

 3. Once the changes are as intended, commit and push the changes to the master branch to be automatically deployed to Azure.    

## Future Considerations
The Solar Permit Map requires extensive and tedious CSS modifications for every design change, significantly slowing down the development process. Although Bootstrap containers are helpful, an alternative method is possible for the Solar Permit Map and similar projects, using SVGs. SVGs are a more efficient approach as it allows for easier modifications and customization. Instead of requiring extensive CSS changes, the process will more so become drag-and-drop with minor adjustments to add interactivity and in translating the design to the web application. 

This will allow the changes to the Solar Permit Map to be more sustainable over the long-term. Here is the proposed method that could streamline the design process:

1. Create/Change the process map and customize as needed in Inkscape. Inkscape is an open-source and free illustrator tool. 

    __Inkscape__: [https://inkscape.org/release/inkscape-1.4/windows/64-bit/msi/?redirected=1](https://inkscape.org/release/inkscape-1.4/windows/64-bit/msi/?redirected=1)

2. Export the process map as an `.svg` file.

    __HTML SVG Graphics__: [https://www.w3schools.com/html/html5_svg.asp](https://www.w3schools.com/html/html5_svg.asp)

    __HTML SVG Tag and Inkscape Tutorial__: [https://www.youtube.com/watch?v=qDL54I-ceQM&ab_channel=tutor4u](https://www.youtube.com/watch?v=qDL54I-ceQM&ab_channel=tutor4u)

3. Paste the `.svg` file into the web application.
4. Using the local server, add changes in the `.css` file and interactive features. 
