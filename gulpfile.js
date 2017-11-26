const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const babel = require('gulp-babel')
const eslint = require('gulp-eslint')

gulp.task('lint', () => {
  return gulp.src(['src/**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
})

gulp.task('compile', function () {
  return gulp.src('./src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./dist'))
})

gulp.task('start', function () {
  nodemon({
    script: 'dist/entry.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' }
  })
})

gulp.task('watch', ['lint', 'compile'], function () {
  return nodemon({
    script: 'dist/entry.js',
    watch: 'src',
    tasks: ['lint', 'compile'] // compile synchronously onChange
  })
})

gulp.task('default', ['watch'])
