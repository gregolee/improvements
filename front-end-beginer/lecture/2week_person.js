const Person = {
    info: function(name, age) {
        const isAudit = age >= 19 ? '성인' : '미성년';
        const result = age && name && ' : 정상제출했습니다.' || '미제출입니다.'
        return `${name || '이름없음'}님은 ${isAudit || '0세'} : ${result}`;
    },
};

/**
 * ES2015 - Block 단위 scope (let, const)
 * ES2015 이전 - function 단위 scope (var)
 */