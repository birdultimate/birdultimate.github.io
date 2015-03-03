module.exports = function(grunt) {

  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
    
    concat: {
      dist: {
        src: [
          'src/js/main.js'
        ],
        dest: 'src/temp/<%= pkg.name %>.js'
      }
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        },
      },
      all: ['src/js/**/*.js']
    },

    sass: {
      dev: {
        files: {
          'dist/<%= pkg.name %>.min.css': 'src/scss/main.scss'
        },
        options: {
          style: "expanded"
        }
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.css': 'src/scss/main.scss'
        },
        options: {
          style: "compressed"
        }
      }
    },

    shell: {
      jekyllBuild: {
        command: "jekyll build --drafts"
      },
      jekyllBuildProd: {
        command: "jekyll build"
      },
      jekyllServe: {
        command: "jekyll serve"
      }
    },
    
    uglify: {
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': 'src/temp/<%= pkg.name %>.js'
        },
        screwIE8: true
      }
    },

    watch: {
      css: {
        files: ['styles/**/*.scss'],
        tasks: ['sass:dev', 'shell:jekyllBuild']
      },
      js: {
        files: ['scripts/*.js', 'scripts/data/*.js', 'scripts/tests/*.js'],
        tasks: [ 'jshint', 'concat', 'uglify', 'shell:jekyllBuild']
      },
      site: {
        files: ['**/*.html', '!_site/**/*.html', '_posts/**/*.md', '_drafts/**/*.md', '_data/**/*.yml'],
        tasks: ['shell:jekyllBuild']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'sass:dev', 'shell:jekyllBuild', 'watch']);
  grunt.registerTask('prod', ['jshint', 'concat', 'uglify', 'sass:dist', 'shell:jekyllBuildProd']);
  grunt.registerTask('serve', ['shell:jekyllServe']);
};