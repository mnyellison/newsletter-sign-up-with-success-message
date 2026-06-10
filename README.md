# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](/assets/images/screenshot.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/mnyellison/newsletter-sign-up-with-success-message)
- Live Site URL: [Vercel Deploy](https://newsletter-sign-up-phi.vercel.app/)

---

## My process

### Built with

- Semantic HTML5 markup
- CSS Custom Properties (Variables)
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript (DOM Manipulation & Events)

---

### What I learned

During this project, I improved my architectural CSS skills, responsive design practices, and JavaScript logic separation.

1. **Responsive Text & Image Cover**: I learned how to handle layout shifting between horizontal and vertical layouts for mobile/desktop interfaces. Using `object-fit: cover` ensured the card image adapted perfectly to changes without losing aspect ratio.

2. **Internationalization & Flexible Heights**: I faced a critical layout challenge regarding text expansion (e.g., when a user translates the page). Instead of using rigid, fixed heights (`height: 100vh` or `height: 450px`), I applied fluid height methodologies so the containers expand naturally if the text grows.

```css
.modal-success.active {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
```

3. **Clean Code & Event Management in JS**: I refactored my JavaScript code to apply the Single Responsibility Principle. I isolated DOM state updates into descriptive, standalone functions (`showSuccess`, `showError`, `clearError`) and hooked them into proper modern event listeners like `"input"`.

```javascript
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = inputEmail.value.trim();
  const isValid = validateEmail(email);

  if (isValid) {
    showSuccess(email);
  } else {
    showError();
  }
});
```

---

## Continued development

For my future projects, I want to keep focusing on:

- **CSS Architecture**: Refining folder structure divisions (like deeper comprehension of `/components` vs `/layouts`).
- **Clean Code**: Continuing to practice modular JavaScript, ensuring code blocks are easily testable and clean.
- **Accessibility (a11y)**: Enhancing focus management, screen-reader friendliness, and error states announcement.

---

## AI Collaboration

I collaborated with Gemini as a supportive peer programming assistant to refine this project.

- **How I used it**: Instead of asking for instant solutions, I used the AI to help me rethink my program logic when the form was accepting invalid values. It guided my thought process into properly handling function returns, variable state storage, and decoupling event loops.
- **What worked well**: The prompt-guided learning style helped me fix my own bugs (like moving the dismiss action listener outside the submit form scope and switching from `keypress` to `input` event for fluid UX feedback).

---

## Author

- Frontend Mentor - [@mnyellison](https://www.frontendmentor.io/profile/mnyellison)
