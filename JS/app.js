/* 
        Global Variables
 */
        const NavUl        = document.querySelector('.navList');
        const Nav          = document.querySelector('nav');
        const UlNav        = document.querySelector("ul");
        const SectionLinks = document.getElementsByClassName("list");
        const Main         = document.querySelector('main');
        
        /*
            Navbar 
        A for of loop that loops over array of sections and creating li t every section exist
        and appending them to the boxes over them like Ul and Nav then I Pushed the lis to the array
        after the loop ended I added a Name for every li in the array

        */
        
        const sections = Array.from(document.getElementsByTagName("section"));
        const Header = document.querySelector('.page-header');
        
        let ListArray = [];
        
        for(let section of sections){
            const listItem = document.createElement("li");
        
            NavUl.appendChild(listItem);
            Nav.appendChild(NavUl);
            Header.appendChild(Nav);
            Main.appendChild(Header);
            document.body.appendChild(Main);

            ListArray.push(listItem);
          }
          ListArray[0].textContent ="Profile";
          ListArray[1].textContent ="About";
          ListArray[2].textContent ="Content";
          ListArray[3].textContent ="More Information";
        
        /* 
            Check Active in Navbar
        It's time to check if class active is exist or not if it's not exist so it will be added when
        the li clicked 
        */
       
        for(let i = 0 ; i < ListArray.length ; i++){
          ListArray[i].addEventListener("click", function() {
                            const AlreadyActive = document.getElementsByClassName("active");
                            if (AlreadyActive.length > 0) {
                                AlreadyActive[0].className = AlreadyActive[0].className.replace(" active", "");
                                }
                            this.className += " active";
                            });
                        }


        /*
            Scrolling to sections Name 
        Section links is an array defined in the global variables
        AddEventListener is used so when the user click on the Profile in Navber it will scroll to Profile Section
        but sometimes you need to click on the Li twice to scroll to the right position
        
        */
        
        
                const Profile = ListArray[0];
                Profile.addEventListener('click', function (event) {
                                                event.preventDefault();
                                                document.querySelector("#FirstSection").scrollIntoView({behavior: "smooth"});
                                            });
                const AboutUsNav = ListArray[1];
                AboutUsNav.addEventListener('click', function (event) {
                                                event.preventDefault();
                                                document.querySelector("#SecondSection").scrollIntoView({behavior: "smooth"});
                                            });
        
                const ContactUsNav = ListArray[2];
                ContactUsNav.addEventListener('click', function (event) {
                                                event.preventDefault();
                                                document.querySelector("#ThirdSection").scrollIntoView({behavior: "smooth"});
                                            });
        
                const MoreInfoNav = ListArray[3];
                MoreInfoNav.addEventListener('click', function (event) {
                                                event.preventDefault();
                                                document.querySelector("#FourthSection").scrollIntoView({behavior: "smooth"});
                                            });
        
        
        
        /* 
            Main Page Heading
        Appending to the main section and just adding some attributes and stylels
        */
        const mainHeading = document.querySelector('h1');
        const PageNameHeader = document.querySelector('.PageName');
        
        PageNameHeader.appendChild(mainHeading);
        Main.appendChild(PageNameHeader);
        mainHeading.setAttribute('class' , 'MainPageHeading');
        mainHeading.textContent = "Landing Page";
        mainHeading.style.marginTop= '100px';
        
        
        
        
        /*
            Sections 
        A function that holds an array for the Names, h2 Pushed to it
        Then For loop, looping on the sections and creating the containers, h2 , and pharagraphs
        Appending them together to the main section and adding the text to the pharagraphs
        then adding some attributes to each one of them 
        after the loop finishes, I give each section a name
        
        */
        
        function Section(){
            
        let SectionName = [];
        for(let i = 0 ; i < ListArray.length  ; i++){
                const MainSection      = document.querySelector('section');
                const DivOfSection     = document.createElement('div');
                const SectionH2        = document.createElement('h2');
                const Pharagraph       = document.createElement('p');
                const SecondPharagraph = document.createElement('p');
        
                DivOfSection.appendChild(SectionH2);
                DivOfSection.appendChild(Pharagraph);
                DivOfSection.appendChild(SecondPharagraph);
        
                MainSection.appendChild(DivOfSection);
                Main.appendChild(MainSection);
                document.body.appendChild(Main);

                SectionName.push(SectionH2);
        
                Pharagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectuspharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris actincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinarquam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus.Sed congue et odio sed euismod.";
                SecondPharagraph.textContent = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacusaliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";
            
                SectionH2.setAttribute('class' , 'SectionHeading');
                Pharagraph.setAttribute('class' , 'Text');
                SecondPharagraph.setAttribute('class' , 'bottom-text');
                DivOfSection.setAttribute('class' , 'Container');
            }
        
                SectionName[0].textContent = "Profile";
                SectionName[1].innerHTML = "About";
                SectionName[2].innerHTML = "Contact";
                SectionName[3].innerHTML = "More Information";
        }
        Section();
        
        
        
        
        /*
            Section Activation
        A function that holds an eventListerner that loops over every section with forEach
        getting the postion of the sections then A condition that add active class to the section when been scrolled
        
        */
        
        function MakeActive(){
        
            window.addEventListener('scroll', (e) => {
        
            const sections = document.querySelectorAll('section');
        
            sections.forEach( section => {
              
                const topDistance = section.getBoundingClientRect().top;
        
                    if (topDistance > 0 && topDistance < 200) {
        
                        section.classList.add('active');
        
                    } else {
        
                        section.classList.remove('active');
                    
                    }
            });
          });
        }
        MakeActive();
        
        
        /* 
            Footer
        Styling the footer here when the content of the page loaded with the eventlistener
        
        */ 
        
        document.addEventListener('DOMContentLoaded', function () {
            document.querySelector('footer').style.backgroundColor = 'black';
        });
        
        