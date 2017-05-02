--- 
layout: assessment-guide 
title: Web Standards 2017 Self-Assessment Methodology 
draft: true 
---

## Notes

-   Start with easiest wcag sc

-   Which sufficient techniques/failures does aXe not do, i.e., don’t have manual tests repeat aXe tests

    -   Need to work out which failures aXe will pick up and what it won’t. Are there any false positives or negatives?

    -   colour contrast – aXe is not the best approach for this

-   Consider decision tree approach to testing….

-   Change viewport…

-   Establish sampling and page choosing methodology

-   Ask re a11y policy (organisational, for websites, projects, other)

## Page selection methodology

copy into here. For GIS sanity testing, just pick a page known to have rich content on it.

## Web Accessibility Standard 

### Before you get started

1.  You’ll need to test your pages for multiple viewports. Accessibility issues that only appear for mobile devices will get picked up this way. To simulate a mobile or tablet experience on a desktop computer, you can resize your browser to approximately the size of an iPad-sized tablet or a smartphone. Test at both sizes - different issues appear in reaction to responsive layouts.

2.  These are not all the tests you need to have a fully accessible website. This set of tests covers the top 5 failures that were identified in the 2014 self-assessments, so they are the focus of this self-assessment. Each year we plan to review old issues and address new ones with different sets of tests, and over time we’ll build up a library of tests that covers a greater number of WCAG 2.0 requirement.

3.  ~~We need to put stuff in here about developer tools and how to use them/turn them on in Safari, IE, Chrome and FF?~~

### Automated testing

We recommend an approach that combines automated testing with manual testing. For automated testing, we recommend using aXe, an open source accessibility testing tool that comes as a browser extension for Firefox or Chrome. Follow these instructions to download and use it.

