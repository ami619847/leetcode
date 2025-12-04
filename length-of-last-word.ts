function lengthOfLastWord(s: string): number {
    //solution 1
    //time complexity O(n)
    //space complexity O(1)
    // let end = s.length - 1;
    // while (end >= 0 && s[end] === " " ) {
    //     end--;
    // }

    // let start = end;
    // while (start >= 0 && s[start] !== " ") {
    //     start--;
    // }

    // return end - start;

    //solution 2
    //time complexity O(n)
    //space complexity O(1)
    let length = 0, counting = false;

    for (let c of s) {
        if (c !== " ") {
            if (!counting) {
                counting = true;
                length = 1;
            } else length++;
        } else {
            counting = false;
        }
    }
    return length;
};