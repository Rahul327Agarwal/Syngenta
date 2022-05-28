import "./styles.css";

export default function App(props) {
    return (
        <div className="App">
            <div
                id={props.id}
                style={{ backgroundColor: `${props.colo}` }}
                className="circle"
                onClick={() => props.handledelete(props.id)}
            >
                <p>{props.id}</p>
            </div>
        </div>
    );
}
