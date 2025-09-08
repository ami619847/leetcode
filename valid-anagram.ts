function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    // Solution 1

    // let sArr = s.split("").sort().join("");
    // let tArr = t.split("").sort().join("");       
    // return sArr === tArr ? true : false;

    // Solution 2
    const counter = new Map(); //hashmap

    for (let char of s) {
        counter.set(char, (counter.get(char) || 0) + 1); //counting letters and quantity
    }

    for (let char of t) {
        if (!counter.has(char) || counter.get(char) === 0) {
            return false;
        }
        counter.set(char, counter.get(char) - 1); //dedacting char
    }

    return true;
};