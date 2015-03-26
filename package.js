Package.describe({
  name: 'rahul:animate-everything',
  summary: "Patch the hot code reload CSS live injection feature to transition all CSS changes.",
  version: "1.0.2",
  git: "https://github.com/Primigenus/animate-everything.git",
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('rahul-animate-everything.css');
});
