const express = require('express');
const app = express();
const path = require('path');

// Middleware to check if it's within working hours
const workingHoursMiddleware = (req, res, next) => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)
    const hourOfDay = now.getHours(); // 0 to 23

    // Check if it's Monday to Friday and between 9am to 5pm
    if (dayOfWeek === 0 || dayOfWeek === 6 || hourOfDay < 9 || hourOfDay >= 17) {
        res.send("Sorry, the web application is only available during working hours (Monday to Friday, 9am to 5pm).");
    } else {
        next();
    }
};

// Middleware to serve static files (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to use EJS template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.get('/', workingHoursMiddleware, (req, res) => {
    res.render('home');
});

app.get('/services', workingHoursMiddleware, (req, res) => {
    res.render('services');
});

app.get('/contact', workingHoursMiddleware, (req, res) => {
    res.render('contact');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