[*Easy Accessibility Testing with aXe*](http://www.deque.com/products/axe/)

~~The instructions for each test will note when aXe is a reliable method for carrying out the test.~~

### Manual testing

Most accessibility testing cannot be automated and requires manual inspection, sometimes of the underlying code.

For tests that require code inspection, the easiest way is to use the developer tools that are built into most browsers. Instructions for using each of these browser developer tools are linked below.

As a general rule, right-clicking on an element in the web page and selecting “Inspect” will open the developer tools, and the element you clicked on will be highlighted in the tool. Note: depending on where you right-click, the inspect option may be in a different order from where it was last time. On Windows, you can also press F12 (Command+Option+I on Mac OS) to open a browser’s developer tools.

If you’re new to using your browser’s developer tools, try them out on some random pages before starting the tests. And be sure to attend one or more of the clinics that will be offered before the self-assessment period and ask for a demo.

If you have to open a page’s source code to search for HTML elements, pressing Control+U (in Windows browsers) will open the page’s source code in a new tab or window. On Mac OS, use Command+Option+U in Chrome and Safari, and Command+U in Firefox.

#### Chrome DevTools

-   [*Overview*](https://developers.google.com/web/tools/chrome-devtools/)

-   [*Inspect and Edit Pages and Styles*](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/)  

-   [*Simulate Mobile Devices with Device Mode*](https://developers.google.com/web/tools/chrome-devtools/device-mode/)

#### Firefox Developer Tools

-   [*Page Inspector*](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector)

-   [*Responsive Design Mode*](https://developer.mozilla.org/en-US/docs/Tools/Responsive_Design_Mode)

#### Microsoft Internet Explorer 11 F12 Developer Tools

-   [*Using the F12 developer tools*](https://msdn.microsoft.com/en-us/library/bg182326(v=vs.85).aspx)

-   [*DOM Explorer*](https://msdn.microsoft.com/en-us/library/dn255008(v=vs.85).aspx)

-   [*Emulation*](https://msdn.microsoft.com/en-us/library/dn255001(v=vs.85).aspx)

#### Microsoft Edge F12 Developer Tools

-   [*Meet the Microsoft Edge F12 Dev Tools*](https://docs.microsoft.com/en-us/microsoft-edge/f12-devtools-guide)

-   [*DOM Explorer*](https://docs.microsoft.com/en-us/microsoft-edge/f12-devtools-guide/dom-explorer)

-   [*Emulation*](https://docs.microsoft.com/en-us/microsoft-edge/f12-devtools-guide/emulation)

#### Safari Web Inspector

-   [*Get Oriented*](https://developer.apple.com/library/content/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/GettingStarted/GettingStarted.html)

-   [*Resources and the DOM*](https://developer.apple.com/library/content/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/ResourcesandtheDOM/ResourcesandtheDOM.html)

## Terms you need to know

<dl> <dt>Focus</dt> <dd>When you use the Tab key to “tab” through a web page, the browser sets keyboard “focus” to each interactive component (e.g. links, buttons, text inputs, etc). When something has focus, you’re able to interact with it using your keyboard, like pressing Enter on a link. There should also be some kind of visual focus indicator that makes it clear to sighted users which element currently has focus.</dd>

<dt>Visual label</dt> <dd>A label you can see that tells you what to enter in a form field.</dd> </dl>

## Tests for each page

### Test 0: Automated testing

In Chrome or Firefox, run the aXe extension… Record a summary of the results and save them. You don’t need to do any more with the results at this stage.

To easily record a summary of the results, perform the following steps immediately after running the extension, and before investigating any of the individual results:

1.  click on the empty space to the right of the “Results” heading in the left-hand results summary panel of the aXe extension (or set keyboard focus to the “Analyze” button just above the “Results” heading)

2.  press Ctrl+A (Command+A in Mac OS) to select the summary of results

3.  copy the summary of results with Ctrl+C (Command+C in Mac OS)

4.  paste the summary into the designated area of the self-assessment reporting tool.

Note that any colour contrast issues identified by aXe can be transferred straight into Test 7: Colour contrast.

### Test 1: Headings

**What you need:** Basic understanding of HTML; Developer tools in your preferred browser.

**How long it takes:** about 15 minutes per page.

**Impact of failure:** Failing this requirement means some people are denied contextual information which helps them understand how content is structured on the page.

**Related WCAG success criteria:** 1.3.1 (Information and Relationships)

#### General guidance

Any visual formatting that conveys information or context about the structure of content must be marked up with proper HTML. So, if something acts and looks like a heading, mark it up as a heading. Similarly, something that is marked up as an HTML heading should look like a heading.

Give headings the right hierarchy. Heading levels give content a ranking. An `<h1>` has the highest ranking and `<h6>` has the lowest. So headings need to reflect the content hierarchy.

This means that a level 3 heading, `<h3>`, can be a subheading for a section under a level 1, `<h1>`, or level 2, `<h2>`, heading, but not vice versa.

Note: Skipping heading levels, e.g. going from `<h1>` to `<h3>`, is not a WCAG failure, but think about whether your content is structured logically. Content structure should follow in an order up and down the `<h1>` - `<h6>` hierarchy.

#### How to test

1.  On the page you’re testing, look for headings.

2.  Inspect the source code associated with each heading.

3.  Make sure the heading is either  -   wrapped in a heading element (`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>` or `<h6>`) or  -   wrapped in a generic element (e.g. `<div>`) with an ARIA `role=“heading”` and an `aria-level` attribute. Otherwise, record this as a failure.

4.  If the heading is marked up correctly, make sure that the heading level (as indicated by the number in the `<h*>` tag or the `aria-level` attribute) is appropriate given the previous heading's level and the overall structure of the content.

5.  Remember to resize your browser window and test at the size of a smaller device, e.g. tablet and smartphone.

#### Failure examples

-   Words are styled to look like a heading with large bold type rather than marked up as an HTML heading.

-   An element is styled as a heading, using CSS only and without proper HTML and/or ARIA heading markup.

-   Content that looks and acts as headings, and is not merely decorative, has been inserted into the page using CSS `:before` and/or `:after` pseudo-elements, instead of as HTML headings.

-   Headings have an illogical hierarchy, for example, an `<h5>` heading with a `<h3>` subheading. Note: skipping heading levels is not a failure. It's just not good practice.

### Test 2: Lists

**What you need:** Basic understanding of HTML; Developer tools in your preferred browser.

**How long it takes:** about 15 minutes per page.

**Impact of failure:** Failing this requirement means some people are denied important contextual information that helps them understand the content structure and meaning through the way it is shown on the page.

**Related WCAG success criteria:** 1.3.1 (Information and Relationships)

#### How to test

Content that looks like or acts like a list of items should be marked up as an HTML list, using either ul or ol with li, or dl, dt, and dd, as appropriate.

1.  Scan the page you’re testing for lists.

2.  Right-click each list and inspect the source code.

3.  Check that it is marked up using `<ol>` or `<ul>` and `<li>` for numbered or bulleted lists. Or it could use `<dl>`, `<dt>` and `<dd>` for a definition list.

#### Failure examples

-   Lists that are made to visually look like lists, with bullet points or numbers inserted as text characters, and without structural markup (`<ol>`, `<li>` etc) identifying them as lists.

### Test 3: Tables

**What you need:** Good knowledge of HTML; Developer tools in your preferred browser.

**How long it takes:** about 15 minutes per page.

**Impact of failure:** Failing this requirement means some people won’t be able to associate table data with the row and column headings that give it context, and are consequently unable to make sense of the data.

**Related WCAG success criteria:** 1.3.1 (Information and Relationships)

#### How to test

1.  Scan the page you’re testing for tables.

2.  For each table, decide if it’s a data table or a layout table.

3.  Add something here to explain the difference between data tables and layout tables.

4.  Right-click each table and inspect the source code.

5.  If it’s a data table, for any cell in the table, you should be able to identify the applicable row and column headers with one of these techniques:

    -   check that the heading row is marked up with `<th>` elements, which is sufficient for simple tables having headers in the first row and column. (This may affect the style)

    -   using scope =“col” for column headers, and scope=“row” for row headers.

> More useful for developers

-   for complex, nested tables you could use scope=”colgroup” or scope=”rowgroup” for a high-level header that spans several columns. This is applicable where, say, column headings may be nested, or if headers aren’t marked up as `<th>`. As an example of this technique, check out the Schedule table on this page: [*https://webtoolkit.govt.nz/guidance/about-the-standards/about-the-web-accessibility-standard/\#implementation*](https://webtoolkit.govt.nz/guidance/about-the-standards/about-the-web-accessibility-standard/#implementation)

-   using id attributes in header cells. Then each cell uses the headers attribute and references the id value in the header cells. This is often done with complex tables and nested heading rows. An example of this is Table 4 on this page: [*http://www.treasury.govt.nz/budget/forecasts/hyefu2016/108.htm*](http://www.treasury.govt.nz/budget/forecasts/hyefu2016/108.htm)

-   using ARIA role rowheader or columnheader to mark up header cells.

1.  If it’s a layout table, you don’t want it to be treated as a table. So it should have:

    -   none of the points above that markup header cells, or

    -   role=”presentation” or role=”none”.

#### Failure points

-   A layout table (that has been used only to visually lay out elements) uses th elements, a summary attribute, and/or a caption element.

-   A table uses id and headers attributes but incorrectly associates one or more content cells to header cells.

-   Table headers have not been marked up appropriately using one of the methods above.

### Test 4: Forms

**What you need:** Good knowledge of HTML; Developer tools in your preferred browser.

**How long it takes:** about 15 minutes per page.

**Impact of failure:** Failing this requirement means some people won’t be able to use your forms because they don’t know what information to enter in a form field, don’t know what form components do, and/or they can’t determine what information the form contains before they submit it.

**Related WCAG success criteria:** 1.3.1 (Information and Relationships) and 4.1.2 (Name, Role, Value)

Form fields must have a label to tell people what to put in the form field. And add stuff in here from 4.1.2&gt;&gt;

1.  Scan the page you’re testing for form fields.

2.  For each form field, check to see if it has a visual label.

3.  Click on the label to see if the focus moves to that field (i.e. the cursor appears in a text box, or a button or checkbox becomes checked). This means that the label element has been correctly associated with the form field element. Otherwise you could inspect the code to see if one of these criteria is met:

-   the label is in a label element that is associated with the form field element by:

    -   having the label’s for value be the same as the form control's id value, or

    -   having the label element wrap around the form control.

-   the form field uses aria-labelledby and the value is the label’s id value, or

-   the form field has a title attribute and the value is the same as the label’s text.

1.  A form control that doesn’t have a properly associated label using one of these criteria is also a failure of WCAG 4.1.2 (Name, role, value).

2.  If there is no obvious label, check the form field element for a title attribute as in step 3 above. Otherwise check to see if the form field element is using the aria-label, or aria-labelledby attributes.

#### Failure points

-   A form visually presents labels for its controls, but does not use the label element to associate each label with its control, and in the absence of label elements, labelling is not provided by either aria-label or aria-labelledby.

-   A label is applied in a text field as placeholder text, but disappears as soon as the field receives focus (i.e. when you tab or click into the text box).

-   label elements are present, but they haven’t been correctly linked to the corresponding form controls.

-   more than 1 form control in the same page has the same id value that is being referenced by a label.

-   input, select, and textarea elements do not have either :

    -   a correctly associated label element, or

    -   a properly configured aria-label, aria-labelledby, or title attribute.

### Test 5: Keyboard use

**What you need:** No particular expertise; no special tools. Don’t use Chrome or Safari for this test — those browsers may add their own visible indication of keyboard focus.

**How long it takes:** about 5 minutes per page.

**Impact of failure:** Failing this requirement means people who use a keyboard or other assistive devices instead of a mouse can’t use your site.

**Related WCAG success criteria:** 2.1.1 (Keyboard) and 2.4.7 (Focus Visible)

#### How to test

1.  On the page you’re testing, put your mouse in the address bar at the top of the page and then put your mouse aside and don’t use it.

2.  Use the Tab key to move forward through the page. Use Shift-Tab if you need to move backwards.

3.  As you move through the page, make sure you can easily see where you are.

4.  If the focus indicator is visible, but doesn’t easily stand out, simply note this in the report rather than failing it completely.

5.  Tab to every link and press Enter. Check that the link works the same as when you click on it using a mouse. Use \[?????\] to go back to the previous page.

6.  Tab to each button and press the Spacebar. Check that the button performs the same action as when clicked on with a mouse.

7.  If a pop up box appears while you’re testing, can you still navigate around inside the box and do everything in that box without using a mouse? Can you close it by either hitting the Esc key, or by navigating to a close or cancel button?

8.  Check that you can use keyboard to control things like form controls, sliders, page turners. For example:

    -   If your page has an embedded video, can you:

    -   navigate with the Tab and arrow keys?

    -   activate each control in the player using the Enter key?

    -   pause it, and raise/lower the volume?

    -   turn on captions?

    -   move past the video player and down to any links or navigation that follow it?

    -   If your page has a form, can you:

    -   move between fields using the Tab key?

    -   move through groups of radio buttons and checkboxes with arrow keys, and Spacebar to check options?

    -   use date pickers by:

    -   activating them with the Spacebar or Enter key

    -   navigating around inside them (using Tab and arrow keys), and

    -   select a date with the Enter key?

    -   type in dates instead of using a datepicker and is there a date format specified?

    -   select from drop-down options using the up/down arrow?

    -   submit the form by Tabbing to the submit button and using the Enter key?

    -   If the page contains a carousel, can you stop it, pause it, or switch between its panels using the keyboard?

#### Failure points

-   Focus disappears from an element before you can see it.

-   Using CSS to hide the browser’s default focus indicator when an element receives focus.

-   You can’t move focus to clickable elements using the Tab key.

-   You can’t select or activate a form controls with the Tab and/or arrow keys.

-   Links and buttons don’t work with the Enter key or the Space bar.

-   You can’t use the keyboard to activate a function (e.g. a video player or carousel control, etc.) that can be activated with a mouse.

-   You can’t close a pop up box using either the Esc key or by navigating to a close option and using the Enter key.

### Test 6: Images

**What you need:** Web developer toolbar installed on either Firefox or Chrome.

**How long it takes:** about 5 minutes per page.

**Impact of failure:** Failing this requirement means that users who can’t see non text content, like images, diagrams and charts, can’t get access to the information contained there.

**Related WCAG success criteria:** 1.1.1 (Non-text content) and 4.1.2 (Name, role, value)

**Note about alt text**: ‘Correct’ alt text is a highly subjective area. People don’t always agree on what the best alt text should be for any given image and situation. If you feel the alternative text reasonably describes the content of the image, given its surrounding context, that’s enough.

**Note about background images**: If you have an image that you can’t find in the source code with an `<img>` element, it has probably been added as a background image using CSS. The easiest way to confirm this is with the web developer toolbar by selecting ‘Images &gt; Outline Background Images’.

Background images should ideally only be used for decorative images because you can’t yet put alt text on a one. But if they’re being used to convey meaningful information, they must have a text alternative in the body of the page where the image appears, but it could positioned off-screen so you can’t see it.

#### How to test

1.  Scan the page you’re testing for non-text content, like images. There are a number of easy ways to do this.

    -   Using the Web Developer toolbar, select ‘Images &gt; Display Alt > Attributes’ and ‘Outline All images’. You’ll be able to see > the alt text, if there is any, for each image.

    -   Look at the HTML source code. Search for “&lt;img” to find > embedded images.

    -   Inspect anything you think might be an image.

2.  For each image, ask yourself these 3 questions:

    -   Is there meaningful information in this image or is it purely decorative?

    -   Does the image contain words?

    -   Is the image a link?

3.  If the image is not a link, check this table to find your image and what it needs to be accessible.

|        |           | |------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| | **Type of image**      | **What it needs to be accessible**            | | The image contains meaningful information.     | It needs a text alternative (alt text, max ~150 characters) that is an appropriate replacement for meaningful information in the image.       | | The image contains words.      | Include the words in the image’s alt text.            | | The image is purely decorative.    | The image’s alt text should be empty, i.e., alt="". Leaving out the alt attribute makes the image inaccessible.       | | The image is too complex to describe with alt text, like a complex image, a chart, graph or infographic.   | Use a longer text alternative to describe the image’s meaningful information using a longdesc attribute that links to the description of the image. For charts and graphs, you should provide the data in them in accessible tabular form (see Test 3).   |

1.  If you have dynamically changing images on a page:

    1.  Inspect the code of the image.

    2.  Check that the alt text for the first image matches the image.

    3.  Wait until the next image loads and then make sure that the alt text has changed to match the new image.

<!-- -->

1.  If the image is a link, check this table to find your image and what it needs to be accessible.

|        |      | |--------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------| | **Type of image link**     | **What it needs to be accessible**       | | The link is just the image with no surrounding words.  | The alt text must describe the link’s purpose or destination, e.g. the alt text for a Twitter icon might be ‘Tweet this page’.   | | The link is an image and text, and the text describes the link’s purpose or destination.   | The alt text should be empty, i.e. alt="".       | | The link is an image and text, but the image has meaningful information that isn’t in the link text.   | Include the extra meaningful information in the image’s alt text.    |

1.  If the image is a link, and it has no alt text, this is also a failure for assistive technology users. A linked image that has no way to describe the link’s destination is a failure of 4.1.2 (Name, role, value).

#### Failure points

-   The image is not purely decorative and does not have a text alternative.

-   The alternative text doesn’t convey the same information as the image.

-   An image is dynamically updated on the page but the text alternative still refers to the previous image. For example, a picture of the new minister has alternative text identifying the previous minister.

-   An image conveys information using different colours, but the alternative text doesn’t include that information.

-   The alternative text is a filename or generic placeholder text.

-   A linked image describes the image content but not the link’s purpose or destination.

-   A link contains only an img element with an empty alt attribute.

### Test 7: Colour contrast

-   use of colour (later)

**What you need:** Any one of:

-   the *WAVE Web Accessibility Evaluation Tool*

-   the Paciello Group Colour Contrast Analyser

-   the aXe….

**OR** Chrome or Firefox (or Edge???) browser and a colour evaluation website like:

-   [*Tanaguru contrast finder*](http://contrast-finder.tanaguru.com/)

-   [*WebAIM colour contrast checker*](http://webaim.org/resources/contrastchecker/)

-   [*Snook.ca Colour Contrast Check*](https://snook.ca/technical/colour_contrast/colour.html)

-   [*Juicy Studio: Luminosity Colour Contrast Ratio Analyser*](http://juicystudio.com/services/luminositycontrastratio.php)

**How long it takes:** 10 -20 minutes

**Impact of failure:** Failing this requirement means that some people can’t read your text because there isn’t enough contrast between the text and background.

**Related WCAG success criteria:** 1.4.3 (Contrast (Minimum))

**You don’t need to check :**

-   Decorative text that conveys no information.

-   A logo or brand name.

**To pass this:**

-   Text needs a contrast ratio of 4.5:1 or better unless it is large text.

-   Large text (14pt bold or 18pt font) needs a contrast ratio of 3:1 or better.

-   14pt is more or less equivalent to 19px, and 18pt to 24px.

-   Note that if background or foreground (or both) colours are changed when a link receives focus, the colour contrast of the focussed state should also be tested.

#### How to test

1.  If you are using any of the *WAVE Web Accessibility Evaluation Tool* online service, or the Paciello or aXe downloads or browser extensions:.

<!-- -->

1.  Using the WAVE Web Accessibility Evaluation Tool: Type or paste the web page address in the field provided and submit. After some processing by the tool, results for the page will be displayed. Select the “Contrast” tab. The elements on the web page with low contrast are highlighted. Note that because the WAVE tool does not account for background images and gradients, etc., there may be false positives. Note the contrast failures identified by WAVE and confirm the contrast using another tool.

2.  Using the Paciello Group Colour Contrast Analyser: Click the Foreground dropper icon and select the most representative sample of the foreground colour in question. Click the Background dropper icon and select the background colour. The results are displayed automatically.

3.  Using the aXe…..

<!-- -->

1.  If you are testing colour contrast manually:

    1.  Identify where the page has different combinations of text and background colours that need to be tested. Skip over strong contrasts like black on white; put your efforts into things like grey text on white or text in lighter colours on coloured backgrounds.

    2.  Right-click and inspect the coloured text.

    3.  In the Inspector, click on the Computed heading. It is usually between ‘Styles’ and ‘Event Listeners’.

    4.  Scroll through the list of values and look for ‘color’ and ‘font-size’.

    5.  Next to color you should see a small swatch of the text colour and rgb followed by numbers.

    6.  Shift-click the swatch until you see the hex value. This is a \# followed by a collection of 6 numbers or letters.

    7.  In another tab or window, open any one of the evaluation websites.

    8.  Enter the hex value into the foreground and background colour fields and Submit. Note the contrast ratio in the results and if it meets WCAG2.0 AA requirements for the text size you found in step (d).

2.  If all else fails and you can’t access the tools you need as described so far:

    1.  Take a screen shot of the page (Ctl - PrintScreen on Windows), open Paint and paste (Ctl - v) the image into Paint.

    2.  Use the Paint eyedropper to retrieve the RGB values for foreground and background colours.

    3.  Use an online converter like [*http://www.rgbtohex.net/*](http://www.rgbtohex.net/) or [*http://www.rapidtables.com/convert/color/rgb-to-hex.htm*](http://www.rapidtables.com/convert/color/rgb-to-hex.htm) to convert RGB to hex.

    4.  Go to steps 2(g) and 2(h), making your best assessment of the text size.

#### Failure points

• For non-bold text smaller than 18 point (~24px) and bold text smaller than 14 point (~19px), the contrast ratio is less than 4.5:1 between the text (including images of text) and its background.

• For non-bold text that is at least 18 point (~24px) and bold text that is at least 14 point (~19px), the contrast ratio is less than 3:1 between text (and images of text) and the background behind the text.

### Test 8: Captions and transcripts

**What you need:** No particular expertise; no special tools.

**How long it takes:** 5 - 10 minutes depending on the length of the video

**Impact of failure:** Failing this requirement excludes the deaf or hearing-impaired from accessing video or audio content. It also denies the benefits of captions to anyone in a noisy environment or who can’t access audio content.

**Related WCAG success criteria:** 1.2.2 (Captions (Prerecorded), 1.2.3 (Audio Description or Media Alternative (Prerecorded)) and 4.1.2 (Name, role, value)

#### How to test

Captions, sometimes called subtitles, provide a text version of what people are hearing on video or audio content.

A transcript should describe all meaningful information - both visual and audio.

1.  Open the web page to be tested.

2.  Look through the page for any video or audio content.

3.  Play the video or audio content. Turn on captions and check that:

    -   all meaningful information from the audio track is available in captions. This is important because the captions you see may be auto-captions and not actually showing what is being said. To see what you’ve got, click on the cog (Settings) under the video and look at the caption options for Subtitles/CC. If you have real captions, there will be an option saying English as well as one saying English (auto-generated). The auto-generated is the auto-captions option.

    -   the captions are an accurate rendition of the meaningful audio content.

4.  If there aren’t any captions, and the content is not high-stakes content and was published less than 10 business days ago, you must provide captions within 10 days after publication of the video content.

5.  Look to see if there’s a text transcript for any video or audio content. Is it:

    -   clearly labeled as being a text transcript for the video or audio content?

    -   an accurate reflection of the meaningful audio or visual information?

6.  Look at the HTML source code and search for ‘iframe’.

    -   Right-click on the page background (not on the video) and choose ‘View page source’.

    -   If it doesn’t have a title attribute with a descriptive name then it fails WCAG 4.1.2 (Name, role, value).

#### Failure points

-   The content is ‘high-stakes’ and:

    -   there are no captions for meaningful audio information

    -   there is no descriptive text transcript for any video and audio content.

-   The content is **not** ‘high-stakes’ and was published more than 10 business days ago and:

    -   there are no captions for meaningful audio information.

    -   there is no descriptive text transcript for any video and audio content.

-   Captions don’t accurately reflect the meaningful audio information. This is very common if people rely on auto captions.

-   The descriptive text transcript doesn’t accurately reflect all meaningful audio and visual information.

-   The descriptive transcript is not clearly labelled as being a descriptive text transcript for the video content.

-   An iframe element is missing a title attribute with a descriptive name.

## Web Usability Standard |    | |----------------------------------------------------------------------------------------| | Usability 2.4.2 Website's privacy statement has required content   | | Usability 2.2.4 Website's 'Contact us' page has required content   | | Usability 2.3.3 Unambiguous link on home page to website's general copyright statement | | Usability 2.4.3 Unambiguous link on home page to website's privacy statement   | 
