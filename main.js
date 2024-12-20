class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <title>Solar Permit Map</title>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <span class="navbar-logo"> <h2> <a style="text-decoration: none; color: black;" href="../index.html">The Virginia Solar Permit Map</a></h2> 
                <div class="collapse navbar-collapse">
                    <span class="d-md-block">An Interactive Map Detailing Permits Required for Solar Permits in Virginia</span>
                </div>
            </span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav h5">
                    <li class="nav-item px-2">
                        <a href= "../index.html" class="nav-link"> Home </a>
                    </li>
        
        
                    <li class="nav-item dropdown px-2">
                    <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Interconnection</a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a href="inter-landing.html" class="dropdown-item">Interconnections Home</a></li>
                        <li><a href="inter-map.html" class="dropdown-item">SCC</a></li>
                        <li><a href="inter-pjm.html" class="dropdown-item">PJM</a></li>

                    </ul>
                </li>

                <li class="nav-item dropdown px-2">
                    <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"> Permit Maps </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                                <a href="swim-lanes/exempt-130-permit.html" class="dropdown-item">
                                    Exemption from DEQ Section 130 Permit
                                </a>
                            </li>
    
                            <li><hr class="dropdown-divider"></li>
    
                            <li>
                                <a href="swim-lanes/deq-130-permit.html" class="dropdown-item">
                                    DEQ Section 130 Permit
                                </a>
                            </li>
    
                            <li><hr class="dropdown-divider"></li>
                
                            <li>
                                <a href="swim-lanes/noi-500-kw.html" class="dropdown-item">
                                    SCC NOI to Construct an EGF with Rated Capacity of &le;5 MW
                                </a>
                            </li>
    
                            <li><hr class="dropdown-divider"></li>
                
                            <li>
                                <a href="swim-lanes/deq-pbr.html" class="dropdown-item">
                                    DEQ Permit by Rule for Small Solar Energy Project 
                                </a>
                            </li>
    
                            <li><hr class="dropdown-divider"></li>
                
                            <li>
                                <a href="swim-lanes/cpcn-5-mw.html" class="dropdown-item">
                                    SCC CPCN for Facilities &gt;5 MW to &le;100 MW
                                </a>
                            </li>
    
                            <li><hr class="dropdown-divider"></li>
                
                            <li>
                                <a href="swim-lanes/cpcn-100-mw.html" class="dropdown-item">
                                    SCC CPCN for Facilities &gt100 MW 
                                </a>
                            </li>

                           

                        </ul>
                    </li>
                </ul>
                <div class="off-screen-menu">
                                        <div class="menu-header">
                                            <h2>Menu</h2>
                                        </div>
                                        <div class="menu-content">
                                            <a href="../about.html" class="btn btn-light">About</a>
                                            <button class="btn btn-light" data-bs-toggle="modal" data-bs-target="#abbrev-modal">Abbreviations</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        `;

                        // Toggle off-screen menu and navbar visibility
                        const hamMenu = this.querySelector('.ham-menu');
                        const navbarNav = this.querySelector('#navbarNav');
                        const offScreenMenu = this.querySelector('.off-screen-menu');

                        hamMenu.addEventListener('click', () => {
                            // Toggle active class for showing/hiding the menu
                            hamMenu.classList.toggle('active');
                            navbarNav.classList.toggle('show'); // Bootstrap's `show` class handles collapsible elements
                            offScreenMenu.classList.toggle('active'); // Custom class for off-screen menu visibility
                        });
        }
    }
            


class SwimLaneNavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <title>Solar Permit Map</title>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <span class="navbar-logo"> <h2> <a style="text-decoration: none; color: black;" href="../index.html">The Virginia Solar Permit Map</a>
                    </h2> 
                        <div class="collapse navbar-collapse">
                            <span class="d-md-block">An Interactive Map Detailing Permits Required for Solar Permits in Virginia</span>
                        </div>
                    </span

                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav h5">
                        <li class="nav-item px-2">
                            <a href="../index.html" class="nav-link"> Home </a>
                        </li>
            
                        <li class="nav-item dropdown px-2">
                        <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Interconnection</a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a href="../inter-landing.html" class="dropdown-item">Interconnections Home</a></li>
                            <li><a href="../inter-map.html" class="dropdown-item">SCC</a></li>
                            <li><a href="../inter-pjm.html" class="dropdown-item">PJM</a></li>
        
                        </ul>
                    </li>
            
                        <li class="nav-item dropdown px-2">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"> Permit Maps </a>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <a href="exempt-130-permit.html" class="dropdown-item">
                                            Exemption from DEQ Section 130 Permit
                                        </a>
                                    </li>
            
                                    <li><hr class="dropdown-divider"></li>
            
                                    <li>
                                        <a href="deq-130-permit.html" class="dropdown-item">
                                            DEQ Section 130 Permit
                                        </a>
                                    </li>
            
                                    <li><hr class="dropdown-divider"></li>
                        
                                    <li>
                                        <a href="noi-500-kw.html" class="dropdown-item">
                                            SCC NOI to Construct an EGF with Rated Capacity of &le;5 MW
                                        </a>
                                    </li>
            
                                    <li><hr class="dropdown-divider"></li>
                        
                                    <li>
                                        <a href="deq-pbr.html" class="dropdown-item">
                                            DEQ Permit by Rule for Small Solar Energy Project 
                                        </a>
                                    </li>
            
                                    <li><hr class="dropdown-divider"></li>
                        
                                    <li>
                                        <a href="cpcn-5-mw.html" class="dropdown-item">
                                            SCC CPCN for Facilities &gt;5 MW to &le;100 MW
                                        </a>
                                    </li>
            
                                    <li><hr class="dropdown-divider"></li>
                        
                                    <li>
                                        <a href="cpcn-100-mw.html" class="dropdown-item">
                                            SCC CPCN for Facilities &gt100 MW 
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div class="off-screen-menu">
                        <div class="menu-header">
                            <h2>Menu</h2>
                        </div>
                        <div class="menu-content">
                            <ul>
                                <a href="../about.html" class="btn btn-light">About</a></li>
                                <button class="btn btn-light" data-bs-toggle="modal" data-bs-target="#abbrev-modal">Abbreviations</button></li>
                            </ul>
                        </div>
                    </div>
                                <menu1-bar>
                                    <div class="ham-menu">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </menu1-bar>
                    </div>
                </div>
            </nav>
            `;
            const hamMenu = document.querySelector('.ham-menu');
            const offScreenMenu = document.querySelector('.off-screen-menu');
    
            hamMenu.addEventListener('click', () => {
                hamMenu.classList.toggle('active');
                offScreenMenu.classList.toggle('active');
            });
    }
}

