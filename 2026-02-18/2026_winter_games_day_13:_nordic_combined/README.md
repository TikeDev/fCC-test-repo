<h1>2026 Winter Games Day 13: Nordic Combined</h1>

<p>Given an array of jump scores for athletes, calculate their start delay times for the cross-country portion of the Nordic Combined.</p>
<p>The athlete with the highest jump score starts first (0 second delay). All other athletes start later based on how far behind their jump score is compared to the best jump.</p>
<p>To calculate the delay for each athlete, subtract the athlete's jump score from the best overall jump score and multiply the result by 1.5. Round the delay up to the nearest integer.</p>

<h2>Tests</h2>
<ul>
<li>1. <code>calculate_start_delays([120, 110, 125])</code> should return <code>[8, 23, 0]</code>.</li>
<li>2. <code>calculate_start_delays([118, 125, 122, 120])</code> should return <code>[11, 0, 5, 8]</code>.</li>
<li>3. <code>calculate_start_delays([100, 105, 95, 110, 120, 115, 108])</code> should return <code>[30, 23, 38, 15, 0, 8, 18]</code>.</li>
<li>4. <code>calculate_start_delays([130, 125, 128, 120, 118, 122, 127, 115, 132, 124])</code> should return <code>[3, 11, 6, 18, 21, 15, 8, 26, 0, 12]</code>.</li>
</ul>