import logo from './logo.svg';
import './App.css';

function App() {
    const mobile_os = ["Android", "Blackberry", "iPhone","Windows Phone"];
    const mobile_mf = ["Samsung","HTC", "Mickromax", "Apple"]
  return (
    <div className="App" style={{
        color: "black",
        fontSize: "15px",
        textAlign: "left",
        paddingLeft: "30px",
    }}
    >
        <h1 style={{
            color: "black",
            fontSize: "40px",
            
        }}
        >Mobile Operating System</h1>
        {mobile_os.map((e) => (
            <li style={{
                color: "black",
                fontSize: "15px",
                paddingLeft: "30px",
            }}
            >{e}</li>
        ))}
        
        <h1 style={{
            color: "black",
            fontSize: "40px",
        }}
        >Mobile Manufacturers</h1>
        {mobile_mf.map((e) => (
            <li style={{
                color: "black",
                fontSize: "15px",
                paddingLeft: "30px",                
            }}
            >{e}</li>
        ))}
        
    </div>
  );
}

export default App;
