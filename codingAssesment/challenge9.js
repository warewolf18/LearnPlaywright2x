function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
    const suite = suiteName.trim();
    const env = environment.trim().toLowerCase();
    const build = `build-${buildNumber}`;

    return `${suite} | ${env} | ${build}`;
}