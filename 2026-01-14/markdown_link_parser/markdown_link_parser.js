function parseLink
(markdown) {
  let split = 
markdown.split("](");
  let text = split[0]
.slice(1, split[0].
length);
  let url = split[1].
slice(0, split[1].
length-1)
  return `<a href="$
{url}">${text}</a>`;
}
/*
Input: markdown 
format image link
"[link_text]
(link_url)"
Output: anchor tag w 
href and content
<a 
href="link">Content 
</a>
"[freeCodeCamp]
(https://