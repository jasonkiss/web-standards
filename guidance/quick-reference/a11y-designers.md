---
layout: default
title: Web accessibility quick reference for designers
draft: true
---

## Introduction

This document is meant as an accessibility prompt for graphic and interaction designers and those responsible for producing HTML/CSS templates.

**A note about what's considered meaningful**

Something is considered meaningful if it adds to the user's experience. For example, a page may include a picture of a kitten as something cute to make me smile. In this instance, it would be considered decorative and not meaningful. A picture of a kitten on another page may be looking at the growth stages of a cat. In this instance the picture would be considered meaningful.

## Text alternatives

* **Images containing meaningful information have a descriptive text alternative.**
	
	Images need text alternatives (alt text, max ~150 characters) to describe their meaning.

* **Decorative images have empty alt values.**

	The image’s alt text should be empty, e.g. `<img alt="" src="/flower.jpg">`.

* **Images containing words have alt text containing those words.**
	
	Some images contain text. If that text is meaningful it needs to be included in the image's alt text.

* **Linked images use alt text to describe the link's destination.**

	If the link has an image and text, and the text describes the link’s destination, the alt text should be empty, ie, `alt=“”`.
	
	If the linked image has more information that isn’t included in the link text, put it in the image’s alt text.
	
* **For complex images, provide a longer text alternative.**
	
	Alt text may not be long enough to describe a complex image like an infographic or a flowchart. Use a longer text alternative to describe any meaningful information.

