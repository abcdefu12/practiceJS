import Button from "./Button";
import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.title}>
      <h1>Title</h1>
      <Button text={"btn"} />
    </div>
  );
}

export default App;
