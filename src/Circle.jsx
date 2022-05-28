import "./index.css";

export default function App(props) {
    return (
        <div className="App">
            <div
                id={props.id}
                style={{ backgroundColor: `${props.colo}` }}
                className="circle"
                onClick={props.handleclick}
            ></div>
        </div>
    );
}
