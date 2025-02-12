const socket = require("socket.io");
const crypto = require("crypto");

const getSecretRoomId = (userId, targetUserId) => {
  return crypto
    .createHash("sha256")
    .update([userId, targetUserId].sort().join("$"))
    .digest("hex");
};

const intialiseSocket = (server) => {
  const io = socket(server, {
    cors: {
      origin: "http://localhost:5173",
    },
  });

  io.on("connection", (socket) => {
    socket.on("joinChat", ({ firstName, userId, targetUserId }) => {
      const roomId = getSecretRoomId(userId, targetUserId);
      console.log(firstName + "Joined Room " + roomId);
      socket.join(roomId);
    });

    socket.on("sendMessage", ({ firstName, userId, targetUserId, text }) => {
      const roomId = getSecretRoomId(userId, targetUserId);
      io.to(roomId).emit("Message Received", { firstName, text });
    });
    socket.on("disconnect", () => {});
  });
};
module.exports = intialiseSocket;
