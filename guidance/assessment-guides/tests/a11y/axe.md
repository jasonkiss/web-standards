---
title: Run the aXe automated testing tool 
---

<div class="ed">This test needs some work: it should be a standalone test with instructions for making full use of the aXe results. It's only for the purposes of the annual self-assessment that we only want the aXe issue summary.</div> 


You need to run the aXe tool on each page you test. You also need to run it for each viewport because different responsive designs may present different accessibility errors.

1. Run the aXe extension in Chrome by opening the developer tools. To find them, right-click and choose inspect.

2. Along the top line you should be able to select aXe. (You may have to hit the >> toggle on the right of the toolbar to reveal the “aXe” option.)
  ![Screenshot showing location of aXe extension in Chrome](../../img/aXe-button.jpg) 
3. Hit the "Analyze" button.
4. In the aXe summary pane, change the drop-down option from “show:all” to “show: violations”.
6. Note down the error message text and the number of violations for that message. Paste the results in the field for desktop-size results.
7. Resize your browser window to simulate an iPad (768x1024) and run “Analyze” again. Paste the results below in the field for tablet-size results.
8. Finally, resize to simulate an iPhone 5 (320x568), re-run “Analyze” and paste the results in the field for phone-size results.

