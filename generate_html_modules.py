import json

beginner_tags = [
    "<!DOCTYPE>", "<html>", "<head>", "<body>", "<title>", "<meta>", "<link>", "<script>",
    "<div>", "<span>",
    "<h1>", "<h2>", "<h3>", "<h4>", "<h5>", "<h6>", "<p>", "<br>", "<hr>",
    "<a>", "<img>",
    "<ul>", "<ol>", "<li>",
    "<form>", "<label>", "<input>", "<textarea>", "<select>", "<option>", "<button>"
]

beginner_content = {
    "tags": beginner_tags,
    "categories": [
        {"name": "Document Structure", "color": "indigo", "tags": beginner_tags[0:8]},
        {"name": "Layout & Containers", "color": "emerald", "tags": beginner_tags[8:10]},
        {"name": "Headings & Text", "color": "rose", "tags": beginner_tags[10:19]},
        {"name": "Links & Media", "color": "amber", "tags": beginner_tags[19:21]},
        {"name": "Lists", "color": "cyan", "tags": beginner_tags[21:24]},
        {"name": "Forms", "color": "teal", "tags": beginner_tags[24:31]}
    ]
}

intermediate_tags = [
    "<header>", "<main>", "<section>", "<article>", "<aside>", "<footer>", "<nav>",
    "<strong>", "<em>", "<small>", "<mark>", "<code>", "<pre>", "<blockquote>", "<q>", "<cite>", "<time>",
    "<picture>", "<source>", "<video>", "<audio>", "<figure>", "<figcaption>", "<iframe>",
    "<details>", "<summary>",
    "<fieldset>", "<legend>", "<datalist>", "<optgroup>", "<output>", "<progress>", "<meter>",
    "<table>", "<thead>", "<tbody>", "<tfoot>", "<tr>", "<th>", "<td>", "<caption>", "<colgroup>", "<col>"
]

intermediate_content = {
    "tags": intermediate_tags,
    "categories": [
        {"name": "Semantic Layout", "color": "indigo", "tags": intermediate_tags[0:7]},
        {"name": "Text Semantics", "color": "emerald", "tags": intermediate_tags[7:17]},
        {"name": "Media", "color": "rose", "tags": intermediate_tags[17:24]},
        {"name": "Interactive Elements", "color": "amber", "tags": intermediate_tags[24:26]},
        {"name": "Advanced Forms", "color": "cyan", "tags": intermediate_tags[26:33]},
        {"name": "Tables", "color": "teal", "tags": intermediate_tags[33:43]}
    ]
}

master_tags = [
    "<canvas>", "<svg>",
    "<template>", "<noscript>",
    "<abbr>", "<bdi>", "<bdo>", "<ruby>", "<rt>", "<rp>",
    "<address>",
    "<kbd>", "<samp>", "<var>",
    "<del>", "<ins>",
    "<dfn>",
    "<sub>", "<sup>", "<wbr>"
]

master_content = {
    "tags": master_tags,
    "categories": [
        {"name": "Graphics & Rendering", "color": "indigo", "tags": master_tags[0:2]},
        {"name": "Templates & Progressive Enhancement", "color": "emerald", "tags": master_tags[2:4]},
        {"name": "Accessibility & Internationalization", "color": "rose", "tags": master_tags[4:10]},
        {"name": "Document Metadata & Contact", "color": "amber", "tags": master_tags[10:11]},
        {"name": "Developer & Technical Text", "color": "cyan", "tags": master_tags[11:14]},
        {"name": "Document Editing & Revisions", "color": "teal", "tags": master_tags[14:16]},
        {"name": "Definitions & Terminology", "color": "pink", "tags": master_tags[16:17]},
        {"name": "Typography", "color": "violet", "tags": master_tags[17:20]}
    ]
}

modules = f"""import {{ Module }} from '../types';

export const htmlModules: Module[] = [
  {{
    id: 'html-beginner',
    category: 'html',
    title: 'Beginner',
    description: 'Learn the foundational building blocks of every webpage on the internet.',
    content: `{json.dumps(beginner_content)}`,
    groupId: 'html',
    groupTitle: 'HTML',
    examples: [],
    challenge: {{ description: '', targetClasses: [] }}
  }},
  {{
    id: 'html-intermediate',
    category: 'html',
    title: 'Intermediate',
    description: 'Master semantic meaning, complex media, and robust accessible structures.',
    content: `{json.dumps(intermediate_content)}`,
    groupId: 'html',
    groupTitle: 'HTML',
    examples: [],
    challenge: {{ description: '', targetClasses: [] }}
  }},
  {{
    id: 'html-master',
    category: 'html',
    title: 'Master',
    description: 'Deep dive into advanced rendering, internationalization, and micro-semantics.',
    content: `{json.dumps(master_content)}`,
    groupId: 'html',
    groupTitle: 'HTML',
    examples: [],
    challenge: {{ description: '', targetClasses: [] }}
  }}
];
"""

with open('src/data/htmlModules.ts', 'w') as f:
    f.write(modules)
