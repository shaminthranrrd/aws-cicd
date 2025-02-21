const express = require("express");
const app = express();

// Redirect HTTP to HTTPS
app.use((req, res, next) => {
    if (process.env.FORCE_HTTPS && req.headers["x-forwarded-proto"] !== "https") {
        return res.redirect("https://" + req.headers.host + req.url);
    }
    next();
});

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello, AWS Elastic Beanstalk with HTTPS!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
