function createUniqueJsBasicsTags(tags) {
    const result = [];

    for (const tag of tags) {
        const normalized = tag.trim().toLowerCase();

        if (normalized && !result.includes(normalized)) {
            result.push(normalized);
        }
    }

    return result;
}