For more detailed guidance, see [Requirements for providing text to act as an alternative for images](http://www.w3.org/TR/html51/semantics.html#alt).

## Adaptable

* **Is visual appearance accurately reflected with correct HTML?**

	If it looks like a heading, mark it up as a heading. If it is a list, mark it up as a list. If different blocks of content are visually related or distinct, reflect this in the HTML.

*   **Tables are used to display data, and not for laying out content.**

    Use tables for displaying data, rather than for layout purposes. The table’s content should be tabular data (ie, has clear relationships with row and column headings). Don't use tables as a way to layout content.

*   **Data table columns and rows have defined headers.**

    Use column and row header cells, eg `<th>` as appropriate to indicate table structure.
    
* **Heading levels reflect content hierarchy.**

	Check headings denote the correct hierarchical structure e.g. an `<h3>` under an `<h2>` is a subsection, while an `<h3>` under another `<h3>` is a new section at the same level. 

* **Reading order must still meaningful without visual styling.**

	Turn off styling to check that the native reading order of the page still flows in a meaningful order. Users that read content sequentially, eg screen reader users, need to encounter content in the correct reading order so that they get the same meaning as everyone else.

* **Icons or symbols used to convey information have a text alternative.**

	Any graphic element, including icons or symbols conveying meaningful information must have a text alternative.

## Distinguishable

* **Colour conveying meaning is augmented with other methods.**

	If colour has a meaning assigned to it (eg coloured lines on a chart, coloured link text, different-coloured buttons), use other methods to supplement this information.

* **Audio must be manually started on a webpage.**

	If background audio starts automatically, users need to be able to pause, stop, or mute it.

* **Text on a coloured background is easy to see.**

    There is enough contrast between text and its background so that it can be read easily. The contrast ratio between text colour and the background needs to be at least 4.5:1\. Large text (18 pt upwards or bold 14 pt upwards) can use a contrast ratio of 3:1\. There are several helpful [online tools for checking](https://webtoolkit.govt.nz/guidance/design-and-development/contrast-and-the-use-of-colour/#tools) your contrast ratio.
    
    The exception to this rule is logos/brand names or decorative text that conveys no meaningful information.

* **Can you still read the page content if the page is zoomed to 200%?**

	If content is obscured when the page zoom is set to 200%, users won’t even be able to scroll to see content.

* **Does the page contain images of text?**

	Text should not be delivered as an image, but presented using HTML and CSS. The exception to this is text that contains visual content e.g. logos, graphs, screenshots, and diagrams. These images will need alt text, and possibly a long description depending on the complexity of the image.

## Keyboard accessible

* **Can the web page or site be navigated and used with only a keyboard?**

	Use keyboard controls to do everything on the web page. This includes completing form fields, accessing menus and submenus, using video or audio controls, and activating links.

* **Does any feature stop you from being able to move around the page with the keyboard?**

	Features like embedded videos, carousels, and plugins can trap keyboard users. Users are able to navigate to and around the feature but can’t navigate away from it. They get trapped in a loop.

## Enough time

* **If there is a time limit on an activity, can users disable or extend the time limit?**

	If online content has a time limit, users need to be able to either turn off, or adjust the time limit before they start. Otherwise they need to be warned about the time limit and given an option to extend it. There are some exceptions to this rule.

* **Can moving or auto-updating content on a page be paused, stopped or hidden?**

	Moving, blinking, scrolling or auto-updating content that starts automatically is distracting. Users must be able to pause, stop or hide it if they find it too distracting. This also applies to keyboard-only users. The exception to this is all essential activity, e.g. real-time traffic information or weather warnings. 

## Seizures

Is your content flashing more than 3 times in a second? Flashing or blinking content on a web page can trigger seizures in people with photosensitivity.  

* **Can users bypass repeated blocks of content?**

	Allow non-mouse users to jump straight to the main content of a page by providing a skip link, ARIA landmarks or by having headings at the beginning of sections of content.

* **Pages have a unique, descriptive title.**

	Each web page’s `<title>` element is descriptive and distinguishes it from every other page on the website.
    
    There are some [great examples of page titles](http://www.w3.org/WAI/gettingstarted/tips/writing.html#provide-informative-unique-page-titles) on the W3C website.

* **Is information encountered in a logical, consistent order?**

	Users that navigate sequentially, like keyboard-only users, need to encounter information in a logical, consistent order so that they get the same sense of meaning as everyone else.

* **Does link text provide its own context?**

	Each link’s purpose is clear from the link’s text content (or image alt text if applicable) and its immediate context, ie, the previous heading, paragraph, list item, or table column it’s in.

* **Are there multiple ways for users to navigate around the site?**

	Provide multiple ways for users to locate content within a web site. Examples could be a site map, list of related pages, table of contents, or site search function.

* **Do headings accurately describe the content or purpose?**

	Headings must clearly describe the topic or purpose of the content beneath them.

* **Do groups of radio buttons or checkboxes have a group title or caption?**

	Each group of radio buttons or checkboxes needs a title or caption that clearly describes the reason for the grouping.

* **Is current keyboard focus easily visible?**

	Web pages must visually indicate which element currently has keyboard focus, e.g. with an outline or change in colour.

## Predictable

* **Does getting focus trigger an automatic response?**

	If a component gets focus, it must not trigger an automatic change of context. Change of context examples include opening a new window, moving focus to a different component, going to a new page, or significantly re-arranging the content of a page.

* **Does changing the setting on a component (e.g. selecting a radio button) trigger an automatic action?**

	Changing the setting of a component must not cause a change of context. For example, selecting something from a drop-down list should not launch a new page. If you need to have this happen, advise the user of the behaviour beforehand. Note: Clicking on a link, button or tab (while they are considered components) is not considered to be changing its setting. 

* **Are repeated navigation items, like menus, in the same relative order on each page?**

	A website must have consistent presentation and layout of navigation menus, search boxes, etc, to help users locate specific information or functionality more than once.

* **Are components identified consistently throughout the website?**

	All components within a website that do the same thing (e.g. icons, checkmarks, links to PDFs) must be identified with consistent appearance and wording.

## Input assistance

* **Are people being told if they make a mistake filling in a form?**

	If people make a mistake filling in a form or performing a transaction (e.g. entering an invalid date), tell them so they won’t wonder what went wrong.

* **Does each form field have a visible and descriptive label?**

	Each form field (text inputs, radio buttons, checkboxes, dropdowns, and textarea) has a label that clearly describes its topic or purpose.

* **If someone makes a mistake, is there a suggestion for fixing it?**

	To help users avoid making errors, clearly indicate the expected content or format, ideally by including this information in the field’s label.

* **Can users review, change or reverse a legal, financial, or data submission?**

	When submitting a form results in significant commitments, users must be able to reverse the submission, or check/confirm the data before submission.

## Compatible

* **Is the HTML code valid?**

	HTML markup needs to be accurately parsed and interpreted by browsers and user agents for correct presentation to users. 

* **Can every component’s name, role, value be programmatically exposed to user agents, including assistive technologies?**

	Native HTML is the best method for ensuring programmatic exposure to user agents. Where other solutions are in use name, role, state, properties, values and changes to any of these needs to be programmatically exposed to user agents, including assistive technologies.


