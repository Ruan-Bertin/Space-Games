const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

function comprimeImagem(){
    return gulp.src('./images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./imagesCompress'));
}

function comprimeImgConsole(){
  return gulp.src('./images/consoles/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./imagesCompress/consoles'));
}

function comprimeImgDestaque(){
  return gulp.src('./images/destaque/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./imagesCompress/destaque'));
}

function comprimeImgJogos(){
  return gulp.src('./images/jogos/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./imagesCompress/jogos'));
}

function comprimeImgLancamentos(){
  return gulp.src('./images/lancamentos/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./imagesCompress/lancamentos'));
}

function comprimeImgPerifericos(){
  return gulp.src('./images/perifericos/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./imagesCompress/perifericos'));
}

function comprimeImgSlides(){
  return gulp.src('./images/slides/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./imagesCompress/slides'));
}



exports.default = function(){
  gulp.watch('./images/*', {ignoreInitial: false}, gulp.series(comprimeImagem));
  gulp.watch('./images/consoles/*', {ignoreInitial: false}, gulp.series(comprimeImgConsole));
  gulp.watch('./images/destaque/*', {ignoreInitial: false}, gulp.series(comprimeImgDestaque));
  gulp.watch('./images/jogos/*', {ignoreInitial: false}, gulp.series(comprimeImgJogos));
  gulp.watch('./images/lancamentos/*', {ignoreInitial: false}, gulp.series(comprimeImgLancamentos));
  gulp.watch('./images/perifericos/*', {ignoreInitial: false}, gulp.series(comprimeImgPerifericos));
  gulp.watch('./images/slides/*', {ignoreInitial: false}, gulp.series(comprimeImgSlides));
  gulp.watch('./images/*', {ignoreInitial: false}, gulp.series(comprimeImagem));
}