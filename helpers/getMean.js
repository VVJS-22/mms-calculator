export const getMean = (data) => {
    const total = data.reduce((p,c) => p+c)
    const mean = total / data.length

    return mean
}
