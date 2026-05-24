function findFirstCriticalJsBasicsBug(bugs) {
    for (const bug of bugs) {
        if (bug.severity === 'critical') {
            return bug.title;
        }
    }
    return 'No critical bug';
}
