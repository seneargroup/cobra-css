# Cobra CSS

A utility-first CSS library inspired by Tailwind CSS for rapid UI development.

## Features

- Modular utility classes for colors, spacing, typography, flexbox, grid, borders, and more.
- Fully customizable: edit source CSS files and rebuild with a simple script.
- Easy integration: include the combined CSS in your projects or install via npm.

## Installation

Install via npm:

npm install cobra-css

text

Or include the CSS file directly if you host it yourself or via CDN:

<link rel="stylesheet" href="dist/cobra-utilities.css" /> ```
Usage
Import the CSS in your JavaScript:

text
import 'cobra-css/dist/cobra-utilities.css';
Or include the CSS in your HTML:

text
<link rel="stylesheet" href="node_modules/cobra-css/dist/cobra-utilities.css" />
Use utility classes in your HTML elements:

text
<button class="bg-blue-500 text-white p-4 rounded hover:bg-blue-600 transition">
  Click Me!
</button>

<div class="flex justify-center items-center p-6 bg-gray-100 rounded-lg">
  <p class="text-gray-700 text-lg">Welcome to Cobra CSS!</p>
</div>
Development
To customize or extend Cobra CSS:

Edit CSS source files in the src/ folder.

Build the updated CSS with:

text
npm run build
Repository
Find source code, report issues, or contribute here:

https://github.com/seneargroup/cobra-css

/////////////////////////////////////////////////////////////////////////////////////////////

How to Use Cobra CSS
1. Installation via npm
Users install in their project by running:

bash
npm install cobra-css

2. Include in JavaScript or front-end build
Import the CSS inside your JavaScript entry point or wherever you bundle your styles:

js
import 'cobra-css/dist/cobra-utilities.css';

3. Include in plain HTML projects
Add a <link> tag in your HTML <head> referencing the CSS inside node_modules or from your own hosted copy:


<link rel="stylesheet" href="node_modules/cobra-css/dist/cobra-utilities.css" />
Or from a CDN if you host or use jsDelivr (after publishing):


<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cobra-css@1.0.0/dist/cobra-utilities.css" />

4. Use Cobra utility classes in your markup
You can then build your UI by adding utility classes:


<button class="bg-blue-500 text-white p-4 rounded hover:bg-blue-600 transition">
  Click Me!
</button>

<div class="flex justify-center items-center p-6 bg-gray-100 rounded-lg">
  <p class="text-gray-700 text-lg">Welcome to Cobra CSS!</p>
</div>

5. Customize or extend Cobra CSS

Additional tips for users:
Combine multiple utility classes to achieve complex layouts and styles.

Explore the dist/cobra-utilities.css file to see all available utility classes.

For advanced customization, fork the repo, edit src CSS files, and build your own version.

License
This project is licensed under the MIT License - see the LICENSE file for details.

MIT License

Copyright (c) 2025 cobra-css (payelancer Softwares Pvt.Ltd)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
