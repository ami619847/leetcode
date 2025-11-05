const map = new Map();
let counter: number = 0;

/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
    const shortUrl = "http://tinyurl.com/" + counter;
    map.set(shortUrl, longUrl);
    counter++;
    return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
	return map.get(shortUrl) || "";
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */