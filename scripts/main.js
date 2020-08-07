function genArray(size){
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    var arr = [];

    for (var i=0; i<size; i++){
        arr = arr.concat(getRandomInt(size));
    }

    return arr;
}

function defArrSize(){
    
}


var menu = {
    generate: function () {
        var size=defArrSize();

        var arr = genArray(size);
    }
}
