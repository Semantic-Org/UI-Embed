
Package.describe({
  name    : 'semantic:ui-embed',
  summary : 'Semantic UI - Embed: Single component release',
  version : '2.2.10',
  git     : 'git://github.com/Semantic-Org/UI-Embed.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'embed.css',
    'embed.js'
  ], 'client');
});
