<h1>2026 Winter Games Day 12: Bobsled</h1>

<p>Given an array representing the weights of the athletes on a bobsled team and a number representing the weight of the bobsled, determine whether the team is eligible to race.</p>
<ul>
<li>The length of the array determines the team size: 1, 2 or 4 person teams.</li>
<li>All given weight values are in kilograms (kg).</li>
</ul>
<p>The bobsled (sled by iteself) must have a minimum weight of:</p>
<ul>
<li>162 kg for a 1-person team</li>
<li>170 kg for a 2-person team</li>
<li>210 kg for a 4-person team</li>
</ul>
<p>The total weight of the bobsled (athletes plus sled) must not exceed:</p>
<ul>
<li>247 kg for a 1-person team</li>
<li>390 kg for a 2-person team</li>
<li>630 kg for a 4-person team</li>
</ul>
<p>Return "Eligible" if the team meets all the requirements, or <code>"Not Eligible"</code> if the team fails to meet one or more of the requirements.</p>

<h2>Tests</h2>
<ul>
<li>1. <code>checkEligibility([78], 165)</code> should return <code>"Eligible"</code>.</li>
<li>2. <code>checkEligibility([80], 160)</code> should return <code>"Not Eligible"</code>.</li>
<li>3. <code>checkEligibility([80], 170)</code> should return <code>"Not Eligible"</code>.</li>
<li>4. <code>checkEligibility([85, 90], 170)</code> should return <code>"Eligible"</code>.</li>
<li>5. <code>checkEligibility([85, 95], 168)</code> should return <code>"Not Eligible"</code>.</li>
<li>6. <code>checkEligibility([112, 97], 185)</code> should return <code>"Not Eligible"</code>.</li>
<li>7. <code>checkEligibility([110, 102, 90, 106], 222)</code> should return <code>"Eligible"</code>.</li>
<li>8. <code>checkEligibility([106, 99, 90, 88], 205)</code> should return <code>"Not Eligible"</code>.</li>
<li>9. <code>checkEligibility([106, 99, 103, 96], 227)</code> should return <code>"Not Eligible"</code>.</li>
</ul>