var fs = require('fs');
var colors = require('colors');
var StatMode = require('stat-mode');

fs.stat('./cat.png', function (err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

fs.readFile('./tekst.txt', 'utf-8', function (err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\n A tak wyglądają po zapisie!', function (err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function (err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});



fs.readdir('.', function (err, files) {
    if (err) throw err;
    fs.writeFile('./filelist.txt', files, function (err) {
        if (err) throw err;
        console.log('Zapisano!');
    });
});