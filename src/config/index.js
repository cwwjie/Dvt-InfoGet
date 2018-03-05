let config = (() => {
    let NODE_ENV = process.env.NODE_ENV || '';

    if (NODE_ENV === 'development') {
        let URLbase = 'http://192.168.0.100:8080';

        return {
            URLbase: URLbase,
            URLversion: `${URLbase}/Dvt-web`
        }
    } else {
        let URLbase = `${document.location.protocol}//112.74.92.97:${document.location.protocol === 'https:' ? '8443' :'8080'}`;

        return {
            URLbase: URLbase,
            URLversion: `${URLbase}/dvtweb`
        }
    }
})();

export default config
