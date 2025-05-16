# Project2js

## Code Institute - First Milestone Project: User Centric Frontend Development.
# Table of Contents
- [Bookk](# Project2js)
  - [Code Institute - Second Milestone Project: Java Script.](#code-institute---second-milestone-project-user-centric-frontend-development)
- [Table of Contents](#table-of-contents)
  - [Demo](#demo)
    - [A live demo to the website can be found here](#a-live-demo-to-the-website-can-be-found-here)
  - [UX](#ux)
  - [User stories](#user-stories)
    - [Strategy](#strategy)
    - [Scope](#scope)
    - [Structure](#structure)
    - [Skeleton](#skeleton)
    - [Surface](#surface)
  - [Technologies](#technologies)
  - [Features](#features)
    - [Existing Features](#existing-features)
    - [Features Left to Implement](#features-left-to-implement)
  - [Testing](#testing)
    - [Validator Testing](#validator-testing)
    - [Bugs](#bugs)
  - [Deployment](#deployment)
  - [Credits](#credits)
    - [Content](#content)
    - [Media](#media)
    - [Acknowledgements](#acknowledgements)

## Demo

![Responsive devices -home](assets/images/readme/ Need Bookkepping?.png)

![Responsive devices -home](assets/images/readme/ Quiz-p1.png)

![Responsive devices -home](assets/images/readme/ Quiz-p2.png)

![Responsive devices -home](assets/images/readme/ Quiz-p2a.png)

![Responsive devices -home](assets/images/readme/ Feedback.png)

![Responsive devices -home](assets/images/readme/ Form-1040.png)

![Responsive devices -home](assets/images/readme/ Booking Facts.png)



![Responsive devices -recipes](assets/images/readme/Get a Prize!)

### A live demo to the website can be found [here](https://cynthiapinedoh79.github.io/Project2js/
)

## UX
This website is designed for individuals and businesses interested in professional bookkeeping services — from tax return support to general accounting solutions.

Visitors can explore summarized information about our offerings, take a quick quiz to evaluate whether they need bookkeeping support, or even win a special prize such as a bookkeeping bonus or discount!

The site serves as an engaging introduction to bookkeeping services, using clear, visual content with the purpose of informing and inviting users to take action.

Main Goals of This Site:
1.  Establish a strong online presence
2.  Promote our bookkeeping and tax-related services
3.  Attract and convert new clients
4.  Encourage visitor interaction through a fun quiz and prize feature
5.  Present key service highlights through "Check This!" Bookkeeping Fact Cards
6.  Offer a ready-to-fill IRS Form 1040 as part of our service suite
7.  (Coming Soon) Compare tax savings and benefits between LLC and S-Corp structures
8.  (Coming Soon) Match Game- to provide brief, practical tips for better financial management — helping visitors make smarter decisions about bookkeeping, taxes, and business structure with clear, brief, and easy-to-understand content.

## User stories
- My Goal as Developer:
As the sole developer of this website, my mission is to provide you with an enjoyable and user-friendly experience while delivering clear, concise, and accurate information about our services — sparking your interest in what we offer.

- User Experience Objectives:
From the user’s perspective, I’ve built this site with the following priorities in mind:

- I want to navigate this website quickly and easily.
- I should be able to use a mouse, keyboard, or touchscreen effortlessly.
- I value high-quality, well-organized information that I can consume in just a few minutes.
- As a user, I need a simple and clear way to get in touch with you.

  ### First-Time Visitor Goals

  - As a First Visitor Goals:
      1. To quickly understand the main purpose of the site and discover what your company offers.
      2. To navigate the site effortlessly and find content that captures my interest.
      3. To be visually engaged by an attractive and inviting website that encourages me to explore further.
      4. To easily locate your contact information — ideally supported by testimonials or customer reviews to build trust.

  ### Returning Visitor Goals

  - As a Returning Visitor, 
       1. To find more detailed information about the services provided, including working hours.
       2. To easily discover the best way to contact the organization for any questions or support.
       3. To understand the available methods of communication — whether through Zoom, Skype, phone, or in-person meetings.

  ### Frequent User Goals
  - As a Frequent User,
       1. To conveniently access and fill out IRS Form 1040 directly through the site.
       2. To view brief and clear comparisons — such as LLC vs. S-Corp — to help make informed decisions.

  ### Design
  #### Colour Scheme
  #### 1. index.html (Main Page / Home)
        
  - Background: 
  A blurred photo of financial charts and a blue pen (soft blue, red, beige tones)

  - Text: Dark purple for "Needs Bookkeeping?"
  - Buttons: Quick Quiz, Check this! and Get A Prize!
    - Background Color: Purple.
    - Hover: DarkRed.
  - Color Mood: Professional, calm, and trustworthy (purple conveys reliability and creativity).

  #### 2. quiz.html (Quiz Page - Page 1)

  - Background: A soft focus image of hands joined in teamwork (brown, beige, and gray tones).

  - Card Background: Semi-transparent white.
  - Text: Black.
  - Button: Next, Submit Quiz.
    - Background Color: Muted Brown.
    - Hover: Dark Brown.

  - Alert Score: 
    - Background: Light beige or cream color.
    - Font Color: Medium to dark brown/red.
    - Background Color: Muted Brown.
    - Hover: Dark Brown.

  - Color Mood:Professional, calm, and trustworthy (purple conveys reliability and creativity)

  #### 3. feedback.html (Results Page "You May Need Help With Your Bookkeeping")
  - Background: A real-life business photo (blue jeans, papers) — neutral tones with blue and tan
  - Header: Dark gray/black
  - Card background: Soft white with subtle shadow
  - Call-to-action buttons: IRS Form-1040, Consultation.
    - Background Color: Deep purple
    - Hover: Dark Red.

  - Overall Color Mood: Trustworthy and clean with modern neutrality, purple buttons continue your branding identity.

  #### 4. form1040.html (IRS Form-1040 Page)
  - Background: Solid white background
  - Primary Action,  Section Headers & "SUCCESS" message background: Deep purple background bars with white fields as input.
  - Section titles like GENERAL INFORMATION, MAILING ADDRESS and Buttons like “Click here if filing a JOINT return”, Submit button text: Magenta
  - Field validation labels like “required!”, Error messages (e.g., “SSN must be 9 digits”): Red
  - Required fields with valid inputs: Green.
  - "Verify Age" and "Verify Spouse Age" buttons: 
    - Text color: Magenta 
    - Hover:Magenta
  - Form background section boxes: Light Purple Background
  - Invalid or empty required fields will show a border after submission: bold orange
  - Submit Button: background-hover: Yellow Accent
  - Text: Standard black/dark gray
  - Accent Color: Bright orange for headers like “THIS RETURN CAN BE FILED…”
  - Form Field Background: Light lavender/grayish purple — this maintains good contrast without looking too stark
  - Overall Color Mood: Professional and structured — balancing bold emphasis (orange) with institutional calm (lavender + purple)
  #### 5. checkThis.html (Bookkeeping Facts Page)
  - Background: Lightly visible money-themed image (dollar bills) as a faded background
  - Titles/Headers: Red shades (#C62828-like)
  - Text: Black
  - Button: Purple
  - Card Borders and Text: Varying tones of red, black, gray
  - Color Mood: More attention-grabbing and informational (reds for urgency, purple for brand consistency)
  #### 6. prize.html (Prize Page)
  - Background: Bright, abstract art (orange, blue, white swirls)

  - Title Text: Purple
  - Button: Bold magenta/dark pink
  - Color Mood: Energetic and playful — encourages participation and feels exciting

  #### Typography
  Inter, Roboto family font is the main font used throughout the whole website with Sans Serif as the fallback font in case for any reason the font isn't being imported into the site correctly. Roboto is a clean font used frequently in programming, so it is both attractive and appropriate.
  #### Imagery
  Clear and attractive images support the theme and maintain strong contrast with text for optimal readability.
  #### Description        
  This website is designed for visitors and new customers to explore, learn, win rewards, and enjoy an engaging experience while navigating through different pages.

## Five planes UXD

### 1. Strategy
Our objective is to create a website that is both professional and functional. Our focus is on design that is both intuitive and creative.

![Strategy](assets/images/readme/strategy.webp)

### 2. Scope
The site is designed for two main user groups:
1.	Visitors, who can enjoy interactive games, helpful tips, new information, and practical advice.
2.	Potential new customers, who can explore special offers like a bookkeeping bonus award, contact us easily, or quickly access the Form 1040 submission link.

![Scope pg1](assets/images/readme/scope1.webp)

![Scope pg2](assets/images/readme/scope2.webp)

### 3. Structure
The website is designed with HTML5, CSS3 and JS.

#### HTML Files Overview
1. Index.html. Entry point of the site. Asks: “Need Bookkeeping?”

2. Quiz.html. A short quiz to help users determine if they need assistance with taxes, finances, or bookkeeping.

3. Feedback.html. Displays feedback based on quiz results. High scores lead to a message with two action buttons:
    - Fill Form 1040 Now
    -	Contact Us via Website

4. CheckThis.html Linked from the main page; presents interesting Bookkeeping Facts.
5. Prize.html A fun interactive page where users can “Try Your Luck!” to win a discount or special offer.

#### CCS Files
1. quiz.css – Provides the styling for all site sections except the Form 1040 page.

2. format1040.css – Specifically styles the IRS Form 1040 section. It includes rules for showing and hiding elements, hover effects, alerts, error and success messages, and validation feedback. It also visually highlights input fields, checkboxes, and radio buttons when submitted data is invalid.

#### JS Files.
1. quiz.css – Contains the JavaScript code for all site functionality except the Form 1040.

2. format1040.css – This file handles the JavaScript for the Form 1040. Due to the form's complexity, the script is extensive and focuses specifically on validating the format and content of the entered data.


**Website Pages:**
1. **_Needs Bookkepping?:_** Main page with three buttons (Quiz, Check This! and Get a Prize!)
2. **_Quiz:_** A brief quiz with a few questions that are scored to assess user needs.
3. **_Feedback:_** A feedback message is shown if your answers indicate that you may need our help or services. It includes a link to fill out Form 1040 and a direct link to contact us through our website.
4. **_CheckThis:_** Displays Bookkeeping Fact Cards with useful information.
6. **_Prize:_** Try Your Luck! Win a special prize or bookkeeping bonus—just reach out to claim your reward!

![Structure](assets/images/readme/structure.webp)

### 4. Skeleton
The website is designed to be clear and simple. And the site has a simple tree structure with hierarchical flows from top to bottom.

**Wireframe**
The wireframe is designed using Balsamiq software 
[Balsamic](https://balsamiq.cloud/s45whoh/p56wz1i/r2278)

#### Home
![Home](assets/images/readme/wh.png)

#### Variety
![Variety](assets/images/readme/wv.png)

#### Recipes
![Recipes](assets/images/readme/wr.png)

#### Booking
![Booking](assets/images/readme/wb.png)

### 5. Surface
To create a pleasing and understandable view, I opt for natural colors such as earth, green, and a range of tones that complement and contrast each other.

*Webaim
[Tested the contrast](https://webaim.org/resources/contrastchecker/)
*Coolors
[Tested the contrast](https://coolors.co/contrast-checker/33008a-f8f8ff)

_Main color palette_
![Main color Palette](assets/images/readme/PalletColors.png)

## Technologies
1. HTML - Used to build the basic structure of the website.
2. CSS - Styles the front-end to create a visually appealing design and enhance user experience.
3. Balsamiq - Used to design wireframes and plan the layout of the site before development.
4. JS -  Adds interactivity to the website, making the experience more dynamic and engaging for users.



## Features
### Existing Features

#### Needs Bookkeeping?

Headline Prompt:

- "Needs Bookkeeping?" – A clear, central question targeting the user’s intent.

- Background Image: A professional, finance-related image (charts and a hand with a pen) that supports the bookkeeping theme.

- Call-to-Action (CTA) Buttons:

  - Quick Quiz – Likely leads to an interactive assessment to evaluate bookkeeping needs.

  - Check This! – Possibly redirects to a page with useful bookkeeping facts or tips.

  - Get A Prize! – An engaging gamified option to win discounts or special offers.

- Visual Styling: High contrast between button text (white) and button background (dark purple).

- Ver dark green header text that draws attention.

- Central alignment of all content for focus and simplicity.

- Transparent background or slight blur behind text for better readability on the image.
  
![quickQuiz_page](assets/images/readme/quickQuiz.png)


#### Quiz

This interactive quiz helps users determine whether they may need bookkeeping support. It consists of two short sections:

1. Bookkeeping Habits – Questions focused on time spent, disorganization, and tracking issues.

2. Tax Season Challenges – Questions related to stress during tax season and recordkeeping for deductions.

Each question offers Yes / Sometimes / No options. Based on the user’s responses:

  - A score out of 10 is calculated.
  - A personalized feedback message is shown.

If the score suggests the user might need help (> 6 pts), they are redirected to relevant services like Form 1040 submission or contact options.

The clean UI, transparent card background, and motivating CTA buttons make the experience smooth and user-friendly.


![quiz_page1](assets/images/readme/quiz-p1.png)
![quiz_page2](assets/images/readme/quiz-p2a.png)

#### Feedback

Bookkeeping Assessment Result: After completing the quiz, users who score within a certain range are shown a feedback message:

Headline: You May Need Help With Your Bookkeeping.

Message: 
A supportive summary that explains the result:  
- "Based on your responses, it appears you could benefit from professional bookkeeping assistance."

- What the Service Includes:
  - A bullet-point list highlights the key benefits:
  - Organization of overdue books
  - Tax preparation and deduction planning
  - Income and expense tracking
  - Personalized tax advice

- Call-to-Action Buttons:
  - IRS Form-1040 – Directs the user to begin completing the official tax form with us.
  - Request a Free Consultation offering an easy way to reach out and get help.

- Design Notes:
  - Clean, transparent card UI over a background image related to finance/taxes.
  - Clear visual hierarchy with bold headlines, informative content, and strong CTAs.
  - Colorful, accessible buttons for quick action.

![feedback_page](assets/images/readme/feedback.png)

#### Format 1040

Page Header
- Title: Bold and clear – “IRS FORM-1040 2024”

- Spanish Forms Print Options:
  - On screen and printed
  - Printed only

Form Sections and Features
- Main Information Sheet

- Cleanly organized into collapsible sections

- Required fields marked with red asterisks and inline validation (e.g., “SSN must be 9 digits”)

- Real-time feedback with color-coded borders (red = error, green = valid)

- Joint Information

- Clearly labeled call-to-action button: "Click here if filing a JOINT return..."

- Mailing Address

- Zip and phone inputs validated with live success messages

- Dropdown menus for state selection

- Phone Number and Type

- Validated with specific format (e.g., (909) 372-5197

- Includes time-of-day type preference

- Birth Date Section (labeled as “Bird Date”)

- Age verification with visual feedback

Submission Feedback
- Success Message: Large, bold confirmation banner: “SUCCESS! Form submitted successfully!”
- Submit Button: Dark Res and hover styled in yellow with strong contrast and clear call to action.

![Format 1040_page](assets/images/readme/f.png)
![Format 1040_page](assets/images/readme/f1.png)
![Format 1040_page](assets/images/readme/f2.png)
![Format 1040_page](assets/images/readme/f3.png)
![Format 1040_page](assets/images/readme/f4.png)
![Format 1040_page](assets/images/readme/f5.png)
![Format 1040_page](assets/images/readme/f6.png)
![Format 1040_page](assets/images/readme/f7.png)



#### Check This!
Bookkeeping Facts – Informational Section
This interactive panel provides users with quick, digestible insights into bookkeeping essentials. Each fact is visually supported with a relevant image and a concise explanation.

Card Topics:
- What is Bookkeeping? 
Explains the core definition and purpose of recording financial transactions.

- Tired of Paperwork?
Acknowledges the burden of bookkeeping while reinforcing its importance for business success.

- Numbers Didn't Match
Highlights the consequences of inaccurate bookkeeping such as discrepancies and poor financial management.

- Invoices
Emphasizes the importance of invoices in tracking sales and purchases.

- Unorganized
Stresses how disorganized records can become overwhelming and lead to errors.

- Gross, Net, and Taxable Income
Educates users on key income terms:

  - Gross Income = total revenue before expenses

  - Net Income = profit after expenses

  - Taxable Income = income subject to tax

- Design Highlights:
Consistent card layout with bold titles and brief content.

- Visually engaging with contextual images to aid understanding.

- A "Clear facts" button for interactivity (possibly resets or filters facts).

- Background includes a money-themed image for subtle visual relevance.

![checkThis!_page](assets/images/readme/booking.checkThis!.png)


#### Get a Prize!
Try Your Luck! – Interactive Prize Game
An engaging and gamified feature that rewards users for exploring your services.

How It Works:
Users are presented with four mystery cards.

Each card is styled with a golden gradient and a ? mark to indicate a hidden offer.

Upon clicking one card, it flips over to reveal a special reward (e.g., “50% OFF on Your First Consultation”).

A “Back” button allows users to return to the main site.

Design Highlights:
- Modern, colorful background with abstract art for visual impact.

- Hover and flip effects make the interaction feel dynamic and responsive.

- Centered card layout keeps the user’s focus on the reward selection.

Purpose:
- Boosts user engagement.

- Provides an incentive to try services.

- Encourages users to contact you or schedule a consultation.

![contact_section](assets/images/readme/prize.webp)


### Features Left to Implement
Towards the future,
* I would like to improve the performance of the website.

1. Tax Structure Comparison Tool
An interactive feature that helps users compare LLC vs. S-Corp structures in terms of:

  -Tax savings potential
  -Liability protection
  -Administrative requirements
  -Suitability based on business type or income level

This tool will assist small business owners in choosing the right entity type to maximize financial efficiency and minimize tax burden.

2. Financial Match Game
A fun, educational mini-game designed to reinforce key financial tips.
Users will match cards that highlight:

  - Best practices for bookkeeping
  - Smart tax strategies

Business structure insights (LLC, S-Corp, Sole Prop, etc.)
The game will deliver practical, easy-to-understand content that helps users make smarter business and tax decisions, all while keeping the learning experience enjoyable.

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5) Hypertext Markup Language.
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) Cascading Style Sheets.
-   [JS](https://en.wikipedia.org/wiki/JavaScript) JavaScript.

## Technologies Used

### Frameworks, Libraries & Programs Used

1. [Bootstrap 5.3.3:](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website. This framework helps designing websites. It includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels, etc. It also gives you support for JavaScript plugins. 
2. [Hover.css:](https://ianlunn.github.io/Hover/)
    - Hover.css was used on the Social Media icons in the footer to add the float transition while being hovered over.
3. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Titillium Web' font into the style.css file which is used on all pages throughout the project.
4. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes. Designers love the use of icons as fonts because of the flexibility of styling available with high-quality iconography on every device.
5. [jQuery:](https://jquery.com/)
    - jQuery came with Bootstrap to make the navbar responsive but was also used for the smooth scroll function in JavaScript. JQuery for DOM manipulation.
6. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
7. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
8. [Visual Studio Code:](https://code.visualstudio.com/)
    - Visual Studio Code for code editor with AI.
9. [Photoshop:](https://www.adobe.com/ie/products/photoshop.html)
    - Photoshop was used to create the logo, resizing images and editing photos for the website.
10. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [wireframes](https://balsamiq.cloud/s45whoh/p56wz1i/r2278) during the design process.
11. [Responsive Screenshots](https://ui.dev/amiresponsive)
    - To able to get responsive screenshoots from different devices.
12. [Contrast Checker](https://webaim.org/resources/linkcontrastchecker/?fcolor=CDA37C&bcolor=FFFF00)
    - Webaim Contrast Checker.
13. Lighthouse by Google-Inspect
    - Generate a Lighthouse report by Google: Performance, Accesibility, Best Practices, and SEO.
14. W3C MArkup Validator
    -   [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
15. W3C CSS Validator
    -   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
16. Sqoosh App to resize or compress image files
    -   [Sqoosh app](https://squoosh.app/)
17. Youtube
    -   [Youtube](https://www.youtube.com/)


## Testing
* I tested the site, and it works in different web browsers: Chrome, Firefox, Safari and Microsoft Edge.
* On mobile devices, I tested the site on Pixel 7 XL Pro.
* I confirmed that the site is responsive and functions on different screen sizes using the devtools device toolbar.
* I confirmed that the navigation, pages and differents sections are readable and easy to understand.
* I confirmed that the form works: it requires entries in the most important fields, only accepts an email in the email format, and the submit buttons work.

**The W3C Markup Validator** and **W3C CSS Validator** Services were used to validate every page of the project to ensure there were no syntax errors in the project.

**Header**. NAV Menu allows to access to each individual page successfully.

**Footer**. Social Media allows to new pages with successful link.

**Responsive Design** for all pages.

### Validator Testing
## HTML
All pages passed through the official W3C validator with no errors.

  #### Home: index.html
  ![Home](assets/images/readme/W3C-index.html.png)


  #### Variety: variety.html
  ![Variety](assets/images/readme/W3C-variety.html.png)


  #### Recipes: recipes.html
  ![Recipes](assets/images/readme/W3C-recipes.html.png)


  #### Booking: booking.html
  ![Booking](assets/images/readme/W3C-booking.html.png)


## CSS
CSS code passed through the official (Jigsaw) W3C validator with no errors.

  #### CSS: style.css
  ![CSS](assets/images/readme/W3C-style.css.png)

  
* **Accessibility**
  * Lighthouse DevTools by Google

  ![Lighthouse DevTools Home](assets/images/readme/hlh.webp)
  ![Lighthouse DevTools Variety](assets/images/readme/vlh.webp)
  ![Lighthouse DevTools Recipes](assets/images/readme/rlh.webp)
  ![Lighthouse DevTools Booking](assets/images/readme/blh.webp)

  ### Testing User Stories from User Experience (UX) Section

   #### First Time Visitor Goals

    1. As a First Time Visitor, my objective is to easily comprehend the main purpose of the site and learn more about the organization or company.
        * Upon entering the site, users access to a clean and easily readable navigation bar to go to the page of their choice.
        * The main pages are made with a background images and atractive colors, easy to read.
        * The user call to action throught buttons.

    2. I want to be able to easily navigate through the site to find content that interests me.
        * The site has been designed to be fluid and never to entrap the user. At the top of each page there is a clean fixed navigation bar.
        * Each page has a distinct subject matter with distinct subsections of categories of information.

    3. I want to look for testimonials to understand if they are trusted. 
        * The new visitor can read reviews.
    
    4. I also want to locate their social media links to see their posts, their followings and determine how trusted and known they are.
        * The user can find at the bottom of any page the social media links in the footer.

   #### Returning Visitor Goals

    1. As a Returning Visitor, I want to find more information about the services that they provide and working hours.
        * These are shown in Contact us seccion on home page.

    2. I want to find the best way to get in contact with the organisation with any questions I may have.
        * The navigation bar clearly highlights the "Contact Us" seccion.
        * User can find our information like address, phone number and email to be able to contac us for any question.
        * Here they can fill out the form on the Booking page or are told that alternatively they can message the organisation on social media.
        * The footer contains links to the organisations Facebook, Twitter, Instagram, LinkedIn, Pinterest, YouTube pages, etc
        * Whichever link they click, it will be open up in a new tab to ensure the user can easily get back to the website.
        * The email button is set up to automatically open up your email app and autofill there email address in the "To" section.


  #### Frequent User Goals

    1. As a Frecuent User, I want to schedule an apointment.
        * On the Booking page, the user can schedule an appointment by filling the form.

### Further Testing

-   The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
-   The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX.
-   A large amount of testing was done to ensure that all pages were linking correctly.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Bugs
 **Solved bugs**
  * A lot of bugs but all eventually resolved.
  * Some misspelled words were corrected.

  **Unsolved bugs**
  * The webpage needs improvement, such as using images with less capacity but maintaining the same quality.
  * Remove the CSS code that is no longer needed or used.
  * Webpage on Performance Lighthouse by Google has a few issues to fix.

## Deployment

  ### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Under General, navigate to Code and Automation on the left column and select 'Pages'.
4. Scroll down the Settings page until you locate the "GitHub Pages" Section.
5. Under "Source", click the dropdown called "None" and select "Master Branch".
6. The page will automatically refresh.
7. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.


## Credits
* Code Institute
* Inspiration from [Potatoegoodness](https://potatogoodness.com/)
* Peru: Instagram and website [peru.travel](https://www.peru.travel/es/masperu/papa)
* Great Big Story - Channel from Youtube [youtube](hhttps://www.youtube.com/watch?v=p9qWJ89m-hY)
* pamperedchef.com
* olivado.com
* cuban-recipes/boniatillo
* mybartender.com/recipe

### Code

-   [StackOverflow post](https://stackoverflow.com)

-   [Bootstrap 5.3.3:](https://getbootstrap.com/docs/5.3/getting-started/introduction/): Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System.


### Content
* I used as example from the Code Institute's [Love Running](https://github.com/Code-Institute-Solutions/love-running-2.0-sourcecode/tree/main) project.
[the last one](https://github.com/Code-Institute-Solutions/love-running-2.0-sourcecode/tree/main) project.

-   All content was written by the developer.

-   Psychological properties of colours text in the README.md was found [here](http://www.colour-affects.co.uk/psychological-properties-of-colours)

### Media

- [freestocks](https://freestocks.org/)
- [pixabay](https://pixabay.com/)
- [unsplash](https://unsplash.com/)
- [pexels](https://pexels.com/)

### Acknowledgements

* The the Code Institute tutor support team for helping me with the correct guidance.
* My mentor, Medale Oluwafemi, for his meanful advices and continuous helpful feedback.
* Tutor support at Code Institute for their support.
* Code Institute for the invaluable course.
* I received inspiration for this project from learning about the different example projects from Code Institute.