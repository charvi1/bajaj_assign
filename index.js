const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const bfhlRoutes = require('./routes/bfhlRoutes');

app.use(express.json());
app.use('/', bfhlRoutes);

app.get('/', (req, res) => {
    res.send('BFHL API is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
