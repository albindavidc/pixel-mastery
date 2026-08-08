export const htmlTagsData: Record<string, any> = {
  "<!DOCTYPE>": {
    "what": "The <!DOCTYPE> element is used to represent !DOCTYPE in an HTML document.",
    "when": "Must be the very first line of your HTML document.",
    "type": "Void element",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<!DOCTYPE>Example content",
    "accessibility": "Ensure <!DOCTYPE> is used semantically for screen readers.",
    "syntax": "<!DOCTYPE html>",
    "definition": "The bouncer at the door \u2014 tells the browser exactly what version of HTML to expect.",
    "required": [],
    "optional": []
  },
  "<html>": {
    "what": "The <html> element is used to represent html in an HTML document.",
    "when": "Wraps everything on your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<html>Example content</html>",
    "accessibility": "Ensure <html> is used semantically for screen readers.",
    "syntax": "<html lang=\"en\">\n  ...\n</html>",
    "definition": "The root envelope \u2014 the container holding your entire website.",
    "required": [],
    "optional": [
      "xmlns"
    ]
  },
  "<head>": {
    "what": "The <head> element is used to represent head in an HTML document.",
    "when": "Holds invisible data like CSS links, titles, and meta tags.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<head>Example content</head>",
    "accessibility": "Ensure <head> is used semantically for screen readers.",
    "syntax": "<head>\n  <title>...</title>\n</head>",
    "definition": "The brain of the page \u2014 contains information the browser needs but the user doesn't see directly.",
    "required": [],
    "optional": []
  },
  "<body>": {
    "what": "The <body> element is used to represent body in an HTML document.",
    "when": "Holds all visible content on your webpage.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<body>Example content</body>",
    "accessibility": "Ensure <body> is used semantically for screen readers.",
    "syntax": "<body>\n  <h1>Hello World</h1>\n</body>",
    "definition": "The physical body \u2014 everything inside here is what actually shows up on the screen.",
    "required": [],
    "optional": [
      "onafterprint",
      "onbeforeprint",
      "onbeforeunload",
      "onblur",
      "onerror",
      "onfocus",
      "onhashchange",
      "onload",
      "onmessage",
      "onoffline",
      "ononline",
      "onpageshow",
      "onpagehide",
      "onpopstate",
      "onresize",
      "onstorage",
      "onunload"
    ]
  },
  "<title>": {
    "what": "The <title> element is used to represent title in an HTML document.",
    "when": "Inside the <head>, to name the page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<title>Example content</title>",
    "accessibility": "Ensure <title> is used semantically for screen readers.",
    "syntax": "<title>My Cool Website</title>",
    "definition": "The browser tab label \u2014 gives your page a name in tabs and search results.",
    "required": [],
    "optional": []
  },
  "<meta>": {
    "what": "The <meta> element is used to represent meta in an HTML document.",
    "when": "Inside the <head>, to set character sets or viewport rules.",
    "type": "Void element",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<meta>Example content",
    "accessibility": "Ensure <meta> is used semantically for screen readers.",
    "syntax": "<meta charset=\"UTF-8\" />",
    "definition": "The ID card \u2014 provides extra invisible details about your document.",
    "required": [
      "charset / name / http-equiv / itemprop"
    ],
    "optional": [
      "charset",
      "content",
      "http-equiv",
      "name",
      "media",
      "itemprop"
    ]
  },
  "<link>": {
    "what": "The <link> element is used to represent link in an HTML document.",
    "when": "Inside the <head>, typically to connect CSS files.",
    "type": "Void element",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<link>Example content",
    "accessibility": "Ensure <link> is used semantically for screen readers.",
    "syntax": "<link rel=\"stylesheet\" href=\"style.css\" />",
    "definition": "The connecting cable \u2014 plugs external files (like stylesheets) into your webpage.",
    "required": [
      "rel"
    ],
    "optional": [
      "href",
      "rel",
      "type",
      "media",
      "sizes",
      "hreflang",
      "crossorigin",
      "referrerpolicy",
      "integrity",
      "disabled",
      "fetchpriority",
      "imagesrcset",
      "imagesizes",
      "as",
      "blocking"
    ]
  },
  "<script>": {
    "what": "The <script> element is used to represent script in an HTML document.",
    "when": "Usually before the closing </body> or in the <head>, to add interactivity.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<script>Example content</script>",
    "accessibility": "Ensure <script> is used semantically for screen readers.",
    "syntax": "<script src=\"app.js\"></script>",
    "definition": "The engine \u2014 brings JavaScript into your page to make it do things.",
    "required": [],
    "optional": [
      "src",
      "type",
      "async",
      "defer",
      "crossorigin",
      "integrity",
      "nomodule",
      "referrerpolicy",
      "fetchpriority",
      "blocking"
    ]
  },
  "<div>": {
    "what": "The <div> element is used to represent div in an HTML document.",
    "when": "Used to group block-level elements together for styling or layout.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<div>Example content</div>",
    "accessibility": "Ensure <div> is used semantically for screen readers.",
    "syntax": "<div>\n  <p>Grouped content</p>\n</div>",
    "definition": "The moving box \u2014 a generic, invisible block used to group other elements together.",
    "required": [],
    "optional": []
  },
  "<span>": {
    "what": "The <span> element is used to represent span in an HTML document.",
    "when": "Used to style a specific chunk of inline text without breaking the line.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<span>Example content</span>",
    "accessibility": "Ensure <span> is used semantically for screen readers.",
    "syntax": "<p>Some <span>blue</span> text</p>",
    "definition": "The inline wrapper \u2014 a generic, invisible wrapper for styling pieces of text on the same line.",
    "required": [],
    "optional": []
  },
  "<h1>": {
    "what": "The <h1> element is used to represent h1 in an HTML document.",
    "when": "The primary title of your page (usually only one per page).",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<h1>Example content</h1>",
    "accessibility": "Ensure <h1> is used semantically for screen readers.",
    "syntax": "<h1>Main Title</h1>",
    "definition": "The newspaper headline \u2014 the biggest, most important title on the page.",
    "required": [],
    "optional": []
  },
  "<h2>": {
    "what": "The <h2> element is used to represent h2 in an HTML document.",
    "when": "Major section headings under the <h1>.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<h2>Example content</h2>",
    "accessibility": "Ensure <h2> is used semantically for screen readers.",
    "syntax": "<h2>Section Title</h2>",
    "definition": "The chapter title \u2014 breaks your content into major sections.",
    "required": [],
    "optional": []
  },
  "<h3>": {
    "what": "The <h3> element is used to represent h3 in an HTML document.",
    "when": "Subsections under an <h2>.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<h3>Example content</h3>",
    "accessibility": "Ensure <h3> is used semantically for screen readers.",
    "syntax": "<h3>Subsection Title</h3>",
    "definition": "The sub-heading \u2014 organizes content inside a chapter.",
    "required": [],
    "optional": []
  },
  "<h4>": {
    "what": "The <h4> element is used to represent h4 in an HTML document.",
    "when": "Further nested subsections.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<h4>Example content</h4>",
    "accessibility": "Ensure <h4> is used semantically for screen readers.",
    "syntax": "<h4>Minor Heading</h4>",
    "definition": "The minor heading \u2014 for deeply nested structural organization.",
    "required": [],
    "optional": []
  },
  "<h5>": {
    "what": "The <h5> element is used to represent h5 in an HTML document.",
    "when": "Rarely used, for 5th level nesting.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<h5>Example content</h5>",
    "accessibility": "Ensure <h5> is used semantically for screen readers.",
    "syntax": "<h5>Tiny Heading</h5>",
    "definition": "The tiny heading \u2014 almost never used, but here if you need it.",
    "required": [],
    "optional": []
  },
  "<h6>": {
    "what": "The <h6> element is used to represent h6 in an HTML document.",
    "when": "Rarely used, for 6th level nesting.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<h6>Example content</h6>",
    "accessibility": "Ensure <h6> is used semantically for screen readers.",
    "syntax": "<h6>Smallest Heading</h6>",
    "definition": "The whisper heading \u2014 the lowest level of structural importance.",
    "required": [],
    "optional": []
  },
  "<p>": {
    "what": "The <p> element is used to represent p in an HTML document.",
    "when": "Any standard block of text.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<p>Example content</p>",
    "accessibility": "Ensure <p> is used semantically for screen readers.",
    "syntax": "<p>This is a sentence.</p>",
    "definition": "The basic paragraph \u2014 the standard container for reading text.",
    "required": [],
    "optional": []
  },
  "<br>": {
    "what": "The <br> element is used to represent br in an HTML document.",
    "when": "When you need a hard line break without starting a new paragraph (like in a poem).",
    "type": "Void element",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<br>Example content",
    "accessibility": "Ensure <br> is used semantically for screen readers.",
    "syntax": "Line one<br />Line two",
    "definition": "The enter key \u2014 forces a line break right where it sits.",
    "required": [],
    "optional": []
  },
  "<hr>": {
    "what": "The <hr> element is used to represent hr in an HTML document.",
    "when": "To indicate a thematic break between paragraphs.",
    "type": "Void element",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<hr>Example content",
    "accessibility": "Ensure <hr> is used semantically for screen readers.",
    "syntax": "<p>Section 1</p>\n<hr />\n<p>Section 2</p>",
    "definition": "The scene divider \u2014 a horizontal line that separates different thoughts or sections.",
    "required": [],
    "optional": []
  },
  "<a>": {
    "what": "The <a> element is used to represent a in an HTML document.",
    "when": "Whenever you need to link to another page, section, or website.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      },
      {
        "name": "href",
        "type": "URL",
        "desc": "The URL that the hyperlink points to."
      }
    ],
    "example": "<a>Example content</a>",
    "accessibility": "Ensure <a> is used semantically for screen readers.",
    "syntax": "<a href=\"https://google.com\">Click here</a>",
    "definition": "The portal \u2014 a hyperlink that teleports the user somewhere else.",
    "required": [],
    "optional": [
      "href",
      "target",
      "download",
      "rel",
      "hreflang",
      "type",
      "referrerpolicy",
      "ping"
    ]
  },
  "<img>": {
    "what": "The <img> element is used to represent img in an HTML document.",
    "when": "To display an image.",
    "type": "Void element",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      },
      {
        "name": "src",
        "type": "URL",
        "desc": "The image URL."
      },
      {
        "name": "alt",
        "type": "string",
        "desc": "Alternative text for screen readers."
      }
    ],
    "example": "<img>Example content",
    "accessibility": "Ensure <img> is used semantically for screen readers.",
    "syntax": "<img src=\"https://shorturl.at/PtCQB\" alt=\"A cute cat\" />",
    "definition": "The picture frame \u2014 displays an image file on the page.",
    "required": [
      "src",
      "alt"
    ],
    "optional": [
      "src",
      "alt",
      "srcset",
      "sizes",
      "width",
      "height",
      "loading",
      "decoding",
      "crossorigin",
      "referrerpolicy",
      "fetchpriority",
      "usemap",
      "ismap"
    ]
  },
  "<ul>": {
    "what": "The <ul> element is used to represent ul in an HTML document.",
    "when": "A list of items where the order doesn't matter (bullet points).",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<ul>Example content</ul>",
    "accessibility": "Ensure <ul> is used semantically for screen readers.",
    "syntax": "<ul>\n  <li>Apple</li>\n</ul>",
    "definition": "The grocery list \u2014 an unordered, bulleted list of items.",
    "required": [],
    "optional": []
  },
  "<ol>": {
    "what": "The <ol> element is used to represent ol in an HTML document.",
    "when": "A list of items where the order is important (numbered steps).",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<ol>Example content</ol>",
    "accessibility": "Ensure <ol> is used semantically for screen readers.",
    "syntax": "<ol>\n  <li>First step</li>\n</ol>",
    "definition": "The recipe steps \u2014 an ordered, numbered list of items.",
    "required": [],
    "optional": [
      "reversed",
      "start",
      "type"
    ]
  },
  "<li>": {
    "what": "The <li> element is used to represent li in an HTML document.",
    "when": "Inside a <ul> or <ol> to define individual list items.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<li>Example content</li>",
    "accessibility": "Ensure <li> is used semantically for screen readers.",
    "syntax": "<li>List item</li>",
    "definition": "The bullet point \u2014 a single item inside a list.",
    "required": [],
    "optional": [
      "value"
    ]
  },
  "<form>": {
    "what": "The <form> element is used to represent form in an HTML document.",
    "when": "Wrapping inputs that a user will fill out and submit.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<form>Example content</form>",
    "accessibility": "Ensure <form> is used semantically for screen readers.",
    "syntax": "<form action=\"/submit\">\n  ...\n</form>",
    "definition": "The envelope \u2014 bundles up user inputs to be sent to a server.",
    "required": [],
    "optional": [
      "action",
      "method",
      "enctype",
      "accept-charset",
      "autocomplete",
      "name",
      "novalidate",
      "target",
      "rel"
    ]
  },
  "<label>": {
    "what": "The <label> element is used to represent label in an HTML document.",
    "when": "Giving a text description to a form input.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<label>Example content</label>",
    "accessibility": "Ensure <label> is used semantically for screen readers.",
    "syntax": "<label for=\"email\">Email:</label>",
    "definition": "The name tag \u2014 a text label attached to an input so users know what to type.",
    "required": [],
    "optional": [
      "for"
    ]
  },
  "<input>": {
    "what": "The <input> element is used to represent input in an HTML document.",
    "when": "For text, passwords, checkboxes, radio buttons, etc.",
    "type": "Void element",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      },
      {
        "name": "type",
        "type": "string",
        "desc": "The type of input control to render."
      }
    ],
    "example": "<input>Example content",
    "accessibility": "Ensure <input> is used semantically for screen readers.",
    "syntax": "<input type=\"text\" id=\"email\" />",
    "definition": "The blank space \u2014 a field for the user to type or select something.",
    "required": [],
    "optional": [
      "type",
      "name",
      "value",
      "placeholder",
      "required",
      "disabled",
      "readonly",
      "checked",
      "multiple",
      "accept",
      "autocomplete",
      "autofocus",
      "capture",
      "dirname",
      "form",
      "formaction",
      "formenctype",
      "formmethod",
      "formnovalidate",
      "formtarget",
      "height",
      "width",
      "list",
      "max",
      "maxlength",
      "min",
      "minlength",
      "pattern",
      "size",
      "src",
      "step",
      "inputmode",
      "spellcheck",
      "enterkeyhint",
      "popovertarget",
      "popovertargetaction"
    ]
  },
  "<textarea>": {
    "what": "The <textarea> element is used to represent textarea in an HTML document.",
    "when": "When you need the user to type a long, multi-line message.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<textarea>Example content</textarea>",
    "accessibility": "Ensure <textarea> is used semantically for screen readers.",
    "syntax": "<textarea rows=\"4\"></textarea>",
    "definition": "The comment box \u2014 a large, multi-line text input field.",
    "required": [],
    "optional": [
      "name",
      "rows",
      "cols",
      "placeholder",
      "required",
      "readonly",
      "disabled",
      "maxlength",
      "minlength",
      "wrap",
      "autocomplete",
      "autofocus",
      "dirname",
      "form",
      "spellcheck"
    ]
  },
  "<select>": {
    "what": "The <select> element is used to represent select in an HTML document.",
    "when": "A dropdown menu of choices.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<select>Example content</select>",
    "accessibility": "Ensure <select> is used semantically for screen readers.",
    "syntax": "<select>\n  <option>...</option>\n</select>",
    "definition": "The dropdown menu \u2014 lets the user choose one option from a list.",
    "required": [],
    "optional": [
      "name",
      "multiple",
      "required",
      "disabled",
      "size",
      "autocomplete",
      "autofocus",
      "form"
    ]
  },
  "<option>": {
    "what": "The <option> element is used to represent option in an HTML document.",
    "when": "Inside a <select> to define an available choice.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<option>Example content</option>",
    "accessibility": "Ensure <option> is used semantically for screen readers.",
    "syntax": "<option value=\"1\">One</option>",
    "definition": "The menu item \u2014 a single choice inside a dropdown menu.",
    "required": [],
    "optional": [
      "value",
      "selected",
      "disabled",
      "label"
    ]
  },
  "<button>": {
    "what": "The <button> element is used to represent button in an HTML document.",
    "when": "For submitting forms or triggering JavaScript actions.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<button>Example content</button>",
    "accessibility": "Ensure <button> is used semantically for screen readers.",
    "syntax": "<button type=\"submit\">Send</button>",
    "definition": "The trigger \u2014 a clickable button that makes something happen.",
    "required": [],
    "optional": [
      "type",
      "name",
      "value",
      "disabled",
      "autofocus",
      "form",
      "formaction",
      "formenctype",
      "formmethod",
      "formnovalidate",
      "formtarget",
      "command",
      "commandfor",
      "popovertarget",
      "popovertargetaction"
    ]
  },
  "<header>": {
    "what": "The <header> element is used to represent header in an HTML document.",
    "when": "Use <header> when you need to add header semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<header>Example content</header>",
    "accessibility": "Ensure <header> is used semantically for screen readers."
  },
  "<main>": {
    "what": "The <main> element is used to represent main in an HTML document.",
    "when": "Use <main> when you need to add main semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<main>Example content</main>",
    "accessibility": "Ensure <main> is used semantically for screen readers."
  },
  "<section>": {
    "what": "The <section> element is used to represent section in an HTML document.",
    "when": "Use <section> when you need to add section semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<section>Example content</section>",
    "accessibility": "Ensure <section> is used semantically for screen readers."
  },
  "<article>": {
    "what": "The <article> element is used to represent article in an HTML document.",
    "when": "Use <article> when you need to add article semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<article>Example content</article>",
    "accessibility": "Ensure <article> is used semantically for screen readers."
  },
  "<aside>": {
    "what": "The <aside> element is used to represent aside in an HTML document.",
    "when": "Use <aside> when you need to add aside semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<aside>Example content</aside>",
    "accessibility": "Ensure <aside> is used semantically for screen readers."
  },
  "<footer>": {
    "what": "The <footer> element is used to represent footer in an HTML document.",
    "when": "Use <footer> when you need to add footer semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<footer>Example content</footer>",
    "accessibility": "Ensure <footer> is used semantically for screen readers."
  },
  "<nav>": {
    "what": "The <nav> element is used to represent nav in an HTML document.",
    "when": "Use <nav> when you need to add nav semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<nav>Example content</nav>",
    "accessibility": "Ensure <nav> is used semantically for screen readers."
  },
  "<strong>": {
    "what": "The <strong> element is used to represent strong in an HTML document.",
    "when": "Use <strong> when you need to add strong semantics to your page.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<strong>Example content</strong>",
    "accessibility": "Ensure <strong> is used semantically for screen readers."
  },
  "<em>": {
    "what": "The <em> element is used to represent em in an HTML document.",
    "when": "Use <em> when you need to add em semantics to your page.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<em>Example content</em>",
    "accessibility": "Ensure <em> is used semantically for screen readers."
  },
  "<small>": {
    "what": "The <small> element is used to represent small in an HTML document.",
    "when": "Use <small> when you need to add small semantics to your page.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<small>Example content</small>",
    "accessibility": "Ensure <small> is used semantically for screen readers."
  },
  "<mark>": {
    "what": "The <mark> element is used to represent mark in an HTML document.",
    "when": "Use <mark> when you need to add mark semantics to your page.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<mark>Example content</mark>",
    "accessibility": "Ensure <mark> is used semantically for screen readers."
  },
  "<code>": {
    "what": "The <code> element is used to represent code in an HTML document.",
    "when": "Use <code> when you need to add code semantics to your page.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<code>Example content</code>",
    "accessibility": "Ensure <code> is used semantically for screen readers."
  },
  "<pre>": {
    "what": "The <pre> element is used to represent pre in an HTML document.",
    "when": "Use <pre> when you need to add pre semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<pre>Example content</pre>",
    "accessibility": "Ensure <pre> is used semantically for screen readers."
  },
  "<blockquote>": {
    "what": "The <blockquote> element is used to represent blockquote in an HTML document.",
    "when": "Use <blockquote> when you need to add blockquote semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<blockquote>Example content</blockquote>",
    "accessibility": "Ensure <blockquote> is used semantically for screen readers."
  },
  "<q>": {
    "what": "The <q> element is used to represent q in an HTML document.",
    "when": "Use <q> when you need to add q semantics to your page.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<q>Example content</q>",
    "accessibility": "Ensure <q> is used semantically for screen readers."
  },
  "<cite>": {
    "what": "The <cite> element is used to represent cite in an HTML document.",
    "when": "Use <cite> when you need to add cite semantics to your page.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<cite>Example content</cite>",
    "accessibility": "Ensure <cite> is used semantically for screen readers."
  },
  "<time>": {
    "what": "The <time> element is used to represent time in an HTML document.",
    "when": "Use <time> when you need to add time semantics to your page.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<time>Example content</time>",
    "accessibility": "Ensure <time> is used semantically for screen readers."
  },
  "<picture>": {
    "what": "The <picture> element is used to represent picture in an HTML document.",
    "when": "Use <picture> when you need to add picture semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<picture>Example content</picture>",
    "accessibility": "Ensure <picture> is used semantically for screen readers."
  },
  "<source>": {
    "what": "The <source> element is used to represent source in an HTML document.",
    "when": "Use <source> when you need to add source semantics to your page.",
    "type": "Void element",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<source>Example content",
    "accessibility": "Ensure <source> is used semantically for screen readers."
  },
  "<video>": {
    "what": "The <video> element is used to represent video in an HTML document.",
    "when": "Use <video> when you need to add video semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<video>Example content</video>",
    "accessibility": "Ensure <video> is used semantically for screen readers."
  },
  "<audio>": {
    "what": "The <audio> element is used to represent audio in an HTML document.",
    "when": "Use <audio> when you need to add audio semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<audio>Example content</audio>",
    "accessibility": "Ensure <audio> is used semantically for screen readers."
  },
  "<figure>": {
    "what": "The <figure> element is used to represent figure in an HTML document.",
    "when": "Use <figure> when you need to add figure semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<figure>Example content</figure>",
    "accessibility": "Ensure <figure> is used semantically for screen readers."
  },
  "<figcaption>": {
    "what": "The <figcaption> element is used to represent figcaption in an HTML document.",
    "when": "Use <figcaption> when you need to add figcaption semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<figcaption>Example content</figcaption>",
    "accessibility": "Ensure <figcaption> is used semantically for screen readers."
  },
  "<iframe>": {
    "what": "The <iframe> element is used to represent iframe in an HTML document.",
    "when": "Use <iframe> when you need to add iframe semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<iframe>Example content</iframe>",
    "accessibility": "Ensure <iframe> is used semantically for screen readers."
  },
  "<details>": {
    "what": "The <details> element is used to represent details in an HTML document.",
    "when": "Use <details> when you need to add details semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<details>Example content</details>",
    "accessibility": "Ensure <details> is used semantically for screen readers."
  },
  "<summary>": {
    "what": "The <summary> element is used to represent summary in an HTML document.",
    "when": "Use <summary> when you need to add summary semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<summary>Example content</summary>",
    "accessibility": "Ensure <summary> is used semantically for screen readers."
  },
  "<fieldset>": {
    "what": "The <fieldset> element is used to represent fieldset in an HTML document.",
    "when": "Use <fieldset> when you need to add fieldset semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<fieldset>Example content</fieldset>",
    "accessibility": "Ensure <fieldset> is used semantically for screen readers."
  },
  "<legend>": {
    "what": "The <legend> element is used to represent legend in an HTML document.",
    "when": "Use <legend> when you need to add legend semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<legend>Example content</legend>",
    "accessibility": "Ensure <legend> is used semantically for screen readers."
  },
  "<datalist>": {
    "what": "The <datalist> element is used to represent datalist in an HTML document.",
    "when": "Use <datalist> when you need to add datalist semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<datalist>Example content</datalist>",
    "accessibility": "Ensure <datalist> is used semantically for screen readers."
  },
  "<optgroup>": {
    "what": "The <optgroup> element is used to represent optgroup in an HTML document.",
    "when": "Use <optgroup> when you need to add optgroup semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<optgroup>Example content</optgroup>",
    "accessibility": "Ensure <optgroup> is used semantically for screen readers."
  },
  "<output>": {
    "what": "The <output> element is used to represent output in an HTML document.",
    "when": "Use <output> when you need to add output semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<output>Example content</output>",
    "accessibility": "Ensure <output> is used semantically for screen readers."
  },
  "<progress>": {
    "what": "The <progress> element is used to represent progress in an HTML document.",
    "when": "Use <progress> when you need to add progress semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<progress>Example content</progress>",
    "accessibility": "Ensure <progress> is used semantically for screen readers."
  },
  "<meter>": {
    "what": "The <meter> element is used to represent meter in an HTML document.",
    "when": "Use <meter> when you need to add meter semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<meter>Example content</meter>",
    "accessibility": "Ensure <meter> is used semantically for screen readers."
  },
  "<table>": {
    "what": "The <table> element is used to represent table in an HTML document.",
    "when": "Use <table> when you need to add table semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<table>Example content</table>",
    "accessibility": "Ensure <table> is used semantically for screen readers."
  },
  "<thead>": {
    "what": "The <thead> element is used to represent thead in an HTML document.",
    "when": "Use <thead> when you need to add thead semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<thead>Example content</thead>",
    "accessibility": "Ensure <thead> is used semantically for screen readers."
  },
  "<tbody>": {
    "what": "The <tbody> element is used to represent tbody in an HTML document.",
    "when": "Use <tbody> when you need to add tbody semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<tbody>Example content</tbody>",
    "accessibility": "Ensure <tbody> is used semantically for screen readers."
  },
  "<tfoot>": {
    "what": "The <tfoot> element is used to represent tfoot in an HTML document.",
    "when": "Use <tfoot> when you need to add tfoot semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<tfoot>Example content</tfoot>",
    "accessibility": "Ensure <tfoot> is used semantically for screen readers."
  },
  "<tr>": {
    "what": "The <tr> element is used to represent tr in an HTML document.",
    "when": "Use <tr> when you need to add tr semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<tr>Example content</tr>",
    "accessibility": "Ensure <tr> is used semantically for screen readers."
  },
  "<th>": {
    "what": "The <th> element is used to represent th in an HTML document.",
    "when": "Use <th> when you need to add th semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<th>Example content</th>",
    "accessibility": "Ensure <th> is used semantically for screen readers."
  },
  "<td>": {
    "what": "The <td> element is used to represent td in an HTML document.",
    "when": "Use <td> when you need to add td semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<td>Example content</td>",
    "accessibility": "Ensure <td> is used semantically for screen readers."
  },
  "<caption>": {
    "what": "The <caption> element is used to represent caption in an HTML document.",
    "when": "Use <caption> when you need to add caption semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<caption>Example content</caption>",
    "accessibility": "Ensure <caption> is used semantically for screen readers."
  },
  "<colgroup>": {
    "what": "The <colgroup> element is used to represent colgroup in an HTML document.",
    "when": "Use <colgroup> when you need to add colgroup semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<colgroup>Example content</colgroup>",
    "accessibility": "Ensure <colgroup> is used semantically for screen readers."
  },
  "<col>": {
    "what": "The <col> element is used to represent col in an HTML document.",
    "when": "Use <col> when you need to add col semantics to your page.",
    "type": "Void element",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<col>Example content",
    "accessibility": "Ensure <col> is used semantically for screen readers."
  },
  "<canvas>": {
    "what": "The <canvas> element is used to represent canvas in an HTML document.",
    "when": "Use <canvas> when you need to add canvas semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<canvas>Example content</canvas>",
    "accessibility": "Ensure <canvas> is used semantically for screen readers."
  },
  "<svg>": {
    "what": "The <svg> element is used to represent svg in an HTML document.",
    "when": "Use <svg> when you need to add svg semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<svg>Example content</svg>",
    "accessibility": "Ensure <svg> is used semantically for screen readers."
  },
  "<template>": {
    "what": "The <template> element is used to represent template in an HTML document.",
    "when": "Use <template> when you need to add template semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<template>Example content</template>",
    "accessibility": "Ensure <template> is used semantically for screen readers."
  },
  "<noscript>": {
    "what": "The <noscript> element is used to represent noscript in an HTML document.",
    "when": "Use <noscript> when you need to add noscript semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<noscript>Example content</noscript>",
    "accessibility": "Ensure <noscript> is used semantically for screen readers."
  },
  "<abbr>": {
    "what": "The <abbr> element is used to represent abbr in an HTML document.",
    "when": "Use <abbr> when you need to add abbr semantics to your page.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<abbr>Example content</abbr>",
    "accessibility": "Ensure <abbr> is used semantically for screen readers."
  },
  "<bdi>": {
    "what": "The <bdi> element is used to represent bdi in an HTML document.",
    "when": "Use <bdi> when you need to add bdi semantics to your page.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<bdi>Example content</bdi>",
    "accessibility": "Ensure <bdi> is used semantically for screen readers."
  },
  "<bdo>": {
    "what": "The <bdo> element is used to represent bdo in an HTML document.",
    "when": "Use <bdo> when you need to add bdo semantics to your page.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<bdo>Example content</bdo>",
    "accessibility": "Ensure <bdo> is used semantically for screen readers."
  },
  "<ruby>": {
    "what": "The <ruby> element is used to represent ruby in an HTML document.",
    "when": "Use <ruby> when you need to add ruby semantics to your page.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<ruby>Example content</ruby>",
    "accessibility": "Ensure <ruby> is used semantically for screen readers."
  },
  "<rt>": {
    "what": "The <rt> element is used to represent rt in an HTML document.",
    "when": "Use <rt> when you need to add rt semantics to your page.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<rt>Example content</rt>",
    "accessibility": "Ensure <rt> is used semantically for screen readers."
  },
  "<rp>": {
    "what": "The <rp> element is used to represent rp in an HTML document.",
    "when": "Use <rp> when you need to add rp semantics to your page.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<rp>Example content</rp>",
    "accessibility": "Ensure <rp> is used semantically for screen readers."
  },
  "<address>": {
    "what": "The <address> element is used to represent address in an HTML document.",
    "when": "Use <address> when you need to add address semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<address>Example content</address>",
    "accessibility": "Ensure <address> is used semantically for screen readers."
  },
  "<kbd>": {
    "what": "The <kbd> element is used to represent kbd in an HTML document.",
    "when": "Use <kbd> when you need to add kbd semantics to your page.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<kbd>Example content</kbd>",
    "accessibility": "Ensure <kbd> is used semantically for screen readers."
  },
  "<samp>": {
    "what": "The <samp> element is used to represent samp in an HTML document.",
    "when": "Use <samp> when you need to add samp semantics to your page.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<samp>Example content</samp>",
    "accessibility": "Ensure <samp> is used semantically for screen readers."
  },
  "<var>": {
    "what": "The <var> element is used to represent var in an HTML document.",
    "when": "Use <var> when you need to add var semantics to your page.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<var>Example content</var>",
    "accessibility": "Ensure <var> is used semantically for screen readers."
  },
  "<del>": {
    "what": "The <del> element is used to represent del in an HTML document.",
    "when": "Use <del> when you need to add del semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<del>Example content</del>",
    "accessibility": "Ensure <del> is used semantically for screen readers."
  },
  "<ins>": {
    "what": "The <ins> element is used to represent ins in an HTML document.",
    "when": "Use <ins> when you need to add ins semantics to your page.",
    "type": "Block-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<ins>Example content</ins>",
    "accessibility": "Ensure <ins> is used semantically for screen readers."
  },
  "<dfn>": {
    "what": "The <dfn> element is used to represent dfn in an HTML document.",
    "when": "Use <dfn> when you need to add dfn semantics to your page.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<dfn>Example content</dfn>",
    "accessibility": "Ensure <dfn> is used semantically for screen readers."
  },
  "<sub>": {
    "what": "The <sub> element is used to represent sub in an HTML document.",
    "when": "Use <sub> when you need to add sub semantics to your page.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<sub>Example content</sub>",
    "accessibility": "Ensure <sub> is used semantically for screen readers."
  },
  "<sup>": {
    "what": "The <sup> element is used to represent sup in an HTML document.",
    "when": "Use <sup> when you need to add sup semantics to your page.",
    "type": "Inline-level",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<sup>Example content</sup>",
    "accessibility": "Ensure <sup> is used semantically for screen readers."
  },
  "<wbr>": {
    "what": "The <wbr> element is used to represent wbr in an HTML document.",
    "when": "Use <wbr> when you need to add wbr semantics to your page.",
    "type": "Void element",
    "attributes": [
      {
        "name": "id",
        "type": "string",
        "desc": "Unique identifier for the element."
      },
      {
        "name": "class",
        "type": "string",
        "desc": "Space-separated list of classes for styling."
      }
    ],
    "example": "<wbr>Example content",
    "accessibility": "Ensure <wbr> is used semantically for screen readers."
  }
};