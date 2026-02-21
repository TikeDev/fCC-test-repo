<h1>2026 Winter Games Day 15: Freestyle Skiing</h1>

<p>Given a trick name consisting of two words, determine if it is a valid freestyle skiing trick name.</p>
<p>A trick is valid if the first word is in the list of valid first words, and the second word is in the list of valid second words.</p>
<ul>
<li>The two words will be separated by a single space.</li>
</ul>
<p>Valid first words:</p>
<table>
<thead>
<tr>
<th><code>"Misty"</code></th>
</tr>
</thead>
<tbody>
<tr>
<td><code>"Ghost"</code></td>
</tr>
<tr>
<td><code>"Thunder"</code></td>
</tr>
<tr>
<td><code>"Solar"</code></td>
</tr>
<tr>
<td><code>"Sky"</code></td>
</tr>
<tr>
<td><code>"Phantom"</code></td>
</tr>
<tr>
<td><code>"Frozen"</code></td>
</tr>
<tr>
<td><code>"Polar"</code></td>
</tr>
</tbody>
</table>
<p>Valid second words:</p>
<table>
<thead>
<tr>
<th><code>"Twister"</code></th>
</tr>
</thead>
<tbody>
<tr>
<td><code>"Icequake"</code></td>
</tr>
<tr>
<td><code>"Avalanche"</code></td>
</tr>
<tr>
<td><code>"Vortex"</code></td>
</tr>
<tr>
<td><code>"Snowstorm"</code></td>
</tr>
<tr>
<td><code>"Frostbite"</code></td>
</tr>
<tr>
<td><code>"Blizzard"</code></td>
</tr>
<tr>
<td><code>"Shadow"</code></td>
</tr>
</tbody>
</table>

<h2>Tests</h2>
<ul>
<li>1. <code>isValidTrick("Polar Vortex")</code> should return <code>true</code>.</li>
<li>2. <code>isValidTrick("Solar Icequake")</code> should return <code>true</code>.</li>
<li>3. <code>isValidTrick("Thunder Blizzard")</code> should return <code>true</code>.</li>
<li>4. <code>isValidTrick("Phantom Frostbite")</code> should return <code>true</code>.</li>
<li>5. <code>isValidTrick("Ghost Avalanche")</code> should return <code>true</code>.</li>
<li>6. <code>isValidTrick("Snowstorm Shadow")</code> should return <code>false</code>.</li>
<li>7. <code>isValidTrick("Solar Sky")</code> should return <code>false</code>.</li>
</ul>