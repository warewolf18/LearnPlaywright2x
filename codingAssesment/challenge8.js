function mergeJsBasicsConfig(defaultConfig, overrideConfig) {
    const merged = Object.assign({}, defaultConfig, overrideConfig);

    if (merged.retries === undefined) {
        merged.retries = 0;
    }

    return merged;
}