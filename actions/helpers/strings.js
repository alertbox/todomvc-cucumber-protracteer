export function listOf(delimitedValues) {
    return delimitedValues.split(',').map(function (value) { return value.trim(); });
}
