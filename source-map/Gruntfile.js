module.exports = function(grunt) {

  grunt.initConfig({
    starlight: {
      example: {
        src: 'src/*.lua',
        dest: 'dist/app.lua.es6.js',
        options: {
          main: 'app.lua',
          basePath: 'src',
          sourceMap: true,
        }
      }
    },

    babel: {
      example: {
        options: {
          sourceMap: true,
          // `inputSourceMap` is loaded at run-time; see `babel-runner` below.
        },
        src: 'dist/app.lua.es6.js',
        dest: 'dist/app.lua.js',
      }
    }
  });

  grunt.loadNpmTasks('grunt-starlight');
  grunt.loadNpmTasks('grunt-babel');

	grunt.registerTask('babel-runner', function () {
    const inputSourceMap = grunt.file.readJSON('dist/app.lua.es6.js.map');
    grunt.config.set('babel.example.options.inputSourceMap', inputSourceMap);
    grunt.task.run('babel:example');
	});

  // Default task.
  grunt.registerTask('default', ['starlight:example', 'babel-runner']);

};
