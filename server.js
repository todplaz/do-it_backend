//point d'entrée du backend
const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

//connexion à la base de données
mongoose.connect('mongodb://localhost:27017/task_manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  //routes
  const userRoutes = require('./routes/userRoutes');
  const taskRoutes = require('./routes/taskRoutes');
  const chatRoutes = require('./routes/chatRoutes');
  const notificationRoutes = require('./routes/notificationRoutes');

  app.use('/api/users', userRoutes);
  app.use('/api/tasks', taskRoutes);
  app.use('/api/chats', chatRoutes);
  app.use('/api/notifications', notificationRoutes);

  //Lancement du serveur
  const PORT = 5000;
  app.listen(PORT, () => console.log('Server running on port ${PORT}'));