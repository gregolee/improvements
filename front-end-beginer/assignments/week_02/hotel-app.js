const Hotel = {
    customers: [],
    getStatus: function () {
        let msg = '';
        this.customers.forEach(function (item, index, array) {
            msg += item + '님, ';
        });
        return (msg === '' && '체크인한 고객이 없습니다.') || msg.substr(0, msg.length-2) + '이 체크인했습니다.';
    },
    checkIn: function (name) {
        //잘못된 값, 빈값에 대한 검증
        let msg = (name !== '' && typeof name === 'string' && name) 
                || (name === '' && '고객의 성함이 입력되지 않았습니다.')
                || (typeof name !== 'String' && name + '은 문자열이 아닙니다.')
                || '알 수 없는 오류입니다. 관리자에게 문의하세요.';
        //중복 이름에 대한 체크
        this.customers.forEach(function (item, index, array) {
            msg = (item===name && '이미 '+name+'님은 체크인 하셨습니다.') || msg;
        });
        //체크인
        if (msg===name) this.customers.push(name);
        //return
        return (msg===name && '안녕하세요. '+name+'님 반갑습니다.') || msg;
    },
    checkOut: function (name) {
        //인원, 잘못된 값, 빈값에 대한 검증
        let msg = (this.customers.length===0 && name + '님은 체크인 명단에 없습니다. (체크인 인원이 없음.)')
                || (name !== '' && typeof name === 'string' && name) 
                || (name === '' && '고객의 성함이 입력되지 않았습니다.')
                || (typeof name !== 'String' && name + '은 문자열이 아닙니다.')
                || '알 수 없는 오류입니다. 관리자에게 문의하세요.';
        //체크아웃 및 없는인원 검증
        for (let i=0; i<this.customers.length && msg===name; i++) {
            msg = (this.customers[i]===name && this.customers.splice(i, 1)[0] + '님 감사합니다. 안녕히 가세요.')
                || name + '님은 체크인 명단에 없습니다.';
        }
        //return
        return msg;
    }
}

console.log(Hotel.getStatus());
console.log(Hotel.checkIn());
console.log(Hotel.checkIn(12345));
console.log(Hotel.checkIn('jylee'));
console.log(Hotel.checkIn('jylee'));
console.log(Hotel.checkIn('ㅇㅈㅇ'));
console.log(Hotel.getStatus());
console.log(Hotel.checkOut());
console.log(Hotel.checkOut(12345));
console.log(Hotel.checkOut('jylee'));
console.log(Hotel.checkOut('jylee'));
console.log(Hotel.getStatus());
console.log(Hotel.checkOut('ㅇㅈㅇ'));
console.log(Hotel.getStatus());