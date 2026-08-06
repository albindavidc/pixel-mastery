import json

beginner_defs = {
    "<!DOCTYPE>": {"syntax": "<!DOCTYPE html>", "when": "Must be the very first line of your HTML document.", "definition": "The bouncer at the door \u2014 tells the browser exactly what version of HTML to expect."},
    "<html>": {"syntax": "<html lang=\"en\">\n  ...\n</html>", "when": "Wraps everything on your page.", "definition": "The root envelope \u2014 the container holding your entire website."},
    "<head>": {"syntax": "<head>\n  <title>...</title>\n</head>", "when": "Holds invisible data like CSS links, titles, and meta tags.", "definition": "The brain of the page \u2014 contains information the browser needs but the user doesn't see directly."},
    "<body>": {"syntax": "<body>\n  <h1>Hello World</h1>\n</body>", "when": "Holds all visible content on your webpage.", "definition": "The physical body \u2014 everything inside here is what actually shows up on the screen."},
    "<title>": {"syntax": "<title>My Cool Website</title>", "when": "Inside the <head>, to name the page.", "definition": "The browser tab label \u2014 gives your page a name in tabs and search results."},
    "<meta>": {"syntax": "<meta charset=\"UTF-8\" />", "when": "Inside the <head>, to set character sets or viewport rules.", "definition": "The ID card \u2014 provides extra invisible details about your document."},
    "<link>": {"syntax": "<link rel=\"stylesheet\" href=\"style.css\" />", "when": "Inside the <head>, typically to connect CSS files.", "definition": "The connecting cable \u2014 plugs external files (like stylesheets) into your webpage."},
    "<script>": {"syntax": "<script src=\"app.js\"></script>", "when": "Usually before the closing </body> or in the <head>, to add interactivity.", "definition": "The engine \u2014 brings JavaScript into your page to make it do things."},
    
    "<div>": {"syntax": "<div>\n  <p>Grouped content</p>\n</div>", "when": "Used to group block-level elements together for styling or layout.", "definition": "The moving box \u2014 a generic, invisible block used to group other elements together."},
    "<span>": {"syntax": "<p>Some <span>blue</span> text</p>", "when": "Used to style a specific chunk of inline text without breaking the line.", "definition": "The inline wrapper \u2014 a generic, invisible wrapper for styling pieces of text on the same line."},
    
    "<h1>": {"syntax": "<h1>Main Title</h1>", "when": "The primary title of your page (usually only one per page).", "definition": "The newspaper headline \u2014 the biggest, most important title on the page."},
    "<h2>": {"syntax": "<h2>Section Title</h2>", "when": "Major section headings under the <h1>.", "definition": "The chapter title \u2014 breaks your content into major sections."},
    "<h3>": {"syntax": "<h3>Subsection Title</h3>", "when": "Subsections under an <h2>.", "definition": "The sub-heading \u2014 organizes content inside a chapter."},
    "<h4>": {"syntax": "<h4>Minor Heading</h4>", "when": "Further nested subsections.", "definition": "The minor heading \u2014 for deeply nested structural organization."},
    "<h5>": {"syntax": "<h5>Tiny Heading</h5>", "when": "Rarely used, for 5th level nesting.", "definition": "The tiny heading \u2014 almost never used, but here if you need it."},
    "<h6>": {"syntax": "<h6>Smallest Heading</h6>", "when": "Rarely used, for 6th level nesting.", "definition": "The whisper heading \u2014 the lowest level of structural importance."},
    "<p>": {"syntax": "<p>This is a sentence.</p>", "when": "Any standard block of text.", "definition": "The basic paragraph \u2014 the standard container for reading text."},
    "<br>": {"syntax": "Line one<br />Line two", "when": "When you need a hard line break without starting a new paragraph (like in a poem).", "definition": "The enter key \u2014 forces a line break right where it sits."},
    "<hr>": {"syntax": "<p>Section 1</p>\n<hr />\n<p>Section 2</p>", "when": "To indicate a thematic break between paragraphs.", "definition": "The scene divider \u2014 a horizontal line that separates different thoughts or sections."},
    
    "<a>": {"syntax": "<a href=\"https://google.com\">Click here</a>", "when": "Whenever you need to link to another page, section, or website.", "definition": "The portal \u2014 a hyperlink that teleports the user somewhere else."},
    "<img>": {"syntax": "<img src=\"cat.jpg\" alt=\"A cute cat\" />", "when": "To display an image.", "definition": "The picture frame \u2014 displays an image file on the page."},
    
    "<ul>": {"syntax": "<ul>\n  <li>Apple</li>\n</ul>", "when": "A list of items where the order doesn't matter (bullet points).", "definition": "The grocery list \u2014 an unordered, bulleted list of items."},
    "<ol>": {"syntax": "<ol>\n  <li>First step</li>\n</ol>", "when": "A list of items where the order is important (numbered steps).", "definition": "The recipe steps \u2014 an ordered, numbered list of items."},
    "<li>": {"syntax": "<li>List item</li>", "when": "Inside a <ul> or <ol> to define individual list items.", "definition": "The bullet point \u2014 a single item inside a list."},
    
    "<form>": {"syntax": "<form action=\"/submit\">\n  ...\n</form>", "when": "Wrapping inputs that a user will fill out and submit.", "definition": "The envelope \u2014 bundles up user inputs to be sent to a server."},
    "<label>": {"syntax": "<label for=\"email\">Email:</label>", "when": "Giving a text description to a form input.", "definition": "The name tag \u2014 a text label attached to an input so users know what to type."},
    "<input>": {"syntax": "<input type=\"text\" id=\"email\" />", "when": "For text, passwords, checkboxes, radio buttons, etc.", "definition": "The blank space \u2014 a field for the user to type or select something."},
    "<textarea>": {"syntax": "<textarea rows=\"4\"></textarea>", "when": "When you need the user to type a long, multi-line message.", "definition": "The comment box \u2014 a large, multi-line text input field."},
    "<select>": {"syntax": "<select>\n  <option>...</option>\n</select>", "when": "A dropdown menu of choices.", "definition": "The dropdown menu \u2014 lets the user choose one option from a list."},
    "<option>": {"syntax": "<option value=\"1\">One</option>", "when": "Inside a <select> to define an available choice.", "definition": "The menu item \u2014 a single choice inside a dropdown menu."},
    "<button>": {"syntax": "<button type=\"submit\">Send</button>", "when": "For submitting forms or triggering JavaScript actions.", "definition": "The trigger \u2014 a clickable button that makes something happen."}
}

with open("src/data/htmlTagsData.ts", "r") as f:
    content = f.read()

# We need to extract the existing json object, update it, and write it back.
import re
match = re.search(r"export const htmlTagsData: Record<string, any> = (\{.*\});", content, re.DOTALL)
if match:
    data = json.loads(match.group(1))
    for tag, info in beginner_defs.items():
        if tag not in data:
            data[tag] = {}
        data[tag].update(info)
        
    out = f"export const htmlTagsData: Record<string, any> = {json.dumps(data, indent=2)};"
    with open("src/data/htmlTagsData.ts", "w") as f:
        f.write(out)
else:
    print("Could not find data in htmlTagsData.ts")

