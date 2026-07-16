# AGENTS.md

## Project Identity

Project name: Raden Dimas Digital Portfolio

This project is a personal digital portfolio and an academic project for
Pemrograman Web I.

Owner:
- Name: Raden Dimas Taufik Rahmat
- NIM: 250401010460
- Class: IF209
- Study Program: S1 Informatika
- University: Universitas Siber Asia
- Academic status: Active undergraduate student
- Location: Bogor, Indonesia

Important education rule:
- Display only S1 Informatika at Universitas Siber Asia.
- Do not display Institut Ummul Quro Al-Islami or another university
  in the formal education section.

## Technology Rules

Build this project using:
- Semantic HTML5
- Modern CSS3
- Vanilla JavaScript

Do not use:
- React
- Vue
- Angular
- Bootstrap
- Tailwind CSS
- jQuery
- Build tools
- A JavaScript framework
- A backend
- A database

The website must remain a static multi-page website that can run through
a basic local web server and can be deployed to Netlify or GitHub Pages.

## Required Pages

The website must contain:
- index.html
- about.html
- projects.html
- gallery.html
- credentials.html
- video.html
- audio.html
- contact.html
- success.html
- privacy.html
- 404.html

The mandatory academic navigation pages are:
- Home
- About Me
- Gallery
- Video
- Audio
- Contact

## Visual Direction

Create a professional modern IT student portfolio.

The visual style should be:
- Modern
- Professional
- Technology-oriented
- Clean
- Dark-first
- Elegant
- Not childish
- Not overly neon
- Not visually crowded
- Comfortable to read

Use:
- Deep navy background
- Cyan as the main accent
- Purple as a secondary accent
- Neutral white and gray text
- Subtle gradients
- Glass effects only when they remain readable
- Consistent spacing and rounded cards

Avoid:
- Excessive glow
- Excessive animation
- Gaming-style visual noise
- Random decoration
- Fake terminal commands that distract from the content

## Animation Requirements

Implement professional animations with CSS and vanilla JavaScript:

- Terminal-style loading screen shown only once per browser session
- Typing animation in the hero section
- Subtle animated technology grid
- Lightweight canvas network background
- Scroll reveal using IntersectionObserver
- Animated counters using requestAnimationFrame
- Floating profile card
- Project card hover
- Gallery filter transitions
- Gallery lightbox
- Timeline reveal
- Audio equalizer state animation
- Theme transition
- Back-to-top button
- Optional custom cursor only on precise pointer devices

All animations must:
- Remain subtle
- Avoid layout shifts
- Avoid autoplay audio and video
- Be disabled or simplified for prefers-reduced-motion
- Be reduced on mobile
- Avoid blocking page interaction

## Accessibility Requirements

Every page must:
- Use lang="id"
- Include a skip-to-content link
- Use semantic HTML
- Use logical heading order
- Include meaningful alt text
- Include visible keyboard focus
- Use proper form labels
- Support keyboard navigation
- Maintain readable contrast
- Avoid using color as the only status indicator
- Include video descriptions and audio transcripts
- Respect prefers-reduced-motion

Do not add ARIA attributes when native HTML already provides the correct
semantic meaning.

## Content Rules

Website language: Indonesian.

Do not invent:
- Project metrics
- Certificate IDs
- Experience duration
- Skill percentages
- Academic achievements
- Social media URLs
- Contact information
- Project links

When data has not been confirmed:
- Use a clearly marked TODO placeholder.
- Do not display fake data as a finished fact.

Skill levels should use:
- Dasar
- Sedang Dipelajari
- Menengah
- Terbiasa Digunakan

Do not use fake percentages such as HTML 95%.

## Code Quality Rules

- Keep code understandable for a Pemrograman Web I student.
- Add concise Indonesian comments for important sections.
- Use CSS custom properties.
- Reuse classes and components.
- Avoid unnecessary duplication.
- Avoid deeply nested HTML.
- Avoid large inline CSS and JavaScript.
- Place CSS and JavaScript in separate files.
- Use defer for JavaScript files.
- Use descriptive class and function names.
- Do not create unused files.
- Do not add dependencies without asking.
- Do not remove user files without asking.
- Do not rewrite unrelated sections when fixing one component.

## Responsive Rules

Support these approximate breakpoints:
- Mobile: below 640px
- Tablet: 640px to 1023px
- Desktop: 1024px and above

The site must not create horizontal scrolling at normal viewport sizes.

## Asset Rules

Use local project paths for:
- Profile images
- Gallery images
- Certificate images
- Project images
- Audio
- Video
- CV

Do not use random external hotlinked images in the final project.

When a real asset is unavailable:
- Create an intentional placeholder component.
- Clearly document the expected filename.
- Never create a fake personal photograph or fake certificate.

## Form Rules

The contact form must:
- Use proper labels
- Validate required fields
- Validate email format
- Include a message character counter
- Include accessible error messages
- Submit to success.html for the academic static version

Do not claim the message is stored or emailed because there is no backend.

## Workflow Rules

Before editing:
1. Read this AGENTS.md.
2. Inspect relevant existing files.
3. Explain the implementation plan briefly.
4. Change only files needed for the current milestone.

After editing:
1. List files created or changed.
2. Explain important implementation decisions.
3. Report checks performed.
4. Identify remaining TODO items.
5. Explain how the user can test the result.
6. Stop after the requested milestone.

Do not automatically continue to the next milestone.

## Verification Rules

After meaningful changes:
- Check browser console errors.
- Check navigation links.
- Check mobile layout.
- Check keyboard accessibility.
- Check missing assets.
- Check incorrect relative paths.
- Check semantic heading order.
- Check reduced-motion behavior.

Never say a check passed unless it was actually performed.