export const getMode = (array) => {
    const map = new Map();
    let maxFreq = 0;
    let mode;
    
        for(const item of array) {
        let freq = map.has(item) ? map.get(item) : 0;
        freq++;
    
        if(freq > maxFreq) {
            maxFreq = freq;
            mode = item;
        }
        
        map.set(item, freq);
        }
    
        return mode;
    };