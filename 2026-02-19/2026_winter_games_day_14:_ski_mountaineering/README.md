<h1>2026 Winter Games Day 14: Ski Mountaineering</h1>

<p>Given the snow depth and slope of a mountain, determine if there's an avalanche risk.</p>
<ul>
<li>The snow depth values are <code>"Shallow"</code>, <code>"Moderate"</code>, or <code>"Deep"</code>.</li>
<li>Slope values are <code>"Gentle"</code>, <code>"Steep"</code>, or <code>"Very Steep"</code>.</li>
</ul>
<p>Return <code>"Safe"</code> or <code>"Risky"</code> based on this table:</p>
<table>
<thead>
<tr>
<th></th>
<th><code>"Shallow"</code></th>
<th><code>"Moderate"</code></th>
<th><code>"Deep"</code></th>
</tr>
</thead>
<tbody>
<tr>
<td><code>"Gentle"</code></td>
<td><code>"Safe"</code></td>
<td><code>"Safe"</code></td>
<td><code>"Safe"</code></td>
</tr>
<tr>
<td><code>"Steep"</code></td>
<td><code>"Safe"</code></td>
<td><code>"Risky"</code></td>
<td><code>"Risky"</code></td>
</tr>
<tr>
<td><code>"Very Steep"</code></td>
<td><code>"Safe"</code></td>
<td><code>"Risky"</code></td>
<td><code>"Risky"</code></td>
</tr>
</tbody>
</table>

<h2>Tests</h2>
<ul>
<li>1. <code>avalancheRisk("Shallow", "Gentle")</code> should return <code>"Safe"</code>.</li>
<li>2. <code>avalancheRisk("Shallow", "Steep")</code> should return <code>"Safe"</code>.</li>
<li>3. <code>avalancheRisk("Shallow", "Very Steep")</code> should return <code>"Safe"</code>.</li>
<li>4. <code>avalancheRisk("Moderate", "Gentle")</code> should return <code>"Safe"</code>.</li>
<li>5. <code>avalancheRisk("Moderate", "Steep")</code> should return <code>"Risky"</code>.</li>
<li>6. <code>avalancheRisk("Moderate", "Very Steep")</code> should return <code>"Risky"</code>.</li>
<li>7. <code>avalancheRisk("Deep", "Gentle")</code> should return <code>"Safe"</code>.</li>
<li>8. <code>avalancheRisk("Deep", "Steep")</code> should return <code>"Risky"</code>.</li>
<li>9. <code>avalancheRisk("Deep", "Very Steep")</code> should return <code>"Risky"</code>.</li>
</ul>