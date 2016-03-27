module.exports = function(grunt) {

  grunt.initConfig({
    starlight: {
      hello: {
        src: 'src/*.lua',
        dest: 'dist/app.lua.js',
      },
      options: {
        main: 'app.lua',
        basePath: 'src'
      }
    },

    babel: {
      options: {
        plugins: ['transform-es2015-destructuring']
      },
      hello: {
        src: 'dist/app.lua.js',
        dest: 'dist/app.lua.js',
      }
    }
  });

  grunt.loadNpmTasks('grunt-starlight');
  grunt.loadNpmTasks('grunt-babel');

  // Default task.
  grunt.registerTask('default', ['starlight:hello', 'babel:hello']);

};
