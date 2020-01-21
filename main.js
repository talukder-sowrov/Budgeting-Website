require.config({
    baseUrl: "./library",
    waitSeconds: 200,
    paths: {
        "jquery": "//ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min"
    }
});


requirejs(['./library/ShowFile.js']);
requirejs(['./library/SendInfo.js']);
requirejs(['./library/RemoveData.js']);