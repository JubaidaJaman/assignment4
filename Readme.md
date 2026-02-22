CareerTrack – Job Application Tracker

CareerTrack is a simple job application tracking dashboard built using HTML, CSS, and Vanilla JavaScript.

This project allows users to manage job applications by marking them as Interview or Rejected, tracking counts dynamically, and deleting applications when needed.

Features:

1.Responsive dashboard design

2.Dynamic job cards rendering

3.Tab system (All, Interview, Rejected)

4.Toggle between Interview and Rejected

5.Real-time dashboard count update

6.Delete functionality

7.Empty state UI when no jobs are available

8.Clean Figma-style layout

Functional Behavior :

1.Clicking Interview moves the job to the Interview tab

2.Clicking Rejected moves the job to the Rejected tab

3.Toggle is enabled (Interview ↔ Rejected)

4.Dashboard counts update automatically

5.Deleting a job removes it from the UI and updates all counts

Technologies Used:

HTML5

CSS3 (Vanilla)

JavaScript (DOM Manipulation)

Answers to Questions
1. What is the difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll?

getElementById() → Finds one element using its unique id.

getElementsByClassName() → Finds all elements with the same class name. It returns an HTMLCollection.

querySelector() → Finds the first element that matches a CSS selector (like #id, .class, div).

querySelectorAll() → Finds all elements that match a CSS selector. It returns a NodeList.

2. How do you create and insert a new element into the DOM?
First, create an element using document.createElement().

Then, add it to the page using appendChild() or append() on a parent element.
3. What is Event Bubbling?

Event Bubbling means when you click on a child element, the event moves upward to its parent elements.

Example:
If you click a button inside a div, the button event happens first, then the div event.

4. What is Event Delegation?

Event Delegation means adding one event listener to a parent element instead of adding many listeners to child elements.

It works because of event bubbling.

It is useful when:

You have many child elements.

New elements are added dynamically.

5. What is the difference between preventDefault() and stopPropagation()?

preventDefault() prevents the default browser behavior for an event (e.g., following a link or submitting a form).

stopPropagation() prevents the event from bubbling up to parent elements, stopping further propagation.

Additional Tips:

Keep your answers concise but clear.

Use proper formatting (bold, code inline) for clarity.

Avoid minor grammar issues for a professional look.