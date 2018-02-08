var gulp = require('gulp'), //virgule et on peut enlever le var suivant si plusieurs var a la suite
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){

  browserSync.init({
    server:{
      baseDir:"app"
    }

  });

  watch('./app/index.html',function(){// vient surveiller un fichier (index)
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('cssInject');
  });
});

gulp.task('cssInject', ['styles'], function(){ //['styles'] vient ajouter une dépendance qui doit etre réalisée avant la tache susnommée
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
