module.exports = function(grunt) {

  grunt.initConfig({
    starlight: {
      counter: {
        src: 'src/counter-app.lua',
        dest: 'dist/counter-app.es6.js',
      }
    },

    babel: {
      options: {
        plugins: ['transform-es2015-destructuring']
      },
      counter: {
        src: 'dist/counter-app.es6.js',
        dest: 'dist/counter-app.js',
      }
    }
  });

  grunt.loadNpmTasks('grunt-starlight');
  grunt.loadNpmTasks('grunt-babel');

  // Default task.
  grunt.registerTask('default', ['starlight:counter', 'babel:counter']);

};
