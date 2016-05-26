---
layout: default
title: Web accessibility quick reference for designers
draft: true
---

## Introduction

This document is meant as an accessibility prompt for graphic and interaction designers and those responsible for producing HTML/CSS templates. We have also included a checklist in Appendix 1 as a reminder.

## Text alternatives

* **Does the image serve a meaningful function in the page?**
	
	The image needs a text alternative (alt text, max ~150 characters) that is an appropriate replacement for the image’s function in the page.

* **Is the image purely decorative?**

	The image’s alt text should be empty, e.g. `<img alt="" src="/flower.jpg">`.

* **Does the image contain words?**
	
	Include the words in the image’s alt text.

* **Is the image in a link?**

	* If the link is just an image, the alt text should describe the link’s purpose or destination.

	* If the link has an image and text, and the text describes the link’s purpose or destination, the alt text should be empty, ie, `alt=“”`.
	
	* If the link has an image and text, but the image has meaningful information that isn’t in the link text, include that information in the image’s alt text.
	
* **Is the image purpose sufficiently addressed by alt text?**
	
	If alt text is not sufficient to describe the image, e.g. a complex image or infographic, use a longer text alternative to describe the image’s meaningful information.

For more detailed guidance, see [Requirements for providing text to act as an alternative for images](http://www.w3.org/TR/html51/semantics.html#alt).

## Adaptable

* **Is visual appearance accurately reflected with correct HTML?**

	If it looks like a heading, mark it up as a heading. If it is a list, mark it up as a list. If different blocks of content are visually related or distinct, reflect this in the HTML.

* **Are tables used properly for tabular data, and not for layout purposes?**

	Don’t use layout tables. Data tables need column and row headers as appropriate. 

* **Are headings hierarchically organised?**

	Check headings denote the correct hierarchical structure e.g. an `<h3>` under an `<h2>` is a subsection, while an `<h3>` under another `<h3>` is a new section at the same level. 

* **Is the reading order meaningful?**

	Users that read content sequentially, e.g. screen reader users, need to encounter content in the correct reading order so that they get the same meaning as everyone else.

* **Are icons or symbols used to convey information?**

	Provide a text alternative if you are using icons or symbols to convey information.

## Distinguishable

* **Is colour the only method used to convey information?**

	If colour has a meaning assigned to it (e.g. coloured lines on a chart, link text is coloured, different-coloured buttons), use other methods to supplement this information.

* **Does audio automatically start playing when the page loads?**

	If background audio starts automatically, users need to be able to pause, stop, or mute it.

* Is text colour easily read against the background colour?

	The contrast ratio between text colour and the background needs to be at least 4.5:1. Large text (18 points upwards or 14 points upwards if bold) can use a contrast ratio of 3:1. To find out if contrast ratio use online tools like the [WebAim colour contrast checker](http://webaim.org/resources/contrastchecker/) or the [Tanaguru contrast finder](http://contrast-finder.tanaguru.com/). You can also use offline tools like [Colour Contrast Analyser](https://www.paciellogroup.com/resources/contrastanalyser/). The exception to this is decorative text that conveys no meaningful information or logos/brand names.

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

* **Does each web page have a unique, descriptive title?**

	Each web page’s `<title>` element is descriptive and distinguishes it from every other page on the website.

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


