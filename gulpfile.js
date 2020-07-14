const gulp = require('gulp')
const uglify = require('gulp-uglify-es').default
const concat = require('gulp-concat')

const filesJs = ['src/index.js', 'public/scripts/events.js', 'public/scripts/cart.js']

gulp.task('minify', () =>
    gulp.src(filesJs)
        .pipe(uglify())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./public/'))
)