function summarizeJsBasicsMatrix(matrix) {
    let total = 0;
    let passed = 0;
    let failed = 0;
    const failedCases = [];

    for (const row of matrix) {
        for (const cell of row) {
            total++;

            if (cell.toLowerCase().includes('pass')) {
                passed++;
            } else if (cell.toLowerCase().includes('fail')) {
                failed++;
                failedCases.push(cell);
            }
        }
    }

    return { total, passed, failed, failedCases };
}