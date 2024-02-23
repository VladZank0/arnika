const pathSrc = "./app";
const pathDest = "./dist";

module.exports = {
    root: pathDest,
    html: {
        src: pathSrc + "/*.html",
        watch: pathSrc + "/*.html",
        dest: pathDest,
    },
    css: {
        src: pathSrc + "/css/**/*.css",
        watch: pathSrc + "/css/**/*.css",
        dest: pathDest + '/css',
    },
    scss: {
        src: pathSrc + "/scss/**/*.{scss, sass}",
        watch: pathSrc + "/scss/**/*.{scss, sass}",
        dest: pathDest + '/css',
    },
    js: {
        src: pathSrc + "/js/**/*.js",
        watch: pathSrc + "/js/**/*.js",
        dest: pathDest + '/js',
    },
    img: {
        src: pathSrc + "/images/**/*.{png,jpeg,jpg,gif,svg}",
        watch: pathSrc + "/images/**/*.{png,jpeg,jpg,gif,svg}",
        dest: pathDest + '/images',
    },
    font: {
        src: pathSrc + "/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        watch: pathSrc + "/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        dest: pathDest + '/font',
    },
    static: {
        src: pathSrc + "/static/**/*",
        watch: pathSrc + "/static/**/.*",
        dest: pathDest + '/',
    }
}
