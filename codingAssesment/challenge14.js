function buildJsBasicsChecklist(items) {
    const result = [];
    let number = 1;

    for (const item of items) {
        const trimmed = item.trim();

        if (!trimmed) continue;

        result.push(`${number}. ${trimmed} - TODO`);
        number++;
    }

    return result;
}