class Abbrev extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="modal fade" id="abbrev-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="title">  Abbreviations </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                <table class="table">
                    <thead>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row"> CBPs </th>
                        <td> Chesapeake Bay Preservation Areas </td>
                    </tr>

                    <tr>
                        <th scope="row"> CPCN </th>
                        <td> Certificate of Public Convenience and Necessity </td>
                    </tr>

                    <tr>
                        <th scope="row"> CWA </th>
                        <td> Clean Water Act </td>
                    </tr>

                    <tr>
                        <th scope="row"> CMP </th>
                        <td> Coastal Management Program </td>
                    </tr>

                    <tr>
                        <th scope="row"> CZMA </th>
                        <td> Coastal Zone Management Act </td>
                    </tr>

                    <tr>
                        <th scope="row"> DCR </th>
                        <td> Department of Conservation and Recreation </td>
                    </tr>

                    <tr>
                        <th scope="row"> DEQ </th>
                        <td> Virginia Department of Environmental Quality </td>
                    </tr>

                    <tr>
                        <th scope="row"> DHR </th>
                        <td> Department of Historic Resources </td>
                    </tr>

                    <tr>
                        <th scope="row"> Distr. </th>
                        <td> Distribution </td>
                    </tr>

                    <tr>
                        <th scope="row"> DOT </th>
                        <td> Department of Transportation </td>
                    </tr>

                    <tr>
                        <th scope="row"> DWR </th>
                        <td> Department of Wildlife Resources </td>
                    </tr>

                    <tr>
                        <th scope="row"> E&S </th>
                        <td> Erosion and Sediment </td>
                    </tr>
                    
                    <tr>
                        <th scope="row"> EGF </th>
                        <td> Electric Generating Facility </td>
                    </tr>

                    <tr>
                        <th scope="row"> Env. </th>
                        <td> Environment </td>
                    </tr>

                    <tr>
                        <th scope="row"> FAA </th>
                        <td> Federal Aviation Administration </td>
                    </tr>

                    <tr>
                        <th scope="row"> FERC </th>
                        <td> Federal Energy Regulatory Commission </td>
                    </tr>

                    <tr>
                        <th scope="row"> FWS </th>
                        <td> United States Fish and Wildlife Service </td>
                    </tr>

                    <tr>
                        <th scope="row"> HCP </th>
                        <td> Habitat Conservation Plan </td>
                    </tr>

                    <tr>
                        <th scope="row"> IC </th>
                        <td> Interconnection Customer</td>
                    </tr>
                    
                    <tr>
                        <th scope="row"> Inter. </th>
                        <td> Interconnection </td>
                    </tr>

                    <tr>
                        <th scope="row"> ISA </th>
                        <td> Interconnection Service Agreement </td>
                    </tr>

                    <tr>
                        <th scope="row"> JD </th>
                        <td> Jurisdictional Delineation </td>
                    </tr>

                    <tr>
                        <th scope="row"> JPA </th>
                        <td> Joint Permit Application </td>
                    </tr>

                    <tr>
                        <th scope="row"> kW </th>
                        <td> Kilowatt </td>
                    </tr>

                    <tr>
                        <th scope="row"> kV </th>
                        <td> Kilovolt </td>
                    </tr>

                    <tr>
                        <th scope="row"> Lvl. </th>
                        <td> Level </td>
                    </tr>

                    <tr>
                        <th scope="row"> MW </th>
                        <td> Megawatt </td>
                    </tr>

                    <tr>
                        <th scope="row"> NOI </th>
                        <td> Notice of Intent </td>
                    </tr>

                    <tr>
                        <th scope="row"> NERC </th>
                        <td> North American Electric Reliability Commission </td>
                    </tr>

                    <tr>
                        <th scope="row"> PBR </th>
                        <td> Permit By Rule </td>
                    </tr>

                    <tr>
                        <th scope="row"> PJM </th>
                        <td> Pennsylvannia-New Jersey-Maryland Interconnection </td>
                    </tr>

                    <tr>
                        <th scope="row"> PV </th>
                        <td> Photovoltaic </td>
                    </tr>

                    <tr>
                        <th scope="row"> RRS </th>
                        <td> Regulatory Request System (USACE) </td>
                    </tr>

                    <tr>
                        <th scope="row"> SCC </th>
                        <td> State Corporation Commission </td>
                    </tr>

                    <tr>
                        <th scope="row"> SGF </th>
                        <td> Small Generating Facility </td>
                    </tr>

                    <tr>
                        <th scope="row"> SGIA </th>
                        <td> Small Generator Interconnection Agreement </td>
                    </tr>

                    <tr>
                        <th scope="row"> SGIP </th>
                        <td> FERC Small Generator Interconnection Procedures </td>
                    </tr>

                    <tr>
                        <th scope="row"> Sm. Inter. </th>
                        <td> Small Interconnection </td>
                    </tr>

                    <tr>
                        <th scope="row"> SWPPP </th>
                        <td> Stormwater Pollution Prevention Plan </td>
                    </tr>

                    <tr>
                        <th scope="row"> Trans. </th>
                        <td> Transmission </td>
                    </tr>

                    <tr>
                        <th scope="row"> USACE </th>
                        <td> United States Army Corps of Engineers </td>
                    </tr>

                    <tr>
                        <th scope="row"> VMRC </th>
                        <td> Virginia Marine Resources Commission </td>
                    </tr>

                    <tr>
                        <th scope="row"> VPDES </th>
                        <td> Virginia Pollutant Discharge Elimination System </td>
                    </tr>

                    <tr>
                        <th scope="row"> VSMP </th>
                        <td> Virginia Stormwater Management Authority </td>
                    </tr>

                    <tr>
                        <th scope="row"> VWP </th>
                        <td> Virginia Water Protection </td>
                    </tr>

                    <tr>
                        <th scope="row"> WMPA </th>
                        <td> Wholesale Market Participation Agreement </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        `;
    }
}

class SwimFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer-test class="bg-light">
                <img src="../images/VAEnergyLogo.png" class="va-energy-logo"> <img src="../images/VTLogo.png" class="vt-logo">
            </footer-test>
        `;
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer-test class="bg-light">
                <img src="images/VAEnergyLogo.png" class="va-energy-logo"> <img src="images/VTLogo.png" class="vt-logo">
            </footer-test>
        `;
    }
}

class FederalReview extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="modal fade" id="fed-comp-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="title"> Federal Compliance/Permitting </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            Federal consistency is compliance with federal laws. After local and state permitting, the developer returns to USACE to initiate federal compliance and permitting. This involves obtaining the necessary permits to meet the reqirements of Section 401 of the Clean Water Act, Section 404 of the Clean Water Act, and the CZMA, among others.
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="fed-aviation-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="title"> Federal Aviation Administration</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            Per the <a href="https://oeaaa.faa.gov/oeaaa/external/gisTools/gisAction.jsp?action=showNoNoticeRequiredToolForm" target="_blank">FAA</a>,“The requirements for filing with the Federal Aviation Administration for proposed structures vary based on a number of factors: height, proximity to an airport, location, and frequencies emitted from the structure, etc. For more details, please reference <a href="https://www.ecfr.gov/current/title-14/chapter-I/subchapter-E/part-77" target="_blank">CFR Title 14 Part 77.9</a>.” <br><br>

                            Use the <a href="https://oeaaa.faa.gov/oeaaa/external/gisTools/gisAction.jsp?action=showNoNoticeRequiredToolForm" target="_blank">FAA Notice Criteria Tool</a> as a quick first step to determine whether your proposed project is required to file with the FAA. If filing with the FAA is required, it must be completed at least 45 days prior to construction.
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="army-corps-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="title"> United States Army Corps of Engineers </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            If the project is subject to the provisions of the Clean Water Act and/or the Coastal Zone Management Act, the associated permit(s) must be obtained from USACE.
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="submit-jpa-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="title"> Submit JPA for Compliance with Section 401/404 </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            The JPA allows developers to simultaneously submit requirements for Sections 401 and 404 of the Clean Water Act. Submit the Joint Permit Application (JPA) to fulfill requirements for federal consistency. VMRC receives and registers the submission, and routes it to USACE. *Note that as of May 2024, this process is undergoing changes. The new process will require USACE permit applications to be submitted through the <a href="https://rrs.usace.army.mil/rrs" target="_blank">Regulatory Request System</a>. This will route the application to necessary agencies and individuals with greater efficiency. <br><br>

                            The associated permit is issued under 22-SPGP-RCIR. Follow the <a href="https://ris.dls.virginia.gov/uploads/9VAC25/forms/33ffb005797~5t.pdf" target="_blank">Joint Permit Application (JPA) Process</a>. The JPA is a single form used to apply for separate permits from the USACE, the VA DEQ, the Virginia Marine Resources Commission (VA MRC), and/or Local Wetlands Boards. Permitting purposes involve tidal and/or non-tidal water, tidal and/or non-tidal wetlands, and/or dune/beach resources – including, but not limited to, construction, dredging, filling, or excavation. Contact information can be found on the linked application materials. <br><br>

                            <div class="card" style="width: 760px;">
                                <div class="card-body">
                                    <h6 class="card-title">Section 401</h6>
                                    <p class="card-text">
                                        In Virginia, local jursidction falls under VWP permit regulations (As laid out in <a href="https://law.lis.virginia.gov/vacode/62.1-44.15:20/" target="_blank">§62.1-44.15:20</a> of the Code of Virginia). The Section 401 checklist is submitted on the JPA application via the DEQ. VWP then executes the 401, which is later delegated to the DEQ to review. The 401 is linked to the Coastal Zone Management Act (CZMA). In certain counties, the CZMA process will be triggered, otherwise CZMA reviews are included in the state 401 permit. Check with your locality to see whether your area falls under a CZMA review area. Note that there may be special conditions on the 401, dependent on project siting and other specifics. This varies project to project and will be stipulated by USACE during the review process.
                                    </p>
                                </div>
                            </div>

                            <br>
                            
                            <div class="card" style="width: 760px;">
                                <div class="card-body">
                                    <h6 class="card-title">Section 404</h6>
                                    <p class="card-text">
                                        Section 404 of the <a href="https://www.epa.gov/cwa-404/permit-program-under-cwa-section-404" target="_blank">CWA</a> requires that projects which are in or affect navigable bodies of water obtain a Section 404 Permit before dredged or fill material may be discharged into waters of the U.S. The Section 404 permit determines which nationwide permits the proposed project is eligible for (required). Regional conditions vary by permit. In Virginia, local jursidction falls under VWP permit regulations (As laid out in <a href="https://law.lis.virginia.gov/vacode/62.1-44.15:20/" target="_blank">§62.1-44.15:20</a> of the Code of Virginia).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="juris-delin-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="title"> Jurisdictional Delineation </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            During the due diligence process, the project developer should request a JD from USACE. This process learns and delineates jurisdictional lands. That information is then used by the project developer and associated parties to develop their local and state permits. Information is also available for local and state permit review. Jurisdictional Delineation is a prerequisite to the federal USACE permit(s) of federal consistency.<br><br>

                            Note: It is recommended that the JD be completed during the due diligence process. However, it is possible to do the JD as part of the federal compliance process after local and state permitting.
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="fish-wildlife-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="title"> United States Fish and Wildlife Service </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            If the project is subject to any of the following requirements, the associated permit(s) must be obtained from the U.S. Fish and Wildlife Service (Service), with responsibility delegated to the VA DEQ.
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="habitat-conservation-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="title"> Habitat Conservation Plan </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            The Endangered Species Act provides for the protection of endangered and threatened species of wildlife and plants. When non-Federal parties plan to interact with ecosystems containing such species, it is required by <a href='https://www.fws.gov/laws/endangered-species-act/section-10' target="_blank">Section 10(a)(2)(A)</a> of the Act to develop a Habitat Conservation Plan (HCP). HCPs must meet the permit issuance criteria of section <a href="https://www.fws.gov/laws/endangered-species-act/section-10" target="_blank">10(a)(2)(B)</a> of the Endangered Species Act. HCPs can also include conservation measures for vulnerable plant and animal species that are not listed federally as endangered or threatened.

                            <br><br> The habitat conservation plan associated with the permit ensures that the effects of the authorized incidental take are adequately minimized and mitigated.
                            
                            <br><br>According to the <a href='https://www.fws.gov/service/habitat-conservation-plans' target="_blank">Service</a>:
                            "A Habitat Conservation Plan (HCP) is a planning document designed to accommodate economic development to the extent possible by authorizing the limited and unintentional take of listed species when it occurs incidental to otherwise lawful activities. The plan is designed not only to help landowners and communities but also to provide long-term benefits to species and their habitats. HCPs describe the anticipated effects of the proposed taking, how those impacts will be minimized or mitigated, and how the conservation measures included in the plan will be funded."
                            
                            <br><br> <i>Before drafting the HCP, it is strongly recommended to consult with the local field office of the Service to determine whether the HCP meets the respective policy and incidental take permit issuance criteria. Find your local field office <a href='https://www.fws.gov/our-facilities?state_name=%5B%22Virginia%22%5D' target="_blank">here<a>. 
                            Check for existing HCPs that individual landowners can join – programmatic HCPs – before drafting your own. Programmatic HCPs are often county- or even region-wide.</i>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="new-incidental-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="title"> New Incidental Take Permit </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            An incidental take permit is required if otherwise lawful activities may unintentionally result in any "take" of endangered or threatened animal species. A completed Habitat Conservation Plan (HCP) must accompany any application for an incidental take permit. If the Service finds that an HCP meets the Endangered Species Act section <a href="https://www.fws.gov/laws/endangered-species-act/section-10" target="_blank">10(a)(1)(B)</a> incidental take permit issuance criteria, they will unlock the incidental take permit application. The applicant must then submit the completed incidental take permit (with the associated HCP) to the Service.

                            <br><br>See <a href="https://www.fws.gov/service/habitat-conservation-plans" target="_blank">here</a> for further information on HCPs and associated incidental take permits.
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="esa-section-7" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="title"> ESA Section 7 (Federal Agencies)</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            An incidental take permit is required if otherwise lawful activities may unintentionally result in any "take" of endangered or threatened animal species. A completed Habitat Conservation Plan (HCP) must accompany any application for an incidental take permit. If the Service finds that an HCP meets the Endangered Species Act section <a href="https://www.fws.gov/laws/endangered-species-act/section-10" target="_blank">10(a)(1)(B)</a> incidental take permit issuance criteria, they will unlock the incidental take permit application. The applicant must then submit the completed incidental take permit (with the associated HCP) to the Service.

                            <br><br>See <a href="https://www.fws.gov/service/habitat-conservation-plans" target="_blank">here</a> for further information on HCPs and associated incidental take permits.
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

class SwimLane extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="txt operational"> Operational Start Date </div>

            <div class="lane localities"> Localities </div>
            <div class="lane deq-lane"> DEQ </div>
            <div class="lane scc-lane"> SCC </div>
            <div class="lane federal"> Federal Reviews </div>

            <div class="line line-17"></div>
            <div class="line line-21"></div>
            <div class="line line-22"></div>
            <div class="arrow-head"> &#9658 </div>

            <abbrev-list></abbrev-list>

            <div class="btn btn-light reviews army-corps" data-bs-toggle="modal" data-bs-target="#army-corps-modal"> <b>United States Army Corps of Engineers</b> </div>
            <button type="button" class="btn btn-light btn-sm reviews btn-1" data-bs-toggle="modal" data-bs-target="#certification-modal">
              Clean Water Act, Section 401 Certification
            </button>
            <button type="button" class="btn btn-light btn-sm reviews btn-2" data-bs-toggle="modal" data-bs-target="#section-permit-modal">
              Clean Water Act, Section 404 Permit
            </button>

            <div class="rbtn btn-light reviews fish-wildlife" data-bs-toggle="modal" data-bs-target="#fish-wildlife-modal"> <b>United States Fish and Wildlife Service</b> </div>
            <button type="button" class="btn btn-light btn-sm reviews btn-3" data-bs-toggle="modal" data-bs-target="#habitat-conservation-modal">
              Habitat Conservation Plan
            </button>
            <button type="button" class="btn btn-light btn-sm reviews btn-4" data-bs-toggle="modal" data-bs-target="#new-incidental-modal">
              New Incidental Take Permit
            </button>

            <army-corps>
                <div class="modal fade" id="army-corps-modal" tabindex="-1" role="dialog">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="title"> United States Army Corps of Engineers </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            <div class="modal-body">
                                If the project is subject to any of the following requirements, the associated permit(s) must be obtained from the U.S. 
                                Army Corps of Engineers (USACE), with responsibility delegated to the VA DEQ. Further information on VA DEQ responsibilities can 
                                be found <a href="https://www.deq.virginia.gov/laws-regulations/water" target="_blank">here</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </army-corps>

            <div class="modal fade" id="section-permit-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="title"> Clean Water Act, Section 404 Permit </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            Section 404 of the <a href='https://www.epa.gov/cwa-404/permit-program-under-cwa-section-404' target="_blank">Clean Water Act</a> requires that projects which are in or affect navigable bodies of water obtain a Section 404 Permit before dredged or fill material may be discharged into waters of the U.S. In Virginia, local jursidction falls under the Virginia Water Protection (VWP) permit regulations.
                            <br> <br> According to the DEQ, "Authority to protect wetlands and streams and administer Virginia Water Protection (VWP) permit regulations is given by <a href='https://law.lis.virginia.gov/vacode/62.1-44.15:20/' target="_blank">§62.1-44.15:20</a> of the Code of Virginia. The over-arching regulation for the VWP permit program is found in <a href=' https://law.lis.virginia.gov/admincode/title9/agency25/chapter210/' target="_blank">9VAC25-210</a>.
                            <br> <br> The associated permit is issued under 22-SPGP-RCIR. Follow the <a href='https://ris.dls.virginia.gov/uploads/9VAC25/forms/33ffb005797~5t.pdf' target="_blank">Joint Permit Application (JPA) Process</a>. The JPA is a single form used to apply for separate permits from the USACE, the VA DEQ, the Virginia Marine Resources Commission (VA MRC), and/or Local Wetlands Boards. Permitting purposes involve tidal and/or non-tidal water, tidal and/or non-tidal
                            wetlands, and/or dune/beach resources – including, but not limited to,
                            construction, dredging, filling, or excavation. Contact information can be found on the linked application materials.
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="certification-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="title"> Clean Water Act, Section 401 Certification </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            Section 401 of the <a href='https://www.epa.gov/cwa-401/overview-cwa-section-401-certification' target="_blank">Clean Water Act (CWA)</a> provides states and authorized tribes with an important tool to help protect the water quality of federally regulated waters within their borders, in collaboration with federal agencies. Section 401 of the CWA requires that, for any federally licensed or permitted project that may result in a discharge into waters of the United States, a water quality certification be issued to ensure that the discharge complies with the applicable water quality requirements. In Virginia, local jursidction falls under the Virginia Water Protection (VWP) permit regulations. See the VA DEQ permitting process for further requirements and notices or public hearings.

                            <br><br>According to the DEQ, "Authority to protect wetlands and streams and administer Virginia Water Protection (VWP) permit regulations is given by <a href='https://law.lis.virginia.gov/vacode/62.1-44.15:20/' target="_blank">§62.1-44.15:20</a> of the Code of Virginia. The over-arching regulation for the VWP permit program is found in <a href='https://law.lis.virginia.gov/admincode/title9/agency25/chapter210/' target="_blank">9VAC25-210</a>".
                            
                            <br><br>The associated permit is issued under 22-SPGP-RCIR. Follow the <a href='https://ris.dls.virginia.gov/uploads/9VAC25/forms/33ffb005797~5t.pdf' target="_blank">Joint Permit Application (JPA) Process</a>. Contact information can be found on the linked application materials. The JPA is a single form used to apply for separate permits from the USACE, the VA DEQ, the Virginia Marine Resources Commission (VA MRC), and/or Local Wetlands Boards. Permitting purposes involve tidal and/or non-tidal water, tidal and/or non-tidal
                            wetlands, and/or dune/beach resources – including, but not limited to,
                            construction, dredging, filling, or excavation. Contact information can be found on the linked application materials.
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="fish-wildlife-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="title"> United States Fish and Wildlife Service </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            If the project is subject to any of the following requirements, the associated permit(s) must be obtained from the U.S. Fish and Wildlife Service (Service), with responsibility delegated to the VA DEQ.
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="transfer-permit-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="title"> Transfer, Partial Transfer, or Succession of an Existing Valid Incidental Take Permit </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            When the ownership of a project changes, the new owner must obtain a transfer of an existing Incidental Take Permit. See the VA DEQ permitting process for permit requirements and notices or public hearings.

                            <br><br><b>Prerequisite Permit(s)</b>: New Incidental Take Permit 
                            
                            <br><b>Contact Name</b>: Susan Tripp, Small Renewable Energy PBR Program Guidance & Regulation Coordinator 
                            <br><b>Contact Emails</b>: permitsR5ES@fws.gov (<i>Federal</i>), susan.tripp@deq.virginia.gov (<i>State</i>)
                            <br><b>Permit Link</b>: See the VA DEQ for State Permit Process, <a href='https://fwsepermitstest.servicenowservices.com/fwsid=fws_kb_view&sys_id=adc55dfd1b1f50101f45dbdbe54bcbb5' target="_blank">Federal Permit Process</a> 
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="renewal-permit-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="title"> Renewal or Amendment of an Existing Valid Incidental Take Permit </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            This permit will grant the renewal or amendment of an existing Incidental Take Permit. See the VA DEQ permitting process for permit requirements and notices or public hearings.

                            <br><br><b>Prerequisite Permit(s)</b>: New Incidental Take Permit 
                            
                            <br><b>Contact Name</b>: Susan Tripp, Small Renewable Energy PBR Program Guidance & Regulation Coordinator 
                            <br><b>Contact Emails</b>: permitsR5ES@fws.gov (<i>Federal</i>), susan.tripp@deq.virginia.gov (<i>State</i>)
                            <br><b>Permit Link</b>: See the VA DEQ for State Permit Process, <a href='https://fwsepermitstest.servicenowservices.com/fwsid=fws_kb_view&sys_id=adc55dfd1b1f50101f45dbdbe54bcbb5' target="_blank">Federal Permit Process</a> 
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="habitat-conservation-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="title"> Habitat Conservation Plan </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            The Endangered Species Act provides for the protection of endangered and threatened species of wildlife and plants. When non-Federal parties plan to interact with ecosystems containing such species, it is required by <a href='https://www.fws.gov/laws/endangered-species-act/section-10' target="_blank">Section 10(a)(2)(A)</a> of the Act to develop a Habitat Conservation Plan (HCP). HCPs must meet the permit issuance criteria of section <a href="https://www.fws.gov/laws/endangered-species-act/section-10" target="_blank">10(a)(2)(B)</a> of the Endangered Species Act. HCPs can also include conservation measures for vulnerable plant and animal species that are not listed federally as endangered or threatened.

                            <br><br> The habitat conservation plan associated with the permit ensures that the effects of the authorized incidental take are adequately minimized and mitigated.
                            
                            <br><br>According to the <a href='https://www.fws.gov/service/habitat-conservation-plans' target="_blank">Service</a>:
                            "A Habitat Conservation Plan (HCP) is a planning document designed to accommodate economic development to the extent possible by authorizing the limited and unintentional take of listed species when it occurs incidental to otherwise lawful activities. The plan is designed not only to help landowners and communities but also to provide long-term benefits to species and their habitats. HCPs describe the anticipated effects of the proposed taking, how those impacts will be minimized or mitigated, and how the conservation measures included in the plan will be funded."
                            
                            <br><br> <i>Before drafting the HCP, it is strongly recommended to consult with the local field office of the Service to determine whether the HCP meets the respective policy and incidental take permit issuance criteria. Find your local field office <a href='https://www.fws.gov/our-facilities?state_name=%5B%22Virginia%22%5D' target="_blank">here<a>. 
                            Check for existing HCPs that individual landowners can join – programmatic HCPs – before drafting your own. Programmatic HCPs are often county- or even region-wide.</i>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="new-incidental-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="title"> New Incidental Take Permit </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            An incidental take permit is required if otherwise lawful activities may unintentionally result in any "take" of endangered or threatened animal species. A completed Habitat Conservation Plan (HCP) must accompany any application for an incidental take permit. If the Service finds that an HCP meets the Endangered Species Act section <a href=’https://www.fws.gov/laws/endangered-species-act/section-10’ target="_blank">10(a)(1)(B)</a> incidental take permit issuance criteria, they will unlock the incidental take permit application. The applicant must then submit the completed incidental take permit (with the associated HCP) to the Service.

                            <br><br>See <a href=’https://www.fws.gov/service/habitat-conservation-plans’ target="_blank">here</a> for further information on HCPs and associated incidental take permits.
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

class DEQ extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <div class="modal fade" id="noi-130-permit" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title"> Notice of Intent for Solar Energy Project ("De Minimis" Section 130 Projects)</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        This is the second of the two permit requirements, as laid out in <a href="https://law.lis.virginia.gov/admincode/title9/agency15/chapter60/section130/" target="_blank">9VAC15-60-130</a>. "The owner or operator of a small solar energy project with either a rated capacity greater than 500 kilowatts and less than or equal to five megawatts or a disturbance zone greater than two acres and less than or equal to 10 acres shall notify the department."
                        Submit the NOI using the template <a href="https://www.deq.virginia.gov/home/showpublisheddocument/4677/637475305763630000" target="_blank">here</a>.

                        <br><br>For questions and further information, contact the DEQ's Small Renewable Energy PBR Program Guidance & Regulation Coordinator.
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="noi-early" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title"> <i>Best Practice</i>: Submit NOI as early as possible</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        As soon as the project is determined to be "practicable" (when the applicant believes that it will pass local requirements), the applicant should submit the NOI for their project to the DEQ.
                    </div>
                </div>
            </div>
        </div>


        <div class="modal fade" id="deq-plans" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title"> <i>Best Practice</i>: Submit NOI as early as possible and DEQ coordinates pre-application meeting</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        As soon as the project is determined to be "practicable" (When the applicant believes that it will pass local requirements), the applicant should submit the NOI for their project to the DEQ.<br><br>

                        Per the DEQ, it is best practice to host a pre-application meeting for any proposed project. For the PBR, all requirements must be completed upon submittal. These pre-application meeting and the requested components allow this to hold true.<br><br>

                        Before this meeting, project developers should have their concept plan ready, have completed their desktop studies, and may draft a mitigation plan. When these materials are ready, developers should send their concept plan map to the DEQ, from which DEQ will coordinate a pre-application meeting. The DEQ co-ordinates with the sister agencies and reviews this information together. The idea is to have all the studies and required information for the PBR completed before submittal of the PBR, as submittal is essentially just submitting to show that these tasks are completed, not doing the tasks then.
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="local-certify" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title"> <i>Best Practice</i>: Informal Sister Agency Review process before local certification</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        It is encouraged that the Informal Sister Agency Review process begins before the local certification process is complete. 
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="permit-issuance" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Issuance of Section 130 Permit</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        Upon completion of all application requirements and required modifications, the applicant will be issued a permit by the DEQ granting them the authority to contruct and operate a small solar PV facility under the Section 130 criteria.
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="stormwater-permit" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Apply for General Construction Stormwater Permit</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                    The VPDES requires that the construction activity operator obtaining the permit develop and implement a site specific Stormwater Pollution Prevention Plan (SWPPP). The SWPPP must be prepared prior to submitting a registration statement for permit to the Virginia Stormwater Management Program (VSMP) Authority or VA DEQ. The SWPPP outlines the steps and techniques to reduce pollutants in the stormwater runoff from the construction site that the operator will take to comply with the terms and conditions of the permit, including water quality and quantity requirements in the VSMP permit regulations. See <a href="https://www.deq.virginia.gov/permits/water/stormwater-construction" target="_blank">here</a> for further information.

                    <br><br>Courtesy reviews by DWR, DCR, and DHR are necessary prior to applying for this permit. Note that the DHR permit must be submitted no less than 30 days prior to the start date of the project.<br><br>

                    Timeline: The stormwater review process is most often initiated after the PBR is issued. The PBR includes a list of all other required permits, to which the developer must sign that they will receive them. 
                    
                    <br><br><i>Projects may be subject to either local or VA DEQ VSMP authority. Check to see which is the case at the project location. The VA DEQ VSMP permit is only for those directly regulated under the VA DEQ authority. If local governments have the permitting authority, regulations for local SWPPP may differ from VA DEQ SWPPP. If the project is within the Chesapeake Bay Preservation Areas (CBPs), localities are required to have local regulations to protect water quality for the Chesapeake Bay.</i>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="stormwater-issuance" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Issuance of General Construction Stormwater Permit</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        If the project meets the permit requirements and pays the appropriate fees, the applicant will be granted a General Construction Stormwater Permit from the applicable authority (the locality or DEQ).
                    </div>
                </div>
            </div>
        </div>


        <div class="modal fade" id="application-pbr" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Permit by Rule for Full Solar Energy Project Application</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        The application provides the state sufficient information to determine if the project meets the Permit by Rule criteria and facilitates state and federal reviews as needed.

                        <br><br><b>Prerequisites</b>: Application for a PJM Interconnection Service Agreement (Local Government Project Approval)
                        <br><br>
                        Application must include:
                        <br> 
                        <ol type = "1">
                            <li><a href="https://www.deq.virginia.gov/home/showpublisheddocument/4686/637475307699370000" target="_blank">Local Governing Body Certification Form</a></li>
                            <li><a href="https://www.deq.virginia.gov/home/showpublisheddocument/4679/637475306133830000" target="_blank">Environmental Permit Certification Form</a> (Environmental permits must be <b>applied</b> for prior)</li>
                            <li><a href="https://www.deq.virginia.gov/home/showpublisheddocument/4681/637475306597800000" target="_blank">Non-Utility Certification Form</a> or <a href="https://www.deq.virginia.gov/home/showpublisheddocument/4675/637475305496100000" target="_blank">Utility Certification Form</a></li>
                            <li><a href="https://law.lis.virginia.gov/admincode/title9/agency15/chapter60/section110/" target="_blank">Permit by Rule Application & Modification Fees</a></li>
                            <li>Analysis of the Beneficial and Adverse Impacts on Natural Resources</li>
                            <li>Determination of Likely Significant Adverse Impacts</li>
                            <li>Mitigation Plan</li>
                            <li>Site Plan and Context Map</li>
                            <li>Documentation of Public Notices, Comment Periods, and Meetings</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="noi-solar-energy" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title"><a href="https://law.lis.virginia.gov/vacode/10.1-1197.6/" target="_blank">Notice of Intent for Full Solar Energy Project</a></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        The NOI provides the state notice that the developer intends to develop a project from 5MW up to 150 MW and use the DEQ PBR process for
                        permitting. There are no official prerequisites for the NOI. However, it is recommended that the the developer submit for local certification and PJM before submitting NOI. The NOI is then a prerequisite for the full PBR.
                        The NOI for Full Solar Energy Project template can be found <a href="https://www.deq.virginia.gov/home/showpublisheddocument/4676/637475305664400000" target="_blank">here</a>.
                        <br><br>
                        <b>Public Notification</b>: DEQ will publish the notice of intent in the Virginia Register for 30 days <a href="https://www.townhall.virginia.gov/L/GeneralNotice.cfm" target="_blank">here</a> (No public comment forum)
                        <br><br>
                        <b>Contact</b>: Susan Tripp, Small Renewable Energy PBR Program Guidance & Regulation Coordinator, susan.tripp@deq.virginia.gov
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="issuance-pbr" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Issuance of Permit by Rule for Full Solar Energy Project</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        Permit will be approved or denied within 90 days after the DEQ accepts all necessary forms. If approved, the applicant is authorized to construct and operate a small solar energy project pursuant to this chapter. If denied, the DEQ will contact the applicant and notify them of specific deficiencies.
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="hb206-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Future Requirements Per HB206</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        Rule making is in progress. See the <a href="https://www.townhall.virginia.gov/L/ListBoards.cfm" target="_blank">Virginia Town Hall</a> for up-to-date information. Rules will be promulgated by the end of 2024.
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="deq-sister" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">DEQ Office of Environmental Impact and Courtesy Sister Agency Review Process</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        The following courtesy reviews are facilitated by the VA DEQ, coordinated with the applicant, and conducted by four state agencies. These reviews identify impacts to natural resources of state importance, likely significant adverse impacts, and mitigation plans.
                        <br><br>
                        <i>These three courtesy reviews are required to be completed prior to submitting the application for the General Construction Stormwater Permit (VPDES).</i>                    
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="deq-sister-pbr" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">DEQ Office of Environmental Impact and Courtesy Sister Agency Review Process</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        The following coordinated reviews for the VA DEQ PBR process are facilitated by the VA DEQ, coordinated with applicant, and conducted by three state agencies. These reviews identify impacts to natural resources of state importance, likely significant adverse impacts, and mitigation plans. Application Certification of completion of these courtesy reviews is a necessary component of the PBR application. According to <a href="https://law.lis.virginia.gov/vacode/10.1-1197.6/" target="_blank">§ 10.1-1197.6-12B</a>, a component of the PBR application is a certification by the applicant that they have applied for or obtained these permits. <br><br>

                        <i>These three coordinated reviews are required to be completed prior to submitting the application for the General Construction Stormwater Permit (VPDES).</i>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="deq-sister-cpcn" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">DEQ Office of Environmental Impact and Courtesy Sister Agency Review Process</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        The following courtesy reviews are facilitated by the VA DEQ, coordinated with the applicant, and conducted by four state agencies. These reviews identify impacts to natural resources of state importance, likely significant adverse impacts, and mitigation plans.<br><br>

                        <i>These three courtesy reviews are required to be completed prior to submitting the application for the General Construction Stormwater Permit (VPDES).</i><br><br>
                    
                        Submit simultaneously with the SCC Authority to Construct and Operate an Electric Generating Facility (5MW-100MW). See <a href="https://law.lis.virginia.gov/admincodefull/title20/agency5/chapter302/" target="blank_">20VAC5-302-25, 11</a>.
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="deq-sister-100" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">DEQ Office of Environmental Impact and Courtesy Sister Agency Review Process</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        The following courtesy reviews are facilitated by the VA DEQ, coordinated with the applicant, and conducted by four state agencies. These reviews identify impacts to natural resources of state importance, likely significant adverse impacts, and mitigation plans.<br><br>

                        <i>These three courtesy reviews are required to be completed prior to submitting the application for the General Construction Stormwater Permit (VPDES).</i><br><br>
                    
                        Submit simultaneously with the SCC Authority to Construct and Operate an Electric Generating Facility (Renewable Energy > 100MW). See <a href="https://law.lis.virginia.gov/admincode/title20/agency5/chapter302/section20/" target="blank_">20VAC5-302-20.12</a>.
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="dot-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title"> Department of Transportation, Traffic Impact Statement </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        The VDOT Traffic Impact Statement (VTIS) assesses the impact of a proposed development on the transportation system and recommends improvements to lessen or negate those impacts. The permit requirements are as follows: 
                        The VTIS shall (i) identify any traffic issues associated with access from the site to the existing transportation network, (ii) outline solutions to potential problems, (iii) address the sufficiency of the future transportation 
                        network, and (iv) present improvements to be incorporated into the proposed development. The VDOT will accept a traffic analysis study prepared according to local requirements, as long as the VDOT certifies that the 
                        local requirements meet acceptable standards of professional practice. The VDOT will provide the locality with a written report contain key findings. If necessary, certain forms that are to be submitted can be found <a href='https://www.virginiadot.org/info/traffic_impact_analysis_regulations.asp' target="_blank">here</a>.

                        <br><br> <b>Statutory Review Time Limits</b>: VDOT will respond to request for a scope of work meeting within 30 days of the request, and schedule a meeting to occur within 60 days of being contacted.
                        <br><br> <b>Notices/Public Hearings</b>: VDOT must make its comments available to the public through various means, e.g. through VDOT’s LandTrack system web page on the VDOT public website, copies at the local government offices, or a presentation to the locality.\

                        <br><br> The legislation regulating the guidelines for the VTIS is established in <a href='https://law.lis.virginia.gov/admincode/title24/agency30/chapter155/section60/' target="_blank">24VAC30-155-60</a> of the Virginia Administrative Code. To get in touch with the VDOT and see further information on the VTIS, see <a href='https://www.virginiadot.org/info/traffic_impact_analysis_regulations.asp' target="_blank">here<a>.
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="deq-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title"> Department of Environmental Quality </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">    
                        NEED TO ADD
                    
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="dhr-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title"> Department of Historic Resources </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                    This is a review of any impacted historic sites. The DHR may provide comments to the DEQ for inclusion into their evaluation. It is important to note that the DHR application must be submitted no less than 30 days prior to the start date of the project.

                    <br><br>The establishment of this review requirement can be found <a href='https://www.dhr.virginia.gov/federal-state-review/state-project-review/' target="_blank">here</a>.
                    
                    <br><br>This is only required if the project will impact a historic site. This assessment should be coordinated with DWR as part of the natural resource impact assessment.
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="dcr-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title"> Department of Conservation and Recreation </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        This is a courtesy review of the project’s environmental impact. The review may look at impact on biodiversity, habitat land, water table, and other factors. DCR may provide comments to DEQ for inclusion into their evaluation.

                        <br><br> The permit link can be found <a href="https://www.dcr.virginia.gov/natural-heritage/nhserviceform/" target="_blank">here</a>. For further inquiries, contact nhreview@dcr.virginia.gov.
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="dwr-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title"> Department of Wildlife Resources, Solar Energy Facility Guidance </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        The DWR's Solar Energy Facility Guidance provides guidance for solar projects, such as project impact on natural resources, bald eagle nests, bats and bat habitat, wildlife passage fencing, vegetation considerations, and aquatic habitat. The DWR may provide comments to DEQ for inclusion into their evaluation.

                        <br><br>Information on the Solar Energy Facility Guidance can be found <a href='https://dwr.virginia.gov/wp-content/uploads/media/Solar-Energy-Facility-Guidance.pdf' target="_blank">here</a>. For further inquiries, contact DWR's Manager of Wildlife Information and Environmental Services or DEQ's Renewable Energy PBR Coordinator.
                        
                        <br><br><i>These assessments should be submitted and completed before the construction permits and erosion permits. These assessments should also be coordinated with DCR to assess impacts to heritage resources.</i>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="hb206-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Future Requirements Per HB206</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        Rule making is in progress. See <a href="https://www.deq.virginia.gov/our-programs/air/renewable-energy/hb-206-renewable-energy-natural-resources" target="_blank">here</a> for up-to-date information. Rules will be promulgated by the end of 2024.
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="submit-noi" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Submit NOI for Small Solar Energy Project (5 MW to 150 MW)</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        The <a href="https://www.deq.virginia.gov/permits/renewable-energy" target="_blank">NOI</a> provides the state notice that the developer intends to develop a project from 5 MW up to 150 MW and use the DEQ PBR process for permitting. There are no official prerequisites for the NOI. The NOI is then a prerequisite for the full PBR. <i>Rulemaking for HB206 may impact these timelines.</i>
                        <br><br>
                        Public Notification: DEQ will publish the notice of intent in the <a href="https://www.townhall.virginia.gov/L/GeneralNotice.cfm" target="_blank">Virginia Register</a> for 30 days. No public comment forum.
                        <br><br>
                        Contact: Susan Tripp, Small Renewable Energy PBR Program Guidance & Regulation Coordinator, susan.tripp@deq.virginia.gov
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="submit-pbr" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Submit PBR Application for Small Solar Energy Project</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                    The application provides the state sufficient information to determine if the project meets the Permit by Rule criteria and facilitates state and federal reviews as needed. According to <a href="https://law.lis.virginia.gov/admincode/title9/agency15/chapter60/section30/" target="_blank">9VAC15-60-30 A</a>, and in accordance with <a href="https://law.lis.virginia.gov/vacode/10.1-1197.6/" target="_blank">§ 10.1-1197.6 B</a>,
                    the application requirements are:
                    <ol type = "1">
                            <li><a href="https://www.deq.virginia.gov/permits/renewable-energy" target="_blank">Notice of Intent</a> that a person intends to "submit the necessary documentation for a permit by rule for a small renewable energy project." DEQ will publish the notice of intent in the <a href="https://www.townhall.virginia.gov/L/GeneralNotice.cfm" target="_blank">Virginia Register</a> for 30 days. NOI is a prerequisite for a complete PBR application.</li>
                            <li>Obtain <a href="https://www.deq.virginia.gov/permits/renewable-energy" target="_blank">local bodies certification</a>. Local certification is a prerequisite for a complete PBR application.</li>
                            <li>Copies of all interconnection studies undertaken for this project.</li>
                            <li>A copy of the final interconnection agreement between the small renewable energy project and the regional transmission organization or transmission owner. If the final agreement is not available, provide the most recent interconnection study. When a final interconnection agreement is complete, it shall be provided to the Department, who will forward a copy to the SCC. Application for a final interconnection agreement is a prerequisite for a complete PBR application.</li>
                            <li>"A certification signed by a professional engineer licensed in Virginia that the maximum generation capacity of the small renewable energy project, as designed, does not exceed 150 megawatts."</li>
                            <li>"Analysis of the project's potential environmental impacts on attainment of national ambient air quality standards."</li>
                            <li>"Where relevant, an analysis of the beneficial and adverse impacts of the proposed project on natural resources. The owner or operator shall perform the analyses prescribed in <a href="https://law.lis.virginia.gov/admincode/title9/agency15/chapter60/section40/" target="_blank">9VAC15-60-40</a>. For wildlife, that analysis shall be based on information on the presence, activity, and migratory behavior of wildlife to be collected at the site for a period of time dictated by the site conditions and biology of the wildlife being studied, not exceeding 12 months."</li>
                            <li>"If DEQ determines, pursuant to <a href="https://law.lis.virginia.gov/admincode/title9/agency15/chapter60/section50/" target="_blank">9VAC15-60-50</a>, that the information collected in step 7 above indicates that significant adverse impacts to wildlife or historic resources are likely, the developer must provide a mitigation plan pursuant to <a href="https://law.lis.virginia.gov/admincode/title9/agency15/chapter60/section60/" target="_blank">9VAC15-60-60</a>. This plan must detail 'reasonable actions to be taken by the owner or operator to avoid, minimize, or otherwise mitigate such impacts, and to measure the efficacy of those actions.' The mitigation plan is an enforceable part of the PBR."</li>
                            <li>"Certification signed by a professional engineer licensed in Virginia that the mitigation plan requirements pertaining to its design and installation have been incorporated (The requirements of <a href="https://law.lis.virginia.gov/admincode/title9/agency15/chapter60/section80/" target="_blank">9VAC15-60-80</a> are satisfied)."</li>
                            <li>"Operating plan that includes a description of how the project will be operated in compliance with its mitigation plan, if such a mitigation plan is required pursuant to <a href="https://law.lis.virginia.gov/admincode/title9/agency15/chapter60/section50/" target="_blank">9VAC15-60-50</a>."</li>
                            <li>Detailed site plan meeting the requirements of <a href="https://law.lis.virginia.gov/admincode/title9/agency15/chapter60/section70/" target="_blank">9VAC15-60-70</a>.</li>
                            <li>Submit the <a href="https://www.deq.virginia.gov/permits/renewable-energy" target="_blank">Environmental Permit Certification Form</a>. Application for environmental permits, but not receipt of the permits, is a prerequisite to apply for the PBR.</li>
                            <li>"Certification that the applicant is in accordance with <a href="https://law.lis.virginia.gov/vacode/10.1-1197.6/" target="_blank">§ 10.1-1197.6 H and I</a> of the Code of Virginia. Submit the applicable form: <a href="https://www.deq.virginia.gov/permits/renewable-energy" target="_blank">Non-Utility Certification Form</a> or <a href="https://www.deq.virginia.gov/permits/renewable-energy" target="_blank">Utility Certification Form</a>."</li>
                            <li>"Conduct a 30-day public review and comment period and hold a public meeting pursuant to <a href="https://law.lis.virginia.gov/admincode/title9/agency15/chapter60/section90/" target="_blank">9VAC15-60-90</a>. 'The public meeting shall be held in the locality or, if the project is located in more than one locality, in a place proximate to the location of the proposed project. Following the public meeting and public comment period, the applicant shall prepare a report summarizing the issues raised by the public and include any written comments received and the applicant's response to those comments. The report shall be provided to the department as part of this application.' The 30-day public review and comment period, public meeting, and subsequent report are prerequisites for a complete PBR application."</li>
                            <li><a href="https://law.lis.virginia.gov/admincode/title9/agency15/chapter60/section110/" target="_blank">Payment of the appropriate fee</a>. According to the <a href="https://www.deq.virginia.gov/permits/renewable-energy" target="_blank">DEQ website</a>, "All permit application fees or modification fees are due on submittal day of the application or modification package. Submittals will be deemed incomplete until the department receives payment. Incomplete payments will be deemed non-payments."</li>
                            <br><i>The DEQ includes a list of all other required permits. If not already completed, the developer must sign that they will receive them after the isssuance of the PBR. This includes stormwater permitting. See the DEQ's VPT and PEEP resources <a href="https://www.deq.virginia.gov/get-involved/virginia-permit-transparency-and-permitting-enhancement-and-evaluation-platform" target="_blank">here</a> to track the daily status and timeline for PBR permitting.</i>
                    </ol>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="pbr-issuance" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title"> Issuance of PBR for Small Solar Energy Project</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        Per <a href="https://law.lis.virginia.gov/admincode/title9/agency15/chapter60/section30/" target="_blank">9VAC15-60-30 B</a>: 
                        <br><br>
                        "Within 90 days of receiving all of the required documents and fees listed in subsection A of this section, the department shall determine, after consultation with other agencies in the Secretariat of Natural and Historic Resources, whether the application is complete and whether it adequately meets the requirements of this chapter pursuant to <a href="https://law.lis.virginia.gov/vacode/10.1-1197.7/" target="_blank">§ 10.1-1197.7 A</a> of the Code of Virginia.
                        <br><br>
                        <ol type = "1">
                            <li>If the department determines that the application meets the requirements of this chapter, then the department shall notify the applicant in writing that he is authorized to construct and operate a small solar energy project pursuant to this chapter.</li>
                            <li>If the department determines that the application does not meet the requirements of this chapter, then the department shall notify the applicant in writing and specify the deficiencies.</li>
                            <li>If the applicant chooses to correct deficiencies in a previously submitted application, the department shall follow the procedures of this subsection and notify the applicant whether the revised application meets the requirements of this chapter within 60 days of receiving the revised application.</li>
                            <li>Any case decision by the department pursuant to this subsection shall be subject to the process and appeal provisions of the Administrative Process Act (§ 2.2-4000 et seq. of the Code of Virginia).</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

class Interconnections extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="modal fade" id="applicable-inter" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Receive Applicable Interconnection Approval</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                    Upon completion of the applicable interconnection pathway, the utility provides the IC with the appropriate interconnection approval. Per <a href="https://www.pjm.com/-/media/documents/manuals/m14h.ashx" target="_blank">PJM Manual 14H Section 8.5.1</a>, the GIA must be "executed by the Project Developer, the Transmission Owner, and PJM. The GIA defines the obligations of the Project Developer regarding cost responsibility for any required system upgrades. The GIA also confers the rights associated with the interconnection of a Generating Facility as a Capacity Resource and any operational restrictions or other limitations on which those rights depend. <br><br>

                    For Transmission Project Developers, the GIA confers transmission injection and withdrawal rights (Merchant Direct Current and/or Fully Controllable Alternating Current transmission projects) and applicable incremental delivery rights and Incremental Auction Revenue Rights.<br><br>
                    
                    The GIA further identifies any changes in construction responsibility from the Standard Option for Transmission Owner Interconnection Facilities due to the Project Developer exercising the Negotiated Contract Option or Option to Build."<br><br>
                    
                    The standard terms and conditions of construction are included in the GIA. The terms and conditions address the following: Project scope; construction responsibilities of the parties; ownership of Transmission Owner and Project Developer Interconnection Facilities; schedule of major construction work; and etails on how the construction will be performed. However, per <a href="https://www.pjm.com/-/media/documents/manuals/m14h.ashx" target="_blank">PJM Manual 14H Section 8.5.1.4</a>, "in cases in which there are multiple affected Transmission Owners, a separate stand-alone Construction Service Agreement (CSA) located in Tariff Part IX, Subpart J, will be executed with each such Transmission Owner."<br><br>
                    
                    This GIA is a prerequisite to the issuance of the permit. 
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="applicable-inter-short" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Receive Applicable Interconnection Approval</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        Upon completion of the applicable interconnection pathway, the utility provides the IC with the appropriate interconnection approval.
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="applicable-inter-pbr" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Receive Applicable Interconnection Approval</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        Upon completion of the applicable interconnection pathway, the utility provides the IC with the appropriate interconnection approval.
                        <br>
                        <br>
                        <i>Application for the final interconnection approval is a prerequisite for the PBR.</i>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="wmpa" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Receive WMPA</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        Per <a href ="https://www.pjm.com/-/media/documents/manuals/m14h.ashx">PJM Manual 14H Section 8.5.5</a>, "Project Developers interconnecting to non-FERC jurisdictional 
                        facilities who intend to participate in the PJM wholesale market will receive a three party agreement known as a WMPA. The WMPA is essentially a GIA without 
                        interconnection provisions, and facilitates the wholesale sale of MWs from such facilities."
                    </div>
                </div>
            </div>l
        </div>
        <div class="modal fade" id="shared-solar-enrollment" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Shared Solar Enrollment</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class ="modal-body">
                        In 2020, Virginia passed laws to create community solar programs, aimed at expanding access to
                        clean energy options for residents of Virginia. Without needing to install solar options
                        themselves, many community members now have the opportunity to access solar energy. The
                        “shared solar” program has two parts – the Shared Solar Program and the Multi-Family Shared
                        Solar Program. Per the <a href = "https://energy.virginia.gov/renewableenergy/SS_CS.html">Virginia Department of Energy</a>, “the Shared Solar Program [provides] customers of Dominion Energy
                        Virginia the opportunity to participate in offsite, or front-of-meter (virtual) shared solar projects,
                        while the Multi-Family Shared Solar Program provides eligible multi-family customers of
                        Dominion Energy and Kentucky Utilities (Old Dominion Power) the opportunity to participate in
                        onsite, or behind-the-meter solar projects.” Appalachian Power is in the process of joining the
                        Shared Solar Program. Many electric cooperatives are also offering community solar programs,
                        though structured and regulated apart from “shared solar.” 
                    </div>
                    <div class = "solar-enrollment-extensions">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#shared-solar-modal">
                            Click for Shared Solar Information
                        </button>

                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#family-solar-modal">
                            Click for Multi-Family Shared Solar Information
                        </button>
                    </div>                    
                </div>
            </div>
        </div>


        <div class="modal fade" id="shared-solar-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Shared Solar</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        The Shared Solar Program allows customers of Dominion Energy Virginia and Appalachian 
                        Power to purchase electric power through a subscription in a shared solar facility. Subscribers 
                        pay a minimum bill to cover the costs of the infrastructure and distribution services, and then 
                        receive a credit on their monthly electric bill proportional to the output of the shared solar facility 
                        attributable to that subscriber.

                        <br>
                        <br>

                        Section <a href =  "https://law.lis.virginia.gov/vacode/title56/chapter23/section56-594.3">§ 56-594.3</a>  of the 
                        Code of Virginia defines a “shared solar facility” as a facility that:
                        “Generates electricity by means of a solar photovoltaic device with a nameplate capacity rating 
                        that does not exceed 5,000 kilowatts of alternating current; … has at least three subscribers; has 
                        at least 40 percent of its capacity subscribed by customers with subscriptions of 25 kilowatts or 
                        less; and is located on a single parcel of land.” If following a Phase II utility program (Dominion 
                        Virginia), the shared solar facility must be interconnected with a Phase II Utility’s distribution 
                        system within the Commonwealth. If following a Phase I utility program (Appalachian Power), 
                        the shared solar facility must be “interconnected with the distribution system of an investor owned electric utility within the Commonwealth” ( <a href = "https://law.lis.virginia.gov/vacode/title56/chapter23/section56-594.4/">§ 56-594.4</a>).
                        
                        <br>
                        <br>

                        Dominion Energy Virginia has participated in the Shared Solar Program since its establishment
                        in 2020. Information on Dominion’s shared solar projects can be found <a href = "https://www.dominionenergy.com/virginia/renewable-energy-programs/shared-solar-program">here</a>. See <a href = "https://law.lis.virginia.gov/vacode/title56/chapter23/section56-594.3/">§ 56-594.3 </a> for shared
                        solar details with regards to Dominion Virginia (a Phase II utility).                    
                        
                        <br>
                        <br>

                        Per <a href = "https://legacylis.virginia.gov/cgi-bin/legp604.exe?241+sum+HB108">HB 108</a> of the 2024
                        legislative session, Appalachian Power will join Dominion Virginia in the Shared Solar Program.
                        Appalachian Power must provide tariff and agreement information and other related 
                        requirements by July 1, 2025. It is unclear when customers will be able to subscribe. Check 
                        <a href = "https://www.appalachianpower.com">Appalachian Power</a> for updates. See
                        <a href = "https://law.lis.virginia.gov/vacode/title56/chapter23/section56-594.4/"> § 56-594.4</a> for shared solar details
                        with regards to Appalachian Power (a Phase I utility)                   
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="family-solar-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Multi-Family Shared Solar</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                    The Multi-Family Shared Solar Program allows eligible multi-family customers of Dominion
                    Energy Virginia and Old Dominion Power (ODP) to purchase subscriptions in a shared solar
                    facility. Such customers will receive a credit on their monthly electric bill proportional to the
                    output of the shared solar facility attributable to that subscriber.

                    <br>
                    <br>
                    The Multi-Family Shared Solar Program is established in Section <a href = "https://law.lis.virginia.gov/vacode/title56/chapter23/section56-585.1:12/">§ 56-585.1:12</a> of the Code of Virginia.
                    Rules governing the program can be found in <a href = "https://law.lis.virginia.gov/admincode/title20/agency5/chapter342/">Chapter 342 of the Virginia Administrative Code</a>. 

                    <br>
                    <br>
                    Section <a href = "https://law.lis.virginia.gov/vacode/title56/chapter23/section56-585.1:12/"> Section § 56-585.1:12</a>  of the Code of Virginia defines a “shared solar facility” for the Multi-Family Shared Solar
                    Program as a facility that:
                    <br>
                    “1. Generates electricity by means of a solar photovoltaic device with a nameplate capacity
                    rating that does not exceed 3,000 kW alternating current at any single location or that does not
                    exceed 5,000 kW alternating current at contiguous locations owned by the same entity or
                    affiliated entities;
                    <br>
                    2. Is operated pursuant to a program whereby at least three subscribers receive a bill credit for
                    the electricity generated from the facility in proportion to the size of their subscription;
                    <br>
                    3. Is located in the service territory of an investor-owned utility;
                    <br>
                    4. Is connected to the electric distribution grid serving the Commonwealth; and
                    <br>
                    5. Is located on a parcel of land on the premises of the multi-family utility customer or adjacent
                    thereto.”
                    <br>
                    <br>
                    See details of Dominion Virginia's program on <a href = "https://www.dominionenergy.com/virginia/renewable-energy-programs/multi-family-sharedsolar">Dominion's website</a>. For Old Dominion Power Company, see <a href = "https://lge-ku.com/virginia-solar">ODP's website</a> for details.


                
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="small-generators" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Queue Window</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        Regulations surrounding queue numbers are established in <a href="https://law.lis.virginia.gov/admincode/title20/agency5/chapter314/section38/" target="_blank">20VAC5-314-38</a>.
                        <br><br>
                        Interconnection requests are assigned a queue number "based upon the date-stamp and time-stamp of receipt of a completed Interconnection Request Form by the utility." An Interconnection Request Form that is received earlier than another request shall be assigned a lower numerical queue number. Projects are studied in numerical order from low to high, except in the case of interdependent projects.
                        <br><br>
                        If the utility makes a preliminary determination that the SGF does not create an interdependency, follow straight to the Level 2 study process in <a href="https://law.lis.virginia.gov/admincode/title20/agency5/chapter314/section60/" target="_blank">20VAC5-314-60</a>. If a dependency is determined, see <a href="https://law.lis.virginia.gov/admincode/title20/agency5/chapter314/section38/" target="_blank">20VAC5-314-38</a> for further details.
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="eligible-generators" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Queue Window</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        Regulations surrounding queue numbers are established in <a href="https://law.lis.virginia.gov/admincode/title20/agency5/chapter314/section38/" target="_blank">20VAC5-314-38</a>.
                        <br><br>
                        Interconnection requests are assigned a queue number "based upon the date-stamp and time-stamp of receipt of a completed Interconnection Request Form by the utility." An Interconnection Request Form that is received earlier than another request shall be assigned a lower numerical queue number. Projects are studied in numerical order from low to high, except in the case of interdependent projects.
                        <br><br>
                        If the utility makes a preliminary determination that the SGF does not create an interdependency, follow straight to the Level 2 study process in <a href="https://law.lis.virginia.gov/admincode/title20/agency5/chapter314/section60/" target="_blank">20VAC5-314-60</a>. If a dependency is determined, see <a href="https://law.lis.virginia.gov/admincode/title20/agency5/chapter314/section38/" target="_blank">20VAC5-314-38</a> for further details.
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="queue-window" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Queue Window</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        Regulations surrounding queue numbers are established in <a href="https://law.lis.virginia.gov/admincode/title20/agency5/chapter314/section38/" target="_blank">20VAC5-314-38</a>.
                        <br><br>
                        Interconnection requests are assigned a queue number "based upon the date-stamp and time-stamp of receipt of a completed Interconnection Request Form by the utility." An Interconnection Request Form that is received earlier than another request shall be assigned a lower numerical queue number. Projects are studied in numerical order from low to high, except in the case of interdependent projects.
                        <br><br>
                        If the utility makes a preliminary determination that the SGF does not create an interdependency, follow straight to the Level 2 study process in <a href="https://law.lis.virginia.gov/admincode/title20/agency5/chapter314/section60/" target="_blank">20VAC5-314-60</a>. If a dependency is determined, see <a href="https://law.lis.virginia.gov/admincode/title20/agency5/chapter314/section38/" target="_blank">20VAC5-314-38</a> for further details.
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="sgia" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Small Generator Interconnection Agreement</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        As established in <a href="https://law.lis.virginia.gov/admincode/title20/agency5/chapter314/section60/" target="_blank">20VAC5-314-60</a> of the Virginia Administrative Code:
                        <br><br>"After the utility notifies the IC that it has received a complete Interconnection Request Form, the utility performs screening reviews. If the interconnection passes the screens, the utility will approve the interconnection request and provide the IC with an SGIA within 10 business days. If the interconnection instead fails any screens, Parts F-H lay out the subsequent timeline and actions required."
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="utility-intro" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title"><i>Best Practice</i>: Utility hosts introductory call with developer</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        For projects seeking to interconnect with the utility, it is a best practice for the utility to host an introductory call with the developer before beginning the interconnection process. This call will help to identify which permitting pathway the utility will require for the proposed project, in addition to other notifications.
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="trip-determination-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title"><i>Best Practice</i>: Send application to transmission owner for transfer trip determination</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        As soon as possible, send the transmission owner a copy of the interconnection application to request a determination on whether transfer trip is needed. Costs are not provided until the Facilities Study. This is the only thing that the transmission owner, as an Affected System, will do until they receive the results of the Impact Study. If applying through a cooperative, the cooperative will contact the transmission owner as soon as they receive the aplication.
                        <br>
                        <br>
                        Note on the costs of transfer trip: Transfer trip is a possible requirement for which attention should be called to as it can be a costly component of the interconnection application process, so much so that it is driving many small projects out of existence. Transfer trip requires the use of fiber lines to send a trip signal to halt substation activity in the case of a disruption. Most often the requirement is for dark fiber, or fiber that is not simultaneously being used for anything else. In many cases, new fiber lines must be installed to meet transfer trip. It is especially difficult to get fiber from the deliver point (substation) to the solar site. If transfer trip is required, the utility must provide a way to make this happen. However, this process is generally very costly, in turn driving small projects out of business or forcing them to relocate the project closer to the substation.
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="sgip-level-2" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">SGIP Level 2 Pathway</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        As laid out in <a href="https://law.lis.virginia.gov/admincode/title20/agency5/chapter314/section50/" target="_blank">20VAC5-314-50.A</a> of the Virginia Administrative Code: <br><br>
                        "The IC shall submit (i) a completed Levels 2 and 3 Interconnection Request Form (Schedule 6 of 20VAC5-314-170); (ii) site control documentation pursuant to Schedule 6 of 20VAC5-314-170, and (iii) the required $1,000 processing fee."
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="sgip-level-3" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">SGIP Level 3 Pathway</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        As laid out in <a href="https://law.lis.virginia.gov/admincode/title20/agency5/chapter314/section50/" target="_blank">20VAC5-314-50.A</a> of the Virginia Administrative Code: <br><br> 
                        "The IC shall submit (i) a completed Levels 2 and 3 Interconnection Request Form (Schedule 6 of 20VAC5-314-170); (ii) site control documentation pursuant to Schedule 6 of 20VAC5-314-170, and (iii) the required $1,000 processing fee."
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="scoping-meeting" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Scoping Meeting</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        Per <a href="https://law.lis.virginia.gov/admincode/title20/agency5/chapter314/section70/" target="_blank">20VAC5-314-70-B</a>: <br><br>
                        "1. The purpose of the scoping meeting is to discuss the interconnection request and the utility's preliminary interdependency determination. The parties shall discuss the studies potentially required to safely and reliably interconnect the IC to the utility's system, including the cost responsibilities for the studies.
                        <br><br>
                        2. A scoping meeting shall be held no later than 10 business days after the Interconnection Request Form is deemed complete or as otherwise mutually agreed to in writing by the parties. The utility and the IC shall bring to the meeting all resources as may be reasonably required to accomplish the purpose of the meeting, such as system engineers and other personnel.
                        <br><br>
                        3. The scoping meeting may be omitted by mutual, written agreement of the parties."
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="combined-study" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Feasibility & Impact Study</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        For the small generation expedited process, the first of the Interconnection Analysis studies – the Feasibility Study and the System Impact Study – can be combined if certain criteria are met. From 5.4.1 of PJM Manual 14G, "A small generator interconnection or upgrade may qualify for the expedited study process if it meets the criteria described in Subpart G of the Tariff. Generally, if no load flow or short circuit network impacts are identified and there are no other projects in the vicinity of the small resource addition, a Combined Feasibility and Impact Study (A.k.a a combined study) can be issued to the Interconnection Customer."
                        
                        <br><br>The study completion target is approximately 120 days after the close of the queue. Study participants are PJM and TO (Contractor under TO).
                        <br><br>

                        <div class="card" style="width: 760px;">
                        <div class="card-body">
                            <h6 class="card-title">Feasibility Study</h6>
                            <p class="card-text">As laid out in <a href="https://law.lis.virginia.gov/admincode/title20/agency5/chapter314/section70/" target="_blank">20VAC5-314-70-C</a>: 
                            <br><br>
                            A feasibility study is only required if the parties agree that it should be performed. If the parties agree to not perform a feasibility study, "the utility shall provide the IC a System Impact Study Agreement (Schedule 8 of 20VAC5-314-170) including an outline of the scope of the study and an estimate of the cost to perform the study no later than 10 business days after the scoping meeting or five business days after the decision is made to not have a scoping meeting."
                            <br><br>
                            If the parties instead agree that a feasibility study should be performed, the utility "shall provide the IC with a Feasibility Study Agreement (Schedule 7 of 20VAC5-314-170), including an outline of the scope of the feasibility study and an estimate of the cost to perform the study, no later than 10 business days after the scoping meeting or 10 business days after the decision is made to not have a scoping meeting and otherwise pursuant to subsection D of this section." In executing the agreement and subsequent requirements, follow 20VAC5-314-70-C Steps 2-10 for guidance.
                            <br><br>
                            Upon completion of the feasibility study, the IC has either met all study requirements, or must continue the study process with the system impact study. 
                            "11. If the feasibility study shows no potential for adverse system impacts, then within 10 business days of the completion of the study, the utility shall send the IC either an SGIA (Schedule 10 of 20VAC5-314-170) or a Facilities Study Agreement (Schedule 9 of 20VAC5-314-170), including an outline of the scope of the facilities study and an estimate of the cost to perform the study.
                            12. If the feasibility study shows potential for adverse system impacts, the review process shall proceed to the system impact study."</p>
                        </div>
                        </div>

                        <br>

                        <div class="card" style="width: 760px;">
                        <div class="card-body">
                            <h6 class="card-title">System Impact Study</h6>
                            <p class="card-text">Per <a href="https://law.lis.virginia.gov/admincode/title20/agency5/chapter314/section70/" target="_blank">20VAC5-314-70-D<a>:
                            <br><br>
                            If the parties agree that a system impact study should be performed, no later than 10 business days after the parties come to the agreement, "the utility shall provide the IC a System Impact Study Agreement (Schedule 8 of 20VAC5-314-170), including an outline of the scope of the system impact study and an estimate of the cost to perform the study." In executing the agreement and subsequent requirements, follow 20VAC5-314-70-D Steps 2-9 for guidance.
                            <br><br>
                            Upon completion of the study, "if the system impact study shows that facility modifications are needed to accommodate the SGF, then within 10 business days following transmittal of the system impact study report, the utility shall send the IC a Facilities Study Agreement (Schedule 9 of 20VAC5-314-170), including an outline of the scope of the study and an estimate of the cost to perform the study."
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        
        <div class="modal fade" id="facilities-agreement" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Facilities Study Agreement</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        Per <a href="https://law.lis.virginia.gov/admincode/title20/agency5/chapter314/section70/" target="_blank">20VAC5-314-70-D.10</a>: 
                        <br><br>
                        "If the system impact study shows that facility modifications are needed to accommodate the SGF, then within 10 business days following transmittal of the system impact study report, the utility shall send the IC a Facilities Study Agreement (Schedule 9 of 20VAC5-314-170), including an outline of the scope of the study and an estimate of the cost to perform the study."
                        <br><br>
                        The requirements of the Facilities Study Agreement are laid out in <a href="https://law.lis.virginia.gov/admincode/title20/agency5/chapter314/section70/" target="_blank">20VAC5-314-70-E</a>. 
                        <br><br>
                        The Facilities Study is the third and final of the Interconnection Analysis studies. The customer must select a single Point of Interconnection (If two were evaluated in the Feasibility Study). Conduct of this study is governed by procedures as set forth in Attachment D of PJM's Manual M-14A.
                        <br><br>   
                        In order for the IC to maintain its queue position, the IC must "execute the Facilities Study Agreement and return it to the utility and, if applicable, pay the interconnection request study deposit set forth in Schedule 6 of 20VAC5-314-170 within 30 business days after receipt of the agreement, unless an extension has been agreed to in writing with the utility." The timeline is increased to 45 business days after receipt of the agreement if the case requires system upgrades.
                        <br><br>  
                        <b>Study Participants</b>: TO (Or contractor under direction of TO) and affected system study
                        <br><br>  
                        Important dynamics to note: 
                        <ul style="list-style-type:disc">
                            <li>Potential for System Impact Study Re-tool Analysis</li>
                            <li>Stability Analysis</li>
                            <li>Additional Studies as required by Type of Technology being connected</li>
                            <li>Facility Study Report: Conceptual Design</li>
                            <li>Attachment Facilities</li>
                            <li>Network Upgrades: Cost Estimates; Preliminary Engineering and Construction Schedule</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="construction" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Construction Planning Meeting</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        Per <a href="https://law.lis.virginia.gov/admincode/title20/agency5/chapter314/section70/" target="_blank">20VAC5-314-70-F</a>: 
                        <br><br>
                        "1. Within 15 business days of receipt of the report for the final study (i.e., the facilities study or, if applicable, a combined study that satisfies all study requirements), the IC shall request a construction planning meeting where failure to comply shall result in the interconnection request being deemed withdrawn. The construction planning meeting request shall be in writing and shall include the IC's reasonably requested date for completion of the construction of the customer's interconnection facilities and upgrades.
                        <br><br>
                        2. The construction planning meeting shall be scheduled within 15 business days of the request from the IC as stated in subdivision F1 of this section, or as otherwise mutually agreed to in writing by the parties.
                        <br><br>
                        3. The purpose of the construction planning meeting is to identify the tasks for each party and discuss and determine the milestones for the construction of the system upgrades and attachment facilities. Agreed upon milestones shall be specific as to scope of action, responsible party, and dates of deliverables and shall be recorded in the SGIA (See Schedule 10 of 20VAC5-314-170) to be provided to the IC."
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="inter-request" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Generation Interconnection Request</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        As set forth in FERC Docket No. ER22-2110, the PJM interconnection process follows a “first-ready, first-served” cycle approach. In accordance with <a href="https://agreements.pjm.com/oatt/4088" target="_blank">Part IV Preamble, Section 201 of the PJM Open Access Transmission Tariff</a>, interconnection customers must submit “a complete and fully executed Generation Interconnection Feasibility Study Agreement” to be assigned a queue position. <br><br>The Generation Interconnection Feasibility Study Agreement must include, at minimum, the ten components laid out in Part IV, Subpart A, Section 36.1.01-1 of the PJM Open Access Transmission Tariff. This includes the project’s location, ownership, size, fuel type, equipment configuration, planned in-service date, and deposit.
                    </div>
                </div>
            </div>
        </div>
        
        <div class="modal fade" id="position-granted" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Queue Position Granted</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                    There are two annual periods for the New Services Queue ending March 31 and September 30 in which new interconnection requests can be allocated a spot. Per Part IV, Subpart A, Section 36.1.01-3 of the PJM Open Access Transmission Tariff: “The Interconnection Customer must submit a complete and fully executed Generation Interconnection Feasibility Study Agreement (Tariff, Attachment N) to the Transmission Provider by March 10 for the New Services Queue ending March 31, and by September 10 for the New Services Queue ending September 30.” Queue position will be assigned based on the date and time of receipt of the last required piece of information, including resolution of deficiency notice.
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="feasibility" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Feasibility Study</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                    The Feasibility Study is the first of the Interconnection Analysis studies. The customer can select a primary and secondary Point of Interconnection (POI). The following components are required:
                    <ol type="1">
                        <li>Deposit for interconnection requests based on request receipt timing and MW size</li>
                        <li>Site control for generation requests</li>
                        <li>In-service date within 7 years of entering queue</li>
                    </ol>
             <b>Study Completion</b>: Target is approximately 120 days after close of queue
             <br>
             <b>Study Participants</b>: PJM & TO (Contractor under TO)
             <br><br>
             The results of the study are as follows:
                    <ol type="1">
                        <li>Attachment Facilities Needed for Interconnection</li>
                        <li>Identify thermal overloads and required upgrades (Construction schedule estimates for primary POI)</li>
                        <li>Identify thermal overloads with secondary POI (No cost/schedule estimates)</li>
                        <li>Short-Circuit Analysis</li>
                    </ol>    
             Customers receive a Feasibility Study Report and 30 days to sign a System Impact Study Agreement (SISA).
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="system-impact" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">System Impact Study</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        The System Impact Study is the second of the Interconnection Analysis studies. The customer must select a single Point of Interconnection (If two were evaluated in the Feasibility Study). <br><br> The following components are required:
                        <ol type="1">
                            <li>Deposit Based on MW Size</li>
                            <li>Initial Air Permit Application (N/A for Solar/Wind Projects)</li>
                            <li>Ownership (Transmission Interconnection Requests)</li>
                        </ol> 
                        <b>Study Completion</b>: 120 days after start of Queue Study or start of System Impact Study Agreement
                        <br><b>Study Participants</b>: PJM & TO (Contractor under TO) and affected systems (FSA)
             
                        <br><br>The results of the study are as follows:
                        <ol type="1">
                            <li>Summer-Peak Power Flow Analysis</li>
                            <li>Light-Load Power Flow Analysis (If applicable)</li>
                            <li>Short-Circuit Analysis</li>
                            <li>Other Power Flow Analyses (If applicable)</li>
                            <li>Cost Estimates and Allocations</li>
                        </ol> 
                        Customers receive a System Impact Study Report and have 30 days to sign a Facility Study Agreement (FSA)
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="facilities-studies" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Facilities Studies</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        The Facilities Study is the third and final of the Interconnection Analysis studies. The customer must select a single Point of Interconnection (If two were evaluated in the Feasibility Study). Conduct of this study is governed by procedures as set forth in Attachment D of PJM's Manual M-14A.
                        <br><br>
                        The Facilities Study requires a deposit based on MW size. Completion of the study is dependent on the individual transmission owner zone and queue volume.
                        <br><br>
                    <b>Study Participants</b>: TO (or contractor under direction of TO) and affected System Study
                    <br><br>
                    Important dynamics to note:
                    <ul style="list-style-type:disc">
                            <li>Potential for System Impact Study Re-tool Analysis</li>
                            <li>Stability Analysis</li>
                            <li>Additional Studies as required by Type of Technology being connected</li>
                            <li>Facility Study Report: Conceptual Design</li>
                            <li>Attachment Facilities</li>
                            <li>Network Upgrades: Cost Estimates; Preliminary Engineering and Construction Schedule</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="modal fade" id="inter-services" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Interconnection Services Agreement</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        The ISA is issued to the customer upon completion of the above studies, granting the customer rights to interconnect and generate. It also contains the following important components: defines project milestones, describes the project’s point of interconnection, describes system upgrades and costs, outlines metering requirements, and contains a security requirement. The ISA persists after construction.
                    </div>
                </div>
            </div>
        </div>
        
        <div class="modal fade" id="construct-services" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Interconnection Construction Service Agreement</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        The Interconnection Construction Service Agreement (CSA) is provided to the customer. The agreement outlines construction responsibility and contains the upgrade construction schedule and notification and insurance obligations. After construction is completed, the agreement is terminated. 
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="deficiency" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Deficiency Review</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        Within 15 days of receipt of the customer’s Generation Interconnection Feasibility Study Agreement, or as soon as possible thereafter, the Transmission Provider will execute a deficiency review. The Transmission Provider’s deficiency notice may include, but is not limited to, providing additional required information, evidence, and payments for estimated additional costs. The customer is given ten business days to respond to the deficiency notice. Resolution of any deficiencies is necessary to receive a queue position. Further details can be found in Part IV, Subpart A, Section 36.1.01-2 of the PJM Open Access Transmission Tariff.
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

class Localities extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="modal fade" id="local-meetings" tabindex="-1" role="dialog">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="title">Pre-Application Meetings, Community Meetings and Public Engagement</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                                <div class="modal-body">
                                <div class="card" style="width: 760px;">
                                <div class="card-body">
                                    <h6 class="card-title">Pre-Application Meetings</h6>
                                    <p class="card-text"> Pre-application meetings are coordinated with the locality before submitting the permit application. Requirements differ depending on the locality.</p>
                                </div>
                                </div>
        
                                <br>
        
                                <div class="card" style="width: 760px;">
                                <div class="card-body">
                                    <h6 class="card-title">Community Meetings and Public Engagement</h6>
                                    <p class="card-text">The applicant hosts community meetings and public engagements as requested or required by the locality. Such engagements with the community can take place before, during, and/or after the application is submitted.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="modal fade" id="local-meetings" tabindex="-1" role="dialog">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="title">Pre-Application Meetings, Community Meetings and Public Engagement</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                                <div class="modal-body">
                                <div class="card" style="width: 760px;">
                                <div class="card-body">
                                    <h6 class="card-title">Pre-Application Meetings</h6>
                                    <p class="card-text"> Pre-application meetings are coordinated with the locality before submitting the permit application. Requirements differ depending on the locality.</p>
                                </div>
                                </div>
        
                                <br>
        
                                <div class="card" style="width: 760px;">
                                <div class="card-body">
                                    <h6 class="card-title">Community Meetings and Public Engagement</h6>
                                    <p class="card-text">The applicant hosts community meetings and public engagements as requested or required by the locality. Such engagements with the community can take place before, during, and/or after the application is submitted.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="modal fade" id="scc-notify" tabindex="-1" role="dialog">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="title">Best practice: developer notifies the locality before or at the same time as submitting Letter to the SCC</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                                <div class="modal-body">
                                    It is encouraged that the developer apply for local certification (begin the process of completing local certification requirements) before or at the same time as submitting the Letter to the Director of the Divsion of Energy Regulation. The purpose of this practice is to ensure the locality is aware of the proposal at the same time as the state.
                            </div>
                        </div>
                    </div>
            </div>

            <div class="modal fade" id="same-time-notify" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="title"><i>Best Practice</i>: Developer notifies the locality before or at the same time as submitting the NOI to the DEQ</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            It is encouraged that the developer apply for local certification (begin the process of completing local certification requirements) before submitting their NOI.
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="same-time-notify-130" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="title"><i>Best Practice</i>: Developer notifies the locality before or at the same time as submitting the NOI to the DEQ</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            It is encouraged that the developer apply for local certification (begin the process of completing local certification requirements) before or at the same time as submitting the NOI to the DEQ. <i>The purpose of this practice is to ensure the localilty is aware of the proposal at the same time as the state.</i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="developer-issues-noi" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="title">Developer issues NOI to locality to initiate siting agreement negotiation pursuant to Code of Virginia 15.2-2316.7</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            Per <a href = https://law.lis.virginia.gov/vacodefull/title15.2/chapter22/article7.3/>Code of Virginia 15.2-2316.7</a>, any solar project applicant must notify the locality of the intent to locate in the locality and request a meeting.
                        </div>
                    </div>
                </div>
            </div>


            <div class="modal fade" id="same-time" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="title"><i>Best Practice</i>: Developer notifies the locality before or at the same time as submitting the NOI to the SCC</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            It is encouraged that the developer apply for local certification (begin the process of completing local certification requirements) before submitting their NOI.
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="local-certification" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="title">Local Certifications Process</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            Possible components of the local certifications process include, but are not limited to:
                            <ol type="1">
                                <li>2232 Comprehensive Plan Review or Siting Agreement</li>
                                <li>Municipal/County Zone Review</li>
                            </ol>
                            If applicable, local certification will be granted at the conclusion of steps 1 and 2.
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="submit-certification" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="title">Submit Certification by the Governing Body of the Locality</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                        This is the first of the two permit requirements, as laid out in <a href="https://law.lis.virginia.gov/admincode/title9/agency15/chapter60/section130/" target="_blank">9VAC15-60-130</a>. Once the project has been deemed to meet the local certification criteria, submit local certification that the project complies with local land use ordinances. No statutory review time limits or public hearings required.
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="location-certification" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="title">Local Certification Process (Zoning, 2232, Review, Siting Agreement)</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            Possible components of the local certifications process include, but are not limited to: 
                            <br>
                            <ol type = "1">
                                <li> <a href = "https://law.lis.virginia.gov/vacode/title15.2/chapter22/section15.2-2232/">15.2-2232</a> Comprehensive Plan review or Siting Agreement</li>
                                <li>Municipal/County Zoning Review</li>
                            </ol>

                            If applicable, local certification will be granted at the conclusion of steps 1 and 2.

                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="permits-inspections" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="title">Construction Permits and Inspections</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            Construction permits and inspections occur after the state permit is obtained. Required permits and inspections may include, but are not limited to: 
                            <br>
                            <ol type="1">
                                <li>Local Stormwater/Erosion/Sedimentation Permit</li>
                                <li>Municipal/County Construction Permit </li>
                                <li>Municipal/County Electrical Permits </li>
                                <li>Municipal/County Traffic Study/Permit </li>
                                <li>Traffic Management Plan</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

class SCC extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="modal fade" id="director-letter" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Letter to the Director of the Division of Energy Regulation</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        Virginia Administrative Code <a href="https://law.lis.virginia.gov/admincodefull/title20/agency5/chapter302/" target="_blank">20VAC5-302-10</a> indicates that the construction of electric generating facilities with rated capacity of 5 MW or less are exempt from formal filing requirements with the SCC. In its place, the Commission requires that the "persons desiring to construct such facilities shall:                                         
                        <ol type="1">
                                <li>Submit a letter to the Director of Energy Regulation stating the location, size, and fuel type of facility, and</li>
                                <li>Comply with all other federal, state, and local requirements"</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="scc-issuance" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Issuance of Permit</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        Upon completion of all requirements as listed in Virginia Administrative Code <a href="https://law.lis.virginia.gov/admincodefull/title20/agency5/chapter302" target="_blank">20VAC5-302-10 </a>, the applicant is legally exempt from formal filing process for the authority to conduct and operate an electric generating facility with a rated capacity of 5 MW or less.
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="scc-same-time" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title"><i>Best Practice</i>: File for CPCN at the same time as the locality application</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                    Upon compiling all necessary materials required within the CPCN for electric generating facilites greater than 5 MW and less than or equal to 100 MW, the applicant should submit the completed application to the State Corporation Commission at the same time as the necessary locality application(s). 
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="scc-same-time-100" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title"><i>Best Practice</i>: File for CPCN at the same time as the locality application</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        Upon compiling all necessary materials required within the CPCN for electric generating facilities greater than 100 MW, the applicant should submit the completed application to the State Corporation Commission at the same time as the necessary locality application(s). 
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="scc-egf" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Application for SCC Authority to Construct and Operate an EGF</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        This application provides information needed for the SCC to determine if a project meets permitting requirements. <i>Application for a PJM Interconnection Service Agreement is a prerequisite</i>. 
                        <br><br>
                        Submit Applications To: Office of the State Corporation Commission <br>
                        Contact: Director of the Division of Public Utility Regulation, Virginia State Corporation Commission
                        <br><br>
                        
                        Permit Requirements (From <a href="https://law.lis.virginia.gov/admincodefull/title20/agency5/chapter302/" target="_blank">20VAC5-302-25</a>): <br>
                            <ol type="1">
                                <li>Legal name of applicant and any trade name.</li>
                                <li>Description of the applicant's authorized business structure.</li>
                                <li>Name and business addresses of all principal corporate officers, directors, partners, and LLC members.</li>
                                <li>Financial information for applicant/participants in project.</li>
                                <li>Discussion of the applicant's qualifications.</li>
                                <li>Specific information about the site for the proposed facility.</li>
                                <li>Description of the proposed facility, type of facility, size and fuel type.</li>
                                <li>Description of the fuel supply arrangement for the proposed facility.</li>
                                <li>Economic impacts of the project.</li>
                                <li>List of other local, state, or federal government agencies with approval requirements and their status.</li>
                                <li>Analysis of environmental impacts. This analysis shall include, but is not limited to, the impacts on the environment and natural resources, analysis of alternatives considered, unavoidable adverse impacts, mitigation measures proposed to minimize unavoidable impacts, and any irreversible environmental changes. <i>"The information required by this subdivision shall be submitted to the Department of Environmental Quality, simultaneously with its filing with the commission, for coordination and review by state agencies responsible for environmental and natural resource protection."</i></li>
                                <li>Discussion of reliability impacts.</li>
                                <li>Additional information demonstrating that the proposed facility is not contrary to the public interest.</li>
                            </ol>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="pre-filed" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Submit Pre-filed Testimony in Support of Application</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        Per Virginia Administrative Code <a href="https://law.lis.virginia.gov/admincodefull/title20/agency5/chapter302/" target="_blank">20VAC5-302-20</a>, the applicant is responsible for the submission of "prefiled testimony in support of the application" for the authority to construct and operate an electric generating facility with a rated capacity of over 100 MW. (Note: this is a key distinction between the permitting requirements for facilities rated above 5 MW and below 100 MW (20VAC5-302-25). 
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="deq-oeir" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">SCC Initiates Sister Agency Review with DEQ OEIR</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                    Per <a href="https://law.lis.virginia.gov/admincode/title20/agency5/chapter302/section25/" target="_blank">20VAC5-302-25, 11</a>, an analysis of the environmental impact of the project is one of the required components of a complete application for the authority to construct and operate an EGF with rated capacity < 100 MW. "The information required by this subdivision shall be submitted to the Department of Environmental Quality, simultaneously with its filing with the commission, for coordination and review by state agencies responsible for environmental and natural resource protection."
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="scc-issuance-cpcn" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Issuance of CPCN for Facilities >5 MW but ≤ 100 MW</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                    Upon completion of all application requirements and required modifications, the applicant will be issued a permit by the SCC granting them the authority to contruct and operate an electric generating facility with rated capacity greater than 5MW but no larger than 100MW.
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="deq-oeir-100" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">SCC Initiates Sister Agency Review with DEQ OEIR</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                    Per <a href="https://law.lis.virginia.gov/admincode/title20/agency5/chapter302/section25/" target="_blank">20VAC5-302-25, 11</a>, an analysis of the environmental impact of the project is one of the required components of a complete application for the authority to construct and operate an EGF with rated capacity >100 MW. "The information required by this subdivision shall be submitted to the Department of Environmental Quality, simultaneously with its filing with the commission, for coordination and review by state agencies responsible for environmental and natural resource protection."
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="deq-oeir-cpcn-5" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">SCC Initiates Sister Agency Review with DEQ OEIR</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        Per <a href="https://law.lis.virginia.gov/admincode/title20/agency5/chapter302/section25/" target="_blank">20VAC5-302-25, 11</a>, an analysis of the environmental impact of the project is one of the required components of a complete application for the authority to construct and operate an EGF with rated capacity > 5 MW but ≤ 100 MW. "The information required by this subdivision shall be submitted to the Department of Environmental Quality, simultaneously with its filing with the commission, for coordination and review by state agencies responsible for environmental and natural resource protection."
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="scc-100" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Application for SCC Authority to Construct and Operate an EGF</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                    This application provides information needed for the SCC to determine if a project meets permitting requirements. <i>Application for a PJM Interconnection Service Agreement is a prerequisite.</i> 
                    <br><br>
                    Submit Applications To: Office of the State Corporation Commission <br>
                    Contact Name: Director of the Division of Public Utility Regulation, Virginia State Corporation Commission
                    <br><br>
                    Permit Requirements (From <a href="https://law.lis.virginia.gov/admincodefull/title20/agency5/chapter302/" target="_blank">20VAC5-302-20</a>):

                        <ol type="1">
                            <li>Legal name of applicant and any trade name.</li>
                            <li>Description of the applicant's authorized business structure.</li>
                            <li>Name and business addresses of all principal corporate officers, directors, partners, and LLC members.</li>
                            <li>Financial information for applicant/participants in project.</li>
                            <li>Prefiled testimony supporting project. <i>This is not a requirement for projects >5 MW but ≤100 MW</i>.</li>
                            <li>Discussion of the applicant's qualifications.</li>
                            <li>Specific information about the site for the proposed facility.</li>
                            <li>Specific information about the proposed facility.</li>
                            <li>Description of the fuel supply arrangement for the proposed facility.</li>
                            <li>"A discussion of economic impacts (both positive and negative), of the project. The discussion should address the tax and employment implications of the project."</li>
                            <li>List of other local, state, or federal government agencies with approval requirements and their status.</li>
                            <li>Analysis of environmental impacts. This analysis shall include, but is not limited to, the impacts on the environment and natural resources, analysis of alternatives considered, unavoidable adverse impacts, mitigation measures proposed to minimize unavoidable impacts, and any irreversible environmental changes. <i>"The information required by this subdivision shall be submitted to the Department of Environmental Quality, simultaneously with its filing with the commission, for coordination and review by state agencies responsible for environmental and natural resource protection."</i></li>
                            <li>Discussion of reliability impacts.</li>
                            <li>Additional information demonstrating that the proposed facility is not contrary to the public interest.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="scc-cpcn-5" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Issuance of CPCN for Facilities >5 MW but ≤100 MW</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        Upon completion of all application requirements and required modifications, the applicant will be issued a permit by the SCC granting them the authority to contruct and operate an electric generating facility with rated capacity greater than 5MW but no larger than 100MW.
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="generalInfoModal" tabindex="-1" role="dialog" aria-labelledby="generalInfoModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="generalInfoModalLabel">General Information</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- Content for General Information -->
                    Insert your general information content here.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    
        <div class="modal fade" id="costsModal" tabindex="-1" role="dialog" aria-labelledby="costsModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="costsModalLabel">Costs: Final Agreement Security</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- Content for Costs: Final Agreement Security -->
                    Insert your costs content here.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>



        <div class="modal fade" id="scc-cpcn" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Issuance of CPCN for Facilities >100 MW</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        Upon completion of all application requirements and required modifications, the applicant will be issued a permit by the SCC granting them the authority to contruct and operate an electric generating facility with rated capacity greater than 100 MW.
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="scc-hearing" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="title">Public Notice and Hearing Requirements</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                    <i>The following only applies to projects equal to or greater than 150 MW.</i>
                    <br><br>
                    Code of Virginia <a href="https://law.lis.virginia.gov/vacode/title56/chapter1/section56-46.1/" target="_blank">§ 56-46.1</a> establishes formal procedures for the SCC notice and hearing process related to the permit approval for electric generating facilities. As noted in subsection I: "the provisions of this section shall not apply to the construction and operation of a small renewable energy project". Because Virginia Code § 10.1-1197.5 defines a "small renewable energy facility" as "an electrical generation facility with a rated capacity not exceeding 150 megawatts that generates electricity only from sunlight or wind", these procedures are only required for projects equal or exceeding a rated capacity of 150 MW. 
                    <br><br>
                    The notice and hearings procedures as listed in Code of Virginia <a href="https://law.lis.virginia.gov/vacode/title56/chapter1/section56-46.1/" target="_blank">§ 56-46.1</a> are as follows: "no electrical transmission line of 138 kilovolts or more shall be constructed unless the State Corporation Commission shall, after at least 30 days' advance notice by:" (1) publication in a newspaper that circulates in the areas through which the proposed line is to be built, (2) formal written notice sent to the governing bodies of the affected localities, and (3) causing to be sent to all property owners within the route of the proposed line. 
                    <br><br>
                    For more details, refer to Code of Virginia <a href="https://law.lis.virginia.gov/vacode/title56/chapter1/section56-46.1/" target="_blank">§ 56-46.1</a>. 
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('nav-bar', NavBar);
customElements.define('swim-bar', SwimLaneNavBar);
customElements.define('abbrev-list', Abbrev);
customElements.define('footer-swim', SwimFooter);
customElements.define('footer-', Footer);
customElements.define('swim-lane', SwimLane);
customElements.define('deq-', DEQ);
customElements.define('inter-', Interconnections);
customElements.define('localities-', Localities);
customElements.define('federal-reviews', FederalReview);
customElements.define('scc-', SCC);


$('#myModal').on('shown.bs.modal', function() {
    $('#myInput').trigger('focus')
})