import './style.css'
export default function Color({ pass }) {
    return (
        pass.map((row) => (
            <div className="grid-container">
                <div key={row} className="grid-row"> {row.map((e) => {
                    let value = "red"
                    switch (e) {
                        case 1:
                            value = "lightpink";
                            break;
                        case 0:
                            value = "lightgreen";
                            break;
                        case 2:
                            value = "black";
                            break;
                    }
                    return <div style={{ border: "1px solid black", height: "50px", width: "50px", backgroundColor: value }} key={e}></div>;
                })}
                </div>
            </div>
        ))
    )
}
