# Cobra CSS Utilities – Usage Guide

## 1. Including Cobra CSS in Your Project

After building (or downloading) the combined CSS file, add this inside the `<head>` section of your HTML:

<link rel="stylesheet" href="dist/cobra-utilities.css"> ```
2. Using Utility Classes
You can use utility classes directly in your HTML elements, just like Tailwind CSS.

Example: Buttons
text
<button class="bg-green-500 text-white p-4 rounded hover:bg-green-600 transition m-2">
  Success
</button>
<button class="bg-red-500 text-white p-4 rounded hover:bg-red-600 transition m-2">
  Danger
</button>
Example: Layout and Flexbox
text
<div class="flex justify-center items-center bg-gray-100 p-8 mt-4 rounded-lg">
  <p class="text-lg text-gray-700">Centered flex container</p>
</div>
Example: Combining Classes
You can combine multiple classes to compose any design you like:

text
<div class="max-w-lg mx-auto p-6 bg-white shadow rounded-lg">
  <h2 class="text-xl font-bold mb-4 text-center">Cobra CSS Card</h2>
  <p class="text-base text-gray-700">
    Cobra CSS makes utility-first styling easy and productive!
  </p>
</div>
3. Class Reference – Common Utilities
Background: bg-blue-500, bg-red-500, bg-gray-200, bg-white…

Text color: text-white, text-black, text-gray-700

Padding: p-2, p-4, px-4 (customize as needed)

Margin: m-2, mt-4, mb-1

Typography: text-lg, font-bold, text-center

Flexbox: flex, flex-col, justify-center, items-center

Border/Radius: border, rounded, rounded-lg

Hover/Transition: hover:bg-blue-600, transition

For a complete list, see the source files in /src or the generated dist/cobra-utilities.css.

4. Editing or Customizing
Edit any .css files in src/, then run:

text
node build-css.js
to generate a new version of the combined utility file.

Enjoy using Cobra CSS!

text

***

You can copy this directly into `docs/usage.md` in your project.Here’s an easy-to-follow `docs/usage.md` you can put in your `docs` folder for Cobra CSS users:

***

```markdown
# Cobra CSS – Usage Guide

## 1. Include Cobra CSS

Add this line inside your `<head>` in any HTML file:

<link rel="stylesheet" href="dist/cobra-utilities.css"> ```
2. Example Classes and Combinations
Button Examples:

text
<button class="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition m-1">
  Primary
</button>
<button class="bg-green-500 text-white p-3 rounded hover:bg-green-600 transition m-1">
  Success
</button>
Layout and Flex:

text
<div class="flex flex-row justify-between items-center p-4 bg-gray-100 rounded-lg">
  <span class="font-semibold text-lg text-gray-700">Flex Start</span>
  <span class="text-base text-gray-400">Flex Center</span>
  <span class="font-bold text-right text-blue-500">Flex End</span>
</div>
Combined Utility Example:

text
<div class="max-w-xl mx-auto shadow p-6 m-4 rounded-lg">
  <h1 class="text-2xl font-bold text-center mb-4">Cobra CSS Rocks!</h1>
  <p class="text-base text-gray-700">
    Use multiple utilities to compose advanced layouts easily.
  </p>
</div>
3. Tips
Combine as many utility classes as desired to achieve your desired style.

Explore dist/cobra-utilities.css or the modules in src/ for all available classes.

Edit src/ files and re-run node build-css.js to customize your build.

text

***

Feel free to adjust/add more complex examples if you want!Here’s a ready-to-use `docs/usage.md` for Cobra CSS. Save this inside your `docs/` folder:

***

```markdown
# Cobra CSS Utilities – Usage Guide

## 1. Including Cobra CSS

Add the compiled utilities to your HTML `<head>` like this:

<link rel="stylesheet" href="dist/cobra-utilities.css"> ```
2. Example Classes and Combinations
Examples:

text
<button class="bg-blue-500 text-white p-4 rounded hover:bg-blue-600 transition m-2">
  Primary Button
</button>

<div class="flex justify-center items-center bg-gray-200 p-8 mt-4 rounded-lg">
  <span class="text-lg text-gray-700">Centered Content</span>
</div>

<div class="max-w-lg mx-auto p-6 bg-white shadow rounded-lg">
  <h2 class="text-xl font-bold mb-4 text-center">Utility Card</h2>
  <p class="text-base text-gray-700">
    Cobra CSS empowers rapid UI development via simple utility classes.
  </p>
</div>
Common classes:

Background: bg-blue-500, bg-gray-200, bg-green-500

Text: text-white, text-gray-700, text-xl

Padding & Margin: p-2, m-4, pt-2, mb-3

Borders & Rounding: border, rounded, rounded-lg

Flex/Grid: flex, grid, items-center, justify-between, grid-cols-2

States: hover:bg-blue-600, transition, focus:outline-none

3. Customization
Edit your source files in /src, then run:

text
node build-css.js
to regenerate your combined cobra-utilities.css.

See the generated CSS or explore /src for a full utility reference.

text

***

This will help your users get started quickly and understand Cobra CSS class combinations.Here is a user-friendly and clear `docs/usage.md` that explains how to include Cobra CSS in their project and gives example classes/combinations:

***

```markdown
# Cobra CSS: Usage Guide

## 1. Including Cobra CSS in Your Project

Add this to your HTML `<head>` section:

<link rel="stylesheet" href="dist/cobra-utilities.css"> ```
2. Example Utility Classes and Combinations
Buttons:

text
<button class="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition m-2">
  Primary
</button>
<button class="bg-red-500 text-white p-3 rounded hover:bg-red-600 transition m-2">
  Danger
</button>
Card Component:

text
<div class="max-w-md mx-auto bg-white shadow p-6 m-4 rounded-lg">
  <h2 class="text-xl font-bold mb-2 text-center">Cobra Card</h2>
  <p class="text-base text-gray-700">Compose UI fast with utility classes.</p>
</div>
Flex Container:

text
<div class="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
  <span class="text-lg font-semibold">Flex Start</span>
  <span class="text-gray-500">Flex Center</span>
  <span class="font-bold text-blue-500">Flex End</span>
</div>
3. Customization and Rebuilding
To add new utilities or adjust existing ones:

Edit the corresponding file in src/.

Run node build-css.js to rebuild your combined CSS.

Tip:
Explore dist/cobra-utilities.css and the files in src/ for all available classes!

text

***

Copy and paste this into `docs/usage.md` to make it crystal clear for your users!