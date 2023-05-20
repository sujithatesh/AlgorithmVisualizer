export const bubbleSort = array => {
    let newArray = [...array]
    const swapIndices = [];
    function swap(i, j) {
        let temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
        swapIndices.push([i, j]);
    }

    for (let i = 0; i < newArray.length; i++) {
        for (let j = 0; j < newArray.length; j++) {
            if (newArray[i] <= newArray[j]) {
                swap(i, j);
            }
        }
    }
    console.log(swapIndices);
    return [swapIndices, newArray];
}

export const quickSort = (array) => {
    let newArray = [...array];
    const swapIndices = [];

    function swap(i, j) {
        let temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
        swapIndices.push([i, j]);
    }

    function partition(low, high) {
        let pivot = newArray[high];
        let i = low - 1;
        for (let j = low; j < high; j++) {

            if (newArray[j] < pivot) {
                i++;
                swap(i, j);
            }
        }
        swap(i + 1, high);
        return i + 1;
    }

    function recursiveQuickSort(low, high) {
        if (low < high) {
            let pivotIndex = partition(low, high);

            recursiveQuickSort(low, pivotIndex - 1);
            recursiveQuickSort(pivotIndex + 1, high);
        }
    }

    recursiveQuickSort(0, newArray.length - 1);

    console.log(swapIndices);
    return [swapIndices, newArray];
};

