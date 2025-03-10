const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log("=== New Request Received ===");
    console.log("Headers:", req.headers); // طباعة جميع الهيدرز
    console.log("Referer:", req.get("Referer") || "Direct Access"); // طباعة المصدر (إذا وجد)
    console.log("User-Agent:", req.get("User-Agent")); // طباعة معلومات المتصفح
    console.log("IP Address:", req.ip); // طباعة IP المستخدم
    console.log("============================");

    res.send("Check your server logs for request details.");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
