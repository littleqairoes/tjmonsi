Package.describe({
  name: 'littleq:tjmonsi-core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Package list for tjmonsi website core',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/littleqairoes/tjmonsi-core',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  var packages = [
    "littleq:littleq-core@0.0.1"
  ]

  api.use(packages)
  api.imply(packages)
});

Package.onTest(function(api) {
  // api.use('ecmascript');
  // api.use('tinytest');
  // api.use('littleq:tjmonsi-website');
  // api.addFiles('tjmonsi-website-tests.js');
});
