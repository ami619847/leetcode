function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    let counter = 0;

    if (numCourses <= 0) return true;

    let inDegree = new Array(numCourses).fill(0);
    let graph = Array.from({length: numCourses}, () => []);

    // build the graph and update inDegree for each node
    for (const [course, prereq] of prerequisites) {
        graph[prereq].push(course);
        inDegree[course]++        
    }

    // initialize the queue with courses having no prerequisites (inDegree is 0)
    let queue = [];
    for ( let i=0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    //process nodes with no prerequisites
    while(queue.length > 0) {
        let course = queue.shift(); //dequeue
        counter++;

        //process all the children of the current course
        for (const nextCourse of graph[course]) {
            inDegree[nextCourse]--;
            if (inDegree[nextCourse] === 0) {
                //enqueue nextCourse if inDegree becomes 0
                queue.push(nextCourse); 
            }
        }
    }

    return counter === numCourses;
};