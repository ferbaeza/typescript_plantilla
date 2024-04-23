const tasks = arr => arr.join(' && ');

module.exports = {
  hooks: {
    'pre-commit': tasks(['node ./husky/qa/precommit.js']),
    'post-merge': tasks(['echo "Actualizacion subida !" . date().toString()'])
  }
};
