const express = require('express');
const mongoose = require('mongoose');
const config = require('./src/Config');
const adminRoutes = require('./src/routes/adminRoutes');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use('/file',express.static('src/uploads/Workout'));
app.get('/', (req, res) => {
    res.send('Express js runnings');
});
app.use(cors());
app.use('/admin',adminRoutes);


mongoose.connect(config.databaseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB: ', error);
    });
const port = process.env.PORT || config.port;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});