# Sprint 0 - Week 0

## Features

- This week we will take a deep dive in learning how Forms work in HTML
- We will code a Simple Yoga Application Form to showcase form element and their principles
- This Yoga Application Form will have minimal CSS to have some basic stylings
- This Yoga Application Form will be sending the information to a fake server called
- https://httpbin.org/post

### What is an HTML Form?

An HTML form is a way to gather information from users on a webpage. It provides a structured way for users to input data, such as text, numbers, choices, and more.

### Why Use HTML Forms?

HTML forms are essential for interactive web applications, as they allow users to submit data to a server for processing. They enable various actions, from submitting comments to making purchases or signing up for services.

### How to Create an HTML Form:

- Structure: Use the form element to define the form structure.
- Inputs: Add input elements like input, textarea, and select to collect data.
- Labels: Include label elements to provide context for each input.
- Action Method: Specify the action attribute (where data is sent) and method attribute (how it's sent, like POST or GET).
- Validation: Use attributes like required to ensure essential fields are filled.
- Radio Checkboxes: Utilize input type="radio" and input type="checkbox" for choices.
  Submit Button: Add a button type="submit" to send the form's data.
- Styling: Apply CSS for a visually appealing and user-friendly design.
- Remember: HTML forms facilitate user interaction and data submission, making them a fundamental part of web development.

## EMMET Abbreviations

### Emmet Abbreviations: Speed Up HTML Coding in Visual Studio Code

When it comes to web development, efficiency is key. One tool that can significantly boost your productivity is Emmet, a powerful toolkit integrated into Visual Studio Code (VS Code). Emmet allows you to use abbreviations to generate complex HTML structures with just a few keystrokes. In this explanation, we'll delve into the world of Emmet abbreviations, exploring how they work, common use cases, and how you can harness their potential to streamline your HTML coding workflow.

### Understanding Emmet Abbreviations

Emmet is designed to help developers write HTML and CSS faster by using simple, intuitive syntax. At its core, Emmet employs abbreviations—short codes that expand into complete code snippets. These abbreviations are based on CSS selectors and are used to create HTML tags, attributes, and even entire element hierarchies.

### Basic Abbreviations

Let's start with some basic Emmet abbreviations that can dramatically speed up your HTML coding:

- `div` + `Tab`: This abbreviation instantly expands to `<div></div>`. Typing just three characters saves you from manually typing out the opening and closing tags.
- `p` + `Tab`: Similarly, typing `p` and hitting the `Tab` key generates a paragraph element: `<p></p>`.
- `ul>li*3` + `Tab`: This abbreviation creates an unordered list with three list items.
- `a[href="#"]` + `Tab`: This creates an anchor element with a default `href` attribute.

### Advanced Techniques

Emmet isn't limited to basic tags and attributes. You can create more complex structures using advanced techniques:

- **Nesting with `>` and `+`**: You can use `>` to indicate parent-child relationships and `+` to denote sibling elements.
- **Custom Attributes and Values**: You can define custom attributes and values by using parentheses.

### Incorporating Emmet in VS Code

To utilize Emmet abbreviations in VS Code:

1. Start typing an abbreviation, then press `Tab` or `Enter` to expand it.
2. If there are multiple expansions available, use the arrow keys to select the desired one.

### Conclusion

Emmet abbreviations are a game-changer for HTML development in Visual Studio Code. By leveraging these simple yet powerful shortcuts, you can accelerate your coding workflow, reduce repetitive typing, and improve overall productivity. Experiment with different abbreviations, explore more advanced techniques, and witness how Emmet transforms the way you write HTML code. With practice, you'll master this tool and become a more efficient web developer.