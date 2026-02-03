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
"[link_text](link_url)
"
Output: anchor tag w 
href and content
<a 
href="link">Content </
a>
"[freeCodeCamp]
(https://freecodecamp.
org/)" 
'<a href="https://
freecodecamp.org/
">freeCodeCamp</a>'