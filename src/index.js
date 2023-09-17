const marcelGrammar = require('./marcel.js');

module.exports = (hljs) => {
    hljs.registerLanguage('marcel', marcelGrammar);
};

module.exports.marcel = marcelGrammar;