export default function Header() {
  return (
    <div className="header">
      <h1>Todo List</h1>
      <p>A simple React Todo List App</p>
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #FFFFFF",
          width: "100%",
          marginTop: "10px",
        }}
      />
    </div>
  );
}
