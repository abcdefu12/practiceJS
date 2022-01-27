import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick =() => setValue((prev)=> prev +1);
  const onChange = (event) => setKeyword(event.target.value);
  
  // console.log("rerender");
  

  // Effect
  // can choose when to run sth
  useEffect(()=>{ console.log("render once callAPI"); }, []);
  useEffect(()=>{ 
    if(keyword !== "" && keyword.length > 4) {
      console.log("search for", keyword);
    } 
  }, [keyword]);
  useEffect(()=>{
    console.log("add count");
  }, [counter]);
  useEffect(()=>{ },[keyword, counter]);

  // Cleanup
  const [showing, setShowing] = useState(false);
  const onPress = () => setShowing((prev) => !prev);
  function Hide() {
    useEffect(()=>{ 
      console.log("show hello");
      return () => console.log("destroyed hello");
    }, []);
    return(
      <h1>Hello</h1>
    );
  };

  return (
    <div className={styles.title}>
      <input 
        vlaue={keyword}
        type="text" 
        onChange={onChange} 
        placeholder="Search here" 
      />
      <h1>{counter}</h1>
      <Button text={"btn"} />
      <button onClick={onClick}>click</button>
      <hr />
      {showing ? <Hide /> : null}
      <button onClick={onPress}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
