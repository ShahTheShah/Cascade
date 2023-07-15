import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';


const config = {
    syntax: 'postcss-scss',
    map: true,
    plugins: {
        autoprefixer,
        cssnano
    }
}

export default config;