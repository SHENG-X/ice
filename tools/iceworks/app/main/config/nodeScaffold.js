const koa2 = {
  tarball: {
    name: 'ice-koa-template',
    title: 'ICE Koa Template',
    source:
      {
        type: 'npm',
        // npm: 'ice-koa-template',
        npm: '@icedesign/ice-koa-template',
        version: '1.0.0-beta.2',
        registry: 'http://registry.npmjs.com'
      }
  },
  pendingFields: {
    dotFiles: [
      '.editorconfig',
      '.eslintignore',
      '.eslintrc',
      '.gitignore',
      '.gitkeep'
    ],
    extractDirs: [
      'src',
      'public'
    ],
    pkgAttrs: [
      'scripts',
      'dependencies',
      'devDependencies'
    ]
  }
};

const midway = {
  tarball: {
    name: 'ice-midway-template',
    title: 'ICE Midway Template',
    source:
      {
        type: 'npm',
        npm: 'ice-midway-template',
        registry: 'http://registry.npmjs.com'
      }
  },
  pendingFields: {
    dotFiles: [
      '.editorconfig',
      '.eslintignore',
      '.eslintrc',
      '.gitignore',
      '.gitkeep'
    ],
    extractDirs: [
      'src',
      'public'
    ],
    pkgAttrs: [
      'scripts',
      'dependencies',
      'devDependencies'
    ]
  }
};

module.exports = {
  koa2,
  midway
};
