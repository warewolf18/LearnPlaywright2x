function isValidJsBasicsIdentifier(name) {
    if (typeof name !== 'string' || name.trim() === '') return false;

    const trimmed = name.trim();

    const reserved = ['let', 'const', 'var', 'class', 'function', 'return'];
    if (reserved.includes(trimmed)) return false;

    const identifierPattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    return identifierPattern.test(trimmed);
}
console.log(isValidJsBasicsIdentifier("loginButton"));