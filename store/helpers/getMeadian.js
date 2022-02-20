
export const getMedian = (sortedArray) => {
    const n = sortedArray.length
    const isEven = (n % 2 === 0)

    const median = isEven
        ? (sortedArray[n/2] + sortedArray[(n/2)-1]) / 2
        : sortedArray[(n-1)/2] 

    return median
}