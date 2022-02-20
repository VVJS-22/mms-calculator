// const data = [1,2,3,4,5]

export const getMean = (data) => {
    const total = data.reduce((p,c) => p+c)
    const mean = total / data.length

    return mean
}

// console.log(getMean(data))