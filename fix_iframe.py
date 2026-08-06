import re

with open('src/components/IframePreview.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    '<p className="text-slate-400 leading-loose text-justify">',
    '<div className="text-slate-400 leading-loose text-justify">'
)
content = content.replace(
    '''                      This is the final sentence of the paragraph to ensure it looks like a continuous block of text without artificial line breaks.
                    </p>''',
    '''                      This is the final sentence of the paragraph to ensure it looks like a continuous block of text without artificial line breaks.
                    </div>'''
)

with open('src/components/IframePreview.tsx', 'w') as f:
    f.write(content)
