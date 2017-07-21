**What you need:** Don’t use Chrome or Safari for this test — those browsers may add their own visible indication of keyboard focus.

**Impact of failure:** Failing this requirement means people who use a keyboard or other assistive devices instead of a mouse can’t use your site.

**Related WCAG 2.0 success criteria:** [2.1.1 Keyboard](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html); [2.4.7 Focus Visible](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html); [2.1.2 No Keyboard Trap](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html).

### How to test

Basic keyboard testing is easy. You’ll mostly use the Tab, Enter and arrow keys as well as the Spacebar. 

[WebAIM: More detailed keyboard testing](http://webaim.org/techniques/keyboard/#testing)

You need to test keyboard use for any type of content on your page. Not all the features below will appear on your page at the same time. Test whatever features you have, except for visible focus. Visible focus must be tested on every page.

1. Starting in the address bar, use the Tab key to move through the page. Use Shift-Tab if you need to move backwards. 

#### Visible focus 

2. While you move through the page, make sure you can see where the current focus is. 
Record a failure of visible focus if you can’t see anything. If it’s there but hard to see, just note it in the report. 

#### [**_More about visual focus]_**

As you Tab through the website, keep in mind that there should be a visible focus indicator showing you where your keyboard focus is. It must be something that’s easy to see, like a border or highlight.

Depending on backgrounds and the style of the focus indicator, it can sometimes be hard to see rather than completely invisible. If you can see it, even if it doesn’t really stand out, simply note it in the report rather than recording a failure.

Also remember that unlike screen readers, you won’t see focus move to everything on the page. Items that you can’t interact with, like headings or body text, don’t take keyboard focus. But items like forms, links, carousel controls, buttons, videos, dialog boxes do need interaction, so when they get keyboard focus, it should be visible to users.

[/end]

#### Links and buttons

3. Tab to every link and press Enter.  Use the browser’s back button to go back to the previous page.
Record a failure of keyboard functionality if the link doesn’t work with the Enter key. 

4. While you’re testing links, check that any information presented when you hover your mouse over the link also appears when the link gets keyboard focus.
Record a failure of keyboard functionality if it doesn’t.

#### [Extra information on mouse hover]

Sometimes extra information presented to someone when they hover their mouse over an object on the page. This information must also be presented when it gets keyboard focus.

[/end]

5. Tab to each button and press the Spacebar. Check that the button performs the same action as when clicked on with a mouse. If you can’t activate the button with the Spacebar, record this as a failure of keyboard functionality. 

#### Popup boxes

1. If a popup box (sometimes known as a modal or lightbox) appears, check that you can do the following:

    1. easily move around the box 

    2. use everything in the box without using a mouse

    3. close the box by either hitting the Esc key, or navigating to a close or cancel button.

2. If you can’t do all these things with the keyboard alone, record a failure of keyboard functionality.

1. If the box is a modal or lightbox, make sure your tabbing is being restricted to the box. If you tab past the last item in the box, focus needs to loop to the beginning of the box. 
Record a failure of keyboard functionality if the keyboard focus continues on in the background, then close the box and keep testing.

#### [More about **_Popup boxes]_**

Modal or lightboxes are meant to stop the user from doing anything else on the page until they’ve finished with the box. An example is an image gallery lightbox — while viewing the images, the page content behind it is not available.

Typically the rest of the page will be partly dimmed to show that mouse users can’t click on anything outside the box. Keyboard focus should also be trapped within the box, and all content outside it should be unavailable to assistive technologies like screen readers.

[/end]

#### Videos and carousels

1. Check that you can use the keyboard to control things like videos, carousels, sliders. Record a failure of keyboard functionality where you can’t.

    * If your page has an embedded video, can you:

        * get to the video with the Tab key?

        * use each control in the player using some combination of Enter, Spacebar, or arrow keys? 

        * use the Tab key to move past the video player and down to any focusable elements that follow it?

    * If the page contains a carousel, can you:

        *  use the keyboard to set focus to and activate each of its controls?

        * switch between its panels?

#### Forms

1. Check that you can use the keyboard to complete a form. Record a failure of keyboard functionality where you can’t.
If your page has a form, can you use the:

    * Tab key to get to each form field?

    * arrow keys in a group of radio buttons to change which radio button is selected?

    * Spacebar to check or uncheck a checkbox? 

    * date picker/calendar widget by:

        * navigating the day, week, month and year using the Tab and/or arrow keys?

        * select a specific date with the Enter key or Spacebar?

    * up/down arrow keys to choose from drop-down options?

    * enter key to submit the form?

1. Remember to resize your browser window and test at the site’s other responsive layouts.

### [If you need more information about keyboard use]

The keyboard is one of the more fundamental assistive devices because many other assistive technologies translate their commands into what are effectively keyboard commands. This means that a keyboard accessible website has a better chance of being usable with assistive technologies.

### Other failure points

If you happen to see this, record a failure.

* Focus disappears from an element just as or right after it receives visible focus.
