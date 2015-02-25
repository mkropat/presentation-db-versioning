// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  cube = require('bespoke-theme-cube'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress');

// Bespoke.js
bespoke.from('article', [
  cube(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  progress()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

// Syntax highlihgting by Brian Marsh (prism-powershell):
// https://github.com/pezhore/prism-powershell

Prism.languages.powershell = {
        // This comment regex is ugly because prism.js replaces "<" with "&lt;" behind the scenes for some reason
        'comment': /(\&lt\;#[\w\W]*?#>)|(\#.*)/g,
        'string': /(\@\"[\w\W]*?\"\@)|((\'|\")[\w\W]*?(\'|\"))/g,
        'keyword': /\b(foreach|where|sort|switch|if|else|while|do|for|return|function|new|try|throw|catch|finally|break|exit|begin|process|end)(?![-\S])?\b/ig,
        'boolean': /(\$true|\$false)/g,

        // This is for PowerShell Actions, leveraging the theme's pre-defined color scheme for attr-value
        'attr-value': /(invoke|add|get|read|test|start|new|set|write|output|where)-[^ (]*/ig,

        // This is for PowerShell Variables, leveraging the theme's pre-defined color scheme for symbol
        'symbol': /(?!(\$true|\$false))(\$[a-z|A-Z|0-9|_|-]*)\b/g,
        'number': /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,
        'operator': /[-+]{1,2}|!|&lt;=?|>=?|={1,3}|(&amp;){1,2}|\|?\||\?|\*|\/|\~|\^|\%|-or|-and|-lt|-le|-gt|-ge|-match|-like/g,
        'ignore': /&(lt|gt|amp);/gi,
        'punctuation': /[{}[\];(),.:]/g
};
