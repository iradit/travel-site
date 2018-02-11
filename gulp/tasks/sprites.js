var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del');

var config ={
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprites.css'
        }
      }
    }
  }
}

gulp.task('beginClean', function(){
  return del(['./app/temp/sprite','./app/assets/images/sprites']);
});

gulp.task('createSprite',['beginClean'], function(){
  return gulp.src('./app/assets/images/icons/**/*.svg')//va trouver les icons
    .pipe(svgSprite(config))//assemble les fichier en 1
    .pipe(gulp.dest('./app/temp/sprite/')); //faire copie dans autre dossier
});

gulp.task('copySpriteGraphic',['createSprite'], function(){
  return gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCSS', ['createSprite'], function(){ //[''] pour lister les "dependencies" qui doivent être effectuée avant de poursuire la tache
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean',['copySpriteGraphic', 'copySpriteCSS'], function(){
  return del('./app/temp/sprite');
});

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);
