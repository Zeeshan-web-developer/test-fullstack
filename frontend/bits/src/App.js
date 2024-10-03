import UserList from "./UserList";

function App() {
  return (
    <div
      styl={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "100%",
      }}
    >
      <h1
        style={{
          color: "blue",
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Users Dashboard
      </h1>
      <UserList />
    </div>
  );
}

export default App;
