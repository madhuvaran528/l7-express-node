const express = require('express');

const app = express();

app.use(express.static(path.join("C:\\Users\\Sangameshwar\\Desktop\\CHATCORD\\public")));

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log('Server running on port ${PORT}'));