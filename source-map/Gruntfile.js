module.exports = function(grunt) {

  grunt.initConfig({
    starlight: {
      example: {
        src: 'src/script/*.lua',
        dest: 'dist/script/app.lua.js',
        options: {
          main: 'app.lua',
          basePath: 'src/script',
          sourceMap: true,
        }
      }
    },

    babel: {
      example: {
        options: {
          presets: ['es2015'],
          sourceMap: true,
          // `inputSourceMap` is loaded at run-time; see `babel-runner` below.
        },
        src: 'dist/script/app.lua.js',
        dest: 'dist/script/app.lua.js',
      }
    },

    copy: {
      example: {
        expand: true,
        cwd: 'src',
        src: ['index.html', 'style/main.css'],
        dest: 'dist/',
      }
    }
  });

  grunt.loadNpmTasks('grunt-starlight');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('babel-runner', function () {
    const inputSourceMap = grunt.file.readJSON('dist/script/app.lua.js.map');
    grunt.config.set('babel.example.options.inputSourceMap', inputSourceMap);
    grunt.task.run('babel:example');
	});

  // Default task.
  grunt.registerTask('default', ['starlight:example', 'babel-runner', 'copy:example']);

};
