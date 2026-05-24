function summarizeJsBasicsResults(results) {
    let passed = 0;
    let failed = 0;
    let skipped = 0;

    for (const result of results) {
        const normalized = result.toLowerCase();

        if (normalized.includes('pass')) passed++;
        if (normalized.includes('fail')) failed++;
        if (normalized.includes('skip')) skipped++;
    }

    return {
        total: results.length,
        passed: passed,
        failed: failed,
        skipped: skipped
    };
}
