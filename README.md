<h1>TSA Webmaster Website 2024</h1>
<h2>Prerequisites</h2>
<ul>
    <li>Install <strong>Node.js</strong> (React front-end).</li>
    <li>Install <strong>Python 3.x</strong> (Flask back-end).</li>
    <li>Install <strong>Git</strong>.</li>
</ul>

<h2>How to Run Program</h2>
<p>Run the following commands in Terminal or Command Prompt.</p>
<h3>1. Clone the Repository</h3>
<pre><code>git clone git remote add origin https://github.com/rebanto/tsa-webmaster-24.git
cd tsa-webmaster-24</code></pre>
<p>If the above 'cd' command does not work, locate the file directory of the newly clone repo and navigate to it.</p>

<h3>2. Set Up Front-end</h3>
<pre><code>cd client
npm install
npm start</code></pre>
<p>Open the front-end at <strong>http://localhost:3000</strong> if 'npm start' does not already open up a webpage.</p>

<h3>3. Set Up the Back-end</h3>
<pre><code>cd server
python -m venv venv       <!-- Optional -->
source venv/bin/activate  <!-- On Windows: venv\Scripts\activate -->
pip install -r requirements.txt
python app.py</code></pre>
<p>The back-end will be available at <strong>http://127.0.0.1:5000/api</strong>.</p>

<h3>4. How to Stop the Servers</h3>
<ul>
    <li><strong>React Front-end:</strong> Press <code>Ctrl + C</code> in the terminal running <code>npm start</code>.</li>
    <li><strong>Flask Back-end:</strong> Press <code>Ctrl + C</code> in the terminal running <code>python app.py</code>.</li>
</ul>
