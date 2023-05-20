import "./SortingVisualizer.css";
import { bubbleSort, quickSort } from "./Algorithms";
import { useState, useEffect } from "react";

export default function SortingVisualizer() {
    const [array, setArray] = useState([]);

    const resetArray = () => {
        const newArray = [];
        for (let i = 0; i < 200; i++) {
            newArray.push(randomIntFromInterval(5, 680));
        }
        setArray(newArray);
    };

    useEffect(() => {
        resetArray();
    }, []);

    const animateBubbleSort= () => {
        let swapIndices = [];
        let ret = bubbleSort(array);
        swapIndices = ret[0];
        animateSorting(swapIndices, () => {
            setArray(ret[1]);
        });
    };

    const animateQuickSort = () => {
        let swapIndices = [];
        let ret = quickSort(array);
        swapIndices = ret[0];
        animateSorting(swapIndices, () => {
            setArray(ret[1]);
        });
    };

    const animateSorting = (swapIndices, callback) => {
        const arrayBars = document.getElementsByClassName("bar-graph");

        const animateNextStep = (i) => {
            if (i < swapIndices.length) {
                const [barIndexA, barIndexB] = swapIndices[i];
                const barStyleA = arrayBars[barIndexA].style;
                const barStyleB = arrayBars[barIndexB].style;

                barStyleA.borderColor = "red";
                barStyleB.borderColor = "blue";

                const temp = barStyleA.height;
                barStyleA.height = barStyleB.height;
                barStyleB.height = temp;

                setTimeout(() => {
                    barStyleA.borderColor = "";
                    barStyleB.borderColor = "";
                    animateNextStep(i + 1);
                }, 1);
            } else {
                if (typeof callback === "function") {
                    callback();
                }
            }
        };

        animateNextStep(0);
    };


    return (
        <>
            <div className="bar-container">
                {array.map((element, index) => (
                    <div
                        key={index}
                        className="bar-graph"
                        style={{ height: `${element}px` }}
                    ></div>
                ))}
            </div>
            <div>
                <button onClick={resetArray}>Reset</button>
                <button onClick={animateQuickSort}>Quick Sort</button>
                <button onClick={animateBubbleSort}>Bubble Sort</button>
            </div>
        </>
    );
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

