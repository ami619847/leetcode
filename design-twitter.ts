class Twitter {
    private time: number;
    private tweets;
    private follows;

    constructor() {
        this.time = 0;
        this.tweets = new Map();
        this.follows = new Map();
    }

    postTweet(userId: number, tweetId: number): void {
        if (!this.tweets.has(userId)) {
            this.tweets.set(userId, []);
        }
        this.tweets.get(userId).push({time: ++this.time, id: tweetId});
    }

    getNewsFeed(userId: number): number[] {
        const candidates = [];
        const users = new Set([userId]);

        if (this.follows.has(userId)) {
            for ( const followee of this.follows.get(userId) ) {
                users.add(followee);
            }
        }

        for (const uid of users) {
            const userTweets = this.tweets.get(uid) || [];
            candidates.push(...userTweets.slice(-10));
        }

        return candidates
            .sort((a, b) => b.time - a.time)
            .slice(0, 10)
            .map(tweet => tweet.id);   
    }

    follow(followerId: number, followeeId: number): void {
        if (followerId === followeeId) return ;
        if (!this.follows.has(followerId)) {
            this.follows.set(followerId, new Set());
        }
        this.follows.get(followerId).add(followeeId);
    }

    unfollow(followerId: number, followeeId: number): void {
        if (this.follows.has(followerId)) {
            this.follows.get(followerId).delete(followeeId);
        }
    }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */