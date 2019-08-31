/*
해당 내용은 메서드가 부여되지 않는다...
function Device (id) {
    this.id = id;
    var getId = function () {
        return this.id;
    }
}
*/

/*
const Device = function (id) {
    return {
        id : id,
        getId: function () {
            return this.id;
        }
    }
}
*/

function Device (id) {
    if(!id) {
        throw 'You need to input id!!!';
    }
    this.id = id;
    this.getId = function () {
        return this.id;
    }
}

const galaxy = new Device();
galaxy.getId();