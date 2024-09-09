import app from "./app";

const startServer = async () => {
  try {
    app.listen(5001, () =>
        console.log("🚀 Server ready at: http://localhost:5001")
    );
  } catch (error) {
    console.log("Error connecting to server", error);
  }
};

startServer();