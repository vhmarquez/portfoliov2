///////////////////////////////////////////////
// NODE MODULES
// =========================

var	gulp = require('gulp'),
	watch = require('gulp-watch'),
	rename = require('gulp-rename'),
	compass = require('gulp-compass'),
	minifyCSS = require('gulp-minify-css');

// Default gulp tasks
gulp.task('default', function() {

});

// Compile SASS and Minify CSS
gulp.task('compass', function() {
	gulp.src('temp/sass/**/*.sass')
		.pipe(compass({
			css: 'temp/css',
			sass: 'temp/sass'
		}))
		.pipe(gulp.dest('temp/css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifyCSS())
		.pipe(gulp.dest('architecture/css'));
});

// Minify all CSS
gulp.task('minify-css', function(){
	gulp.src('temp/css/*.css')
		.pipe(rename({suffix: '.min'}))
		.pipe(minifyCSS())
		.pipe(gulp.dest('architecture/css'));
});

// Watch Task
gulp.task('watch', function(){
	gulp.watch('temp/sass/**/*.sass', ['compass'])
	gulp.watch('temp/js/**/*.js', ['compress']);
});