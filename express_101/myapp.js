const express = require("express");
const app = express();
const port = 8000;
const legal = "Terms of Service: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const about = "Established 2020";
const contact = "Email me at: robertkushner4@gmail.com";

app.get("/", (req, res) => res.send(`
<!DOCTYPE html>
<html>
<head><title>Home</title></head>
<body>
<header>
<a href="/">Home</a>
<a href="/contact">Contact</a>
<a href="/about">About</a>
<a href="/legal">Legal</a>
</header>
<main>
<h1>Hello World!</h1>
</main>
<footer></footer>
</body>
</html>`
));

app.get("/legal", (req, res) => res.send(`
<!DOCTYPE html>
<html>
<head><title>Home</title></head>
<body>
<header>
<a href="/">Home</a>
<a href="/contact">Contact</a>
<a href="/about">About</a>
<a href="/legal">Legal</a>
</header>
<main>
<h2>These are our legal terms:</h2>
<p>${legal}</p>
</main>
<footer></footer>
</body>
</html>`
));

app.get("/about", (req, res) => res.send(`
<!DOCTYPE html>
<html>
<head><title>Home</title></head>
<body>
<header>
<a href="/">Home</a>
<a href="/contact">Contact</a>
<a href="/about">About</a>
<a href="/legal">Legal</a>
</header>
<main>
<h1>About Us: ${about}</h1>
</main>
<footer></footer>
</body>
</html>`
));

app.get("/contact", (req, res) => res.send(`
<!DOCTYPE html>
<html>
<head><title>Home</title></head>
<body>
<header>
<a href="/">Home</a>
<a href="/contact">Contact</a>
<a href="/about">About</a>
<a href="/legal">Legal</a>
</header>
<main>
<h1>Contact Info: ${contact}</h1>
</main>
<footer></footer>
</body>
</html>`
));

app.listen(port, () => console.log(`This is your port: http://localhost:${port}`));