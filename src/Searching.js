import Bfs from './bfs';
import Dfs from './dfs';

export default function Search() {
    let hello = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2, 2, 2, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 2, 2, 2, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    let hello2 = JSON.parse(JSON.stringify(hello));

    return (
        <>
            < Bfs grid={hello} />
            < Dfs grid={hello2} />
        </>
    );
}

