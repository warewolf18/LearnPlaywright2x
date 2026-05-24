function countPassingJsBasicsChecks(results) {
    let count = 0;

    for (const result of results) {
        if (result.toLowerCase().includes('pass')) {
            count++;
        }
    }

    return count;
}
