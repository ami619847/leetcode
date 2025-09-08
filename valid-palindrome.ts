function isPalindrome(s: string): boolean {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    // console.log(s);

    for (let left = 0, rigth = s.length - 1; left <= rigth; left++, rigth--) {  
        if (s[left] !== s[rigth]) {
            return false;
        }
    }

    return true;
};
