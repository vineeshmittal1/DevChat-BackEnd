# DevChat-BackEnd: Real-Time Developer Communication Platform

DevChat-BackEnd is a robust backend service that powers a real-time chat application designed specifically for developers. The platform enables seamless connection and communication between developers through live chat features, built with modern web technologies and WebSocket support for instant messaging.

## 📚 Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [License](#license)

## 🚀 Features

- **Real-Time Messaging**: WebSocket-based live chat with instant message delivery.
- **User Authentication**: Secure JWT-based authentication system with token management.
- **User Management**: Complete user registration, login, and profile management APIs.
- **Chat Rooms**: Support for multiple chat rooms and direct messaging between developers.
- **Message History**: Persistent storage of chat messages with MongoDB.
- **Online Status**: Real-time tracking of user online/offline status.
- **Middleware Protection**: Route protection with authentication and authorization middleware.
- **RESTful API**: Clean and scalable API architecture for all chat operations.

## 🛠 Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for data persistence
- **Socket.io** - Real-time bidirectional event-based communication
- **JWT** - Token-based authentication
- **Mongoose** - MongoDB object modeling

### Architecture
- **RESTful API** - Standard HTTP endpoints for CRUD operations
- **WebSocket** - Real-time communication layer
- **MVC Pattern** - Organized code structure with models, routes, and utilities

## 📁 Installation

1. **Clone the repository**:
```bash
git clone https://github.com/vineeshmittal1/DevChat-BackEnd.git
```

2. **Navigate to the project directory**:
```bash
cd DevChat-BackEnd
```

3. **Install dependencies**:
```bash
npm install
```

4. **Create a `.env` file in the root directory and add environment variables**:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
SOCKET_PORT=3001
```

5. **Start the development server**:
```bash
npm start
```

6. **The server will be running on**:
- REST API: `http://localhost:5000`
- WebSocket: `http://localhost:3001`

## 🔐 Security Features

- **JWT Authentication** - Secure token-based user sessions
- **Password Hashing** - Encrypted password storage
- **Protected Routes** - Middleware-based route protection
- **CORS Configuration** - Cross-origin resource sharing setup
- **Input Validation** - Request data validation and sanitization

---

**Development Period**: February 2024 - Present

Built with ❤️ for the developer community
