const admonition = require('marked-admonition-extension');

const mermaid_renderer = {
    code(code, infoString) {
        if (infoString === 'mermaid'){
            return `<pre class="mermaid">${code}</pre>`
        }
        return false
    },
};

module.exports = {
	stylesheet: ["https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.7.0/github-markdown.min.css",
        "docs/base-style.css"],
	body_class: 'markdown-body',
    marked_extensions: [ admonition.default ],
	marked_options: [{ mermaid_renderer }],
	pdf_options: {
		format: 'a4',
		margin: '20mm 10mm',
		printBackground: true,
        footerTemplate: "<section><span class='pageNumber'></span> / <span class='totalPages'></span></section>",
        headerTemplate: "<style> section { margin: 0 10mm; font-family: Yu Gothic UI; system-ui; font-size: 12px; width: 100%; text-align: right; } .flex-container { display: flex; justify-content: space-between; align-items: center; } </style><section><span class='title'></span></section>",
	},
    script: [
        { url: 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js' },  
        { content: "mermaid.initialize({ startOnLoad: false, themeVariables: { fontSize: '16px', fontFamily: 'Yu Gothic UI, system-ui' } }); (async () => { await mermaid.run(); })();" }
    ],
	stylesheet_encoding: 'utf-8',
};
