
export const getStdDeviation = (array, mean) => {
    const a = array
                .map(item => Math.pow(item - mean, 2))
                .reduce((p,c) => p+c) / (array.length - 1)
    const d = Math.sqrt(a)

    return d
}