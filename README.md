# Context menu frame focus problem demo

## Introduction

Small demonstration of the problem I'm having.

 1.) Install the Chrome extension
 2.) Load a page that contains an iframe
 3.) View the console, notice mouse move events are fired for both the top level
     page and for the iframe(s).
 3.) Right click inside the iframe somewhere, click the "Cause frame problem"
     button.
 4.) Now notice mouse move events are _only_ fired for the iframe until the user
     clicks somewhere.

Question: How can we get the mouse move events to figure for the top level frame
          again _without_ the user clicking somewhere?
