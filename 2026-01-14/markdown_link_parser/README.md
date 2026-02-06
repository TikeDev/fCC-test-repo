<h1>Markdown Link Parser</h1>

<p>Given the string of a link in Markdown, return the equivalent HTML string.</p>
<p>A Markdown image has the following format: <code>"[link_text](link_url)"</code>. Return the string of the HTML <code>a</code> tag with the <code>href</code> set to the <code>link_url</code> and the <code>link_text</code> as the tag content.</p>
<p>For example, given <code>"[freeCodeCamp](https://freecodecamp.org/)"</code> return <code>'&lt;a href="https://freecodecamp.org/"&gt;freeCodeCamp&lt;/a&gt;'</code>;</p>
<p>Note: The console may not display HTML tags in strings when logging messages — check the browser console to see logs with tags included.</p>

<h2>Tests</h2><li><span class="sr-only">Waiting: </span><span>1. <code>parseLink("[freeCodeCamp](https://freecodecamp.org/)")</code> should return <code>'&lt;a href="https://freecodecamp.org/"&gt;freeCodeCamp&lt;/a&gt;'</code>.</span></li>
<li><span class="sr-only">Waiting: </span><span>2. <code>parseLink("[Donate to our charity.](https://www.freecodecamp.org/donate/)")</code> should return <code>'&lt;a href="https://www.freecodecamp.org/donate/"&gt;Donate to our charity.&lt;/a&gt;'</code>.</span></li>
<li><span class="sr-only">Waiting: </span><span>3. <code>parseLink("[Contribute to our repository at https://github.com/freeCodeCamp/freeCodeCamp.](https://github.com/freeCodeCamp/freeCodeCamp/)")</code> should return <code>'&lt;a href="https://github.com/freeCodeCamp/freeCodeCamp/"&gt;Contribute to our repository at https://github.com/freeCodeCamp/freeCodeCamp.&lt;/a&gt;'</code>.</span></li>