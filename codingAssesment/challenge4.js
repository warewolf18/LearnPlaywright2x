function getJsBasicsKeywordMeaning(term) {
    const normalized = term.trim().toLowerCase();

    const keywordMap = {
        'node': 'runtime',
        'v8': 'engine',
        'npm': 'package-manager',
        'let': 'block-scoped variable',
        'const': 'constant variable',
        'var': 'function-scoped variable',
        'null': 'intentional absence of value',
        'undefined': 'declared but not assigned',
        'typeof': 'type checking operator',
        'identifier': 'name given to a variable or function',
        'literal': 'fixed value written directly in code',
        'comment': 'non-executed explanation in code',
        'function': 'reusable block of code',
        'return': 'exits function and gives back a value',
        'class': 'blueprint for creating objects',
    };

    return keywordMap[normalized] ?? 'unknown';
}