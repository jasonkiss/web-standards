---
layout: default
title: Web accessibility for content editors
draft: true
draft_path: /guidance/design-and-development/quick-reference-guides/
---

## Introduction

Web accessibility is about making your site and its content inclusive. Making your content accessible increases your potential audience and gives them a better experience.

It’s easiest to make sure your content is accessible right from the start of your project. Fixing issues later takes a lot more effort.

This document is meant to be like a ‘pre-flight check’ to help you assess your content in terms of its accessibility. It also includes considerations to share with business owners to help them set realistic expectations.

## Non-text content

### Images

*   **Images containing meaningful information have a descriptive text alternative.**

    Images need text alternatives (alt text, max. ~150 characters) to describe their meaning.

*   **Decorative images have empty alt values.**

    The image’s alt text should be empty, eg `<img alt="" src="/flower.jpg">`.

*   **Images containing words have alt text containing those words.**

    Some images contain text, eg logos, graphs, screenshots, and diagrams. The alt text for these images needs to include the text in the image. If the text in an image is complex, it may need a long description.

*   **Linked image uses alt text to describe the link’s destination.**

    If the link has an image and text, and the text describes the link’s destination, the alt text should be empty. If the linked image has more information that isn’t text, put it in the image alt text.

*   **For complex images, provide a longer text alternative.**

    Alt text may not be enough to describe a complex image like an infographic or a flowchart. Use a longer text alternative to describe any meaningful information.

For more detailed guidance, see [Requirements for providing text to act as an alternative for images](https://www.w3.org/TR/html51/semantics.html#alt).

The W3C website also has a [great tutorial about alt text](https://www.w3.org/WAI/tutorials/images/), information about what you need to do with different types of images and an alt text decision tree.

### Video and/or audio content

*   **For video and audio, provide descriptive text alternatives.**

    Video, audio, and audio-video content need descriptive text alternatives that include all meaningful information conveyed visually or aurally.

*   **For videos with audio, provide captions.**

    Videos with audio content need captions for all meaningful information conveyed through the audio.

## Text content

*   **Instructions do not refer to shape, location or size.**

    Instructions shouldn’t rely solely on sensory characteristics, eg shape, visual location, or size. The instruction 'Use the button on the right' doesn’t work if you’re using a different layout. Will the button necessarily be in the same place? An instruction like 'Use the Search button on the right' identifies the button both by both name and location.

*   **Text on a coloured background is easy to see.**

    There is enough contrast between text and its background so that it can be read easily. The contrast ratio between text colour and the background needs to be at least 4.5:1\. Large text (18 pt upwards or bold 14 pt upwards) can use a contrast ratio of 3:1\. There are several helpful [online tools for checking](https://webtoolkit.govt.nz/guidance/design-and-development/contrast-and-the-use-of-colour/#tools) your contrast ratio.

*   **Link text provides its own context.**

    Each link’s purpose is clear from the link’s text content (or image alt text, where applicable) and its immediate context, ie, the previous heading, paragraph, list item, or table cell it is in.

*   **Language changes are marked up in the HTML.**

    Any text that differs from the main language of the site (most of the time this will be English), it needs to be identified as by its language code, eg “mi” for Māori:

    ```
    <p>This section talks about translating English into <span lang="mi">te reo Māori</span></p>.
    ```

    The [language codes](https://www.loc.gov/standards/iso639-2/php/code_list.php) can be found in the Standards section of the Library of Congress website.

*   **Pages have a unique, descriptive title.**

    Each web page’s `<title>` element is descriptive and distinguishes it from every other page on the website.

    There are some [great examples of page titles](http://www.w3.org/WAI/gettingstarted/tips/writing.html#provide-informative-unique-page-titles) on the W3C website.

### Headings

*   **Headings are marked up as HTML headings.**

    If something looks like a heading, it should be marked up as a heading. Similarly, something that is marked up as an HTML heading should look like a heading.

    Don’t choose heading styles based on what they look like. If a level-3 heading looks smaller than a level-5 heading, talk to your designer.

* **Headings accurately describe their content.**

	Headings must clearly describe the topic or purpose of the content beneath them. This includes groups of form fields that need a title or caption that clearly describes the reason for the grouping.

*   **Headings reflect content hierarchy.**

    Check headings match the correct content hierarchy. For example an `<h3>` under an `<h2>` is a subsection, while an `<h3>` under another `<h3>` is a new section at the same level.

### Bulleted or numbered lists

*   **Lists are marked up as HTML lists.**

    If something looks like or acts as a list, it should be marked up as an ordered, unordered or definition list.

### Tables

*   **Tables are used for data, and not for layout.**

    Use tables for displaying data, rather than for layout purposes. The table’s content should be tabular data (ie, has clear relationships with row and column headings). Don't use tables as a way to layout content.

*   **Data table columns and rows have headers.**

    Use column and row header cells, eg `<th>` as appropriate to indicate table structure.

## Navigating the page

*   **Web page can be used with only a keyboard.**

    You must be able to use keyboard controls to do everything on a web page. This includes completing form fields, accessing menus and submenus, using video or audio controls, and clicking links.

*   **Keyboard focus is easily visible.**

    When someone is tabbing through a web page they must easily be able to see where they are, eg with an outline or change in colour.

*   **Features don't stop you from navigating around the page using just a keyboard.**

    Features like embedded videos, carousels, and plugins can trap keyboard users. Users are able to navigate to and around the feature but can’t navigate away from it. They get trapped in a loop.

*   **Users can skip straight to the main page content using a keyboard.**

    Allow keyboard users to jump straight to the main content of a page by providing a skip link, ARIA landmarks or by having headings at the beginning of sections of content.

## Forms

*   **Form fields have a visible, descriptive label.**

    Each form field text inputs, radio buttons, checkboxes, dropdowns, and textareas) has a label that clearly describes its topic or purpose.

*   **Form fields that have been grouped together have a group title or caption.**

    Each group of form fields like radio buttons or checkboxes needs a title or caption, eg `<legend>`) that clearly describes the reason for the grouping.

*   **Instructions for entering information are clear and easily understood.**

    To help users avoid making errors, clearly indicate the expected content or format, ideally by including this information in the field’s label.

*   **Error messages help users fix them.**

    Error messages should clearly indicate which fields have errors and how users can fix them.

    There are some helpful [examples of clear instructions and error messages](http://www.w3.org/WAI/gettingstarted/tips/writing.html#provide-clear-instructions) on the W3C website.