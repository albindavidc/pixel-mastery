import json
import re

attr_data = {
    "<!DOCTYPE>": {"required": [], "optional": []},
    "<html>": {"required": [], "optional": ["xmlns"]},
    "<head>": {"required": [], "optional": []},
    "<body>": {"required": [], "optional": ["onafterprint", "onbeforeprint", "onbeforeunload", "onblur", "onerror", "onfocus", "onhashchange", "onload", "onmessage", "onoffline", "ononline", "onpageshow", "onpagehide", "onpopstate", "onresize", "onstorage", "onunload"]},
    "<title>": {"required": [], "optional": []},
    "<meta>": {"required": ["charset / name / http-equiv / itemprop"], "optional": ["charset", "content", "http-equiv", "name", "media", "itemprop"]},
    "<link>": {"required": ["rel"], "optional": ["href", "rel", "type", "media", "sizes", "hreflang", "crossorigin", "referrerpolicy", "integrity", "disabled", "fetchpriority", "imagesrcset", "imagesizes", "as", "blocking"]},
    "<script>": {"required": [], "optional": ["src", "type", "async", "defer", "crossorigin", "integrity", "nomodule", "referrerpolicy", "fetchpriority", "blocking"]},
    "<div>": {"required": [], "optional": []},
    "<span>": {"required": [], "optional": []},
    "<h1>": {"required": [], "optional": []},
    "<h2>": {"required": [], "optional": []},
    "<h3>": {"required": [], "optional": []},
    "<h4>": {"required": [], "optional": []},
    "<h5>": {"required": [], "optional": []},
    "<h6>": {"required": [], "optional": []},
    "<p>": {"required": [], "optional": []},
    "<br>": {"required": [], "optional": []},
    "<hr>": {"required": [], "optional": []},
    "<a>": {"required": [], "optional": ["href", "target", "download", "rel", "hreflang", "type", "referrerpolicy", "ping"]},
    "<img>": {"required": ["src", "alt"], "optional": ["src", "alt", "srcset", "sizes", "width", "height", "loading", "decoding", "crossorigin", "referrerpolicy", "fetchpriority", "usemap", "ismap"]},
    "<ul>": {"required": [], "optional": []},
    "<ol>": {"required": [], "optional": ["reversed", "start", "type"]},
    "<li>": {"required": [], "optional": ["value"]},
    "<form>": {"required": [], "optional": ["action", "method", "enctype", "accept-charset", "autocomplete", "name", "novalidate", "target", "rel"]},
    "<label>": {"required": [], "optional": ["for"]},
    "<input>": {"required": [], "optional": ["type", "name", "value", "placeholder", "required", "disabled", "readonly", "checked", "multiple", "accept", "autocomplete", "autofocus", "capture", "dirname", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "width", "list", "max", "maxlength", "min", "minlength", "pattern", "size", "src", "step", "inputmode", "spellcheck", "enterkeyhint", "popovertarget", "popovertargetaction"]},
    "<textarea>": {"required": [], "optional": ["name", "rows", "cols", "placeholder", "required", "readonly", "disabled", "maxlength", "minlength", "wrap", "autocomplete", "autofocus", "dirname", "form", "spellcheck"]},
    "<select>": {"required": [], "optional": ["name", "multiple", "required", "disabled", "size", "autocomplete", "autofocus", "form"]},
    "<option>": {"required": [], "optional": ["value", "selected", "disabled", "label"]},
    "<button>": {"required": [], "optional": ["type", "name", "value", "disabled", "autofocus", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "command", "commandfor", "popovertarget", "popovertargetaction"]}
}

with open("src/data/htmlTagsData.ts", "r") as f:
    content = f.read()

match = re.search(r"export const htmlTagsData: Record<string, any> = (\{.*\});", content, re.DOTALL)
if match:
    data = json.loads(match.group(1))
    for tag, attrs in attr_data.items():
        if tag in data:
            data[tag]["required"] = attrs["required"]
            data[tag]["optional"] = attrs["optional"]
            
    out = f"export const htmlTagsData: Record<string, any> = {json.dumps(data, indent=2)};"
    with open("src/data/htmlTagsData.ts", "w") as f:
        f.write(out)
else:
    print("Could not find data in htmlTagsData.ts")
