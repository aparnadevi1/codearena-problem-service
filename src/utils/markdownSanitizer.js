const marked=require('marked');
const sanitizeHtmlLibrary=require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkdownContent(markdownContent)
{
    const turndownService = new TurndownService();
    //1.Convert markdown to HTML
    const convertedHtml=marked.parse(markdownContent);
    console.log("converted Html",convertedHtml);
    //2.Sanitize html
    const sanitizedHtml=sanitizeHtmlLibrary(convertedHtml,{
        allowedTags:sanitizeHtmlLibrary.defaults.allowedTags
    })
    console.log("sanitized HTML",sanitizedHtml);
    console.log("sanitized markdown");
    const sanitizedMarkdown=turndownService.turndown(sanitizedHtml);
    console.log("sanitized Mark Down",sanitizedMarkdown);
    return sanitizedMarkdown;
    
}

const input=`
# Hello world
### this is a markdown
-something
<script>alert('wohoo')</script>
[Link](www.google.com)
`;
//sanitizeMarkdownContent(input);
module.exports=sanitizeMarkdownContent;