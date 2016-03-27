module.exports = function(grunt) {

  grunt.initConfig({
    starlight: {
      hello: {
        src: 'src/app.lua',
        dest: 'dist/app.lua.js',
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
