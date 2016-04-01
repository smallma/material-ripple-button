module.exports = function(grunt, type) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    // watch: {
    //   configFiles: {
    //     files: ['Gruntfile.js'],
    //     options: {
    //       reload: true
    //     }
    //   },

    //   all: {
    //     files: ['*.js', '*.css', '*.html'],
    //     tasks: []
    //   }
    // },

    watch: {
      configFiles: {
        files: ['Gruntfile.js'],
        options: {
          reload: true
        }
      },
    },

    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "lib/*.css",
            "lib/*.js",
            "*.html"
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./"
          }
        }
      }
    }
  });

  grunt.registerTask('default', ['browserSync', 'watch']);
};