// TODO: `rule` should have a reference to stylesheet it is contained in,
// maybe we don't need to pass `sh` in here.
function removeRule (sh, rule) {
    var maxIndex = rule.index;
    var rules = sh.cssRules || sh.rules;
    maxIndex = Math.max(maxIndex, rules.length - 1);
    while (maxIndex >= 0) {
        if (rules[maxIndex] === rule) {
            sh.deleteRule(maxIndex);
            break;
        }
        maxIndex--;
    }
}

exports.removeRule = removeRule;