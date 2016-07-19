module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    ts: {
      app: {
        files: [{
          src: ['src/**/*.ts', '!src/_all.d.ts'],
          dest: '.'
        }],
        options: {
          module: 'commonjs',
          noLib: false,
          target: 'es6',
          sourceMap: false
        }
      }
    },
    watch: {
      ts: {
        files: ['src/**/*.ts'],
        tasks: ['ts']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ts');

  grunt.registerTask('default', ['ts']);
};
