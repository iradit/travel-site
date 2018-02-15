var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
    .on('error', function(errorInfo){
      console.log(errorInfo.toString());
      this.emit('end');
    })//si gulp rencontre une erreur durant ce process, le code lui fait dire qu'il est parvenu à la fin du code ("sans rencontrer d'erreur") et du coup c bon, il ne s'interrompt pas
    .pipe(gulp.dest('./app/temp/styles'));
});
