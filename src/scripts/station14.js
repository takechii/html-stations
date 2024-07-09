function getData() {
    // これから作ろうとしているもので、JavaScriptでフルネームを生成する必要が出てきました。
    // ただ現状持っている情報では、名前と苗字をそれぞれのみしかありません。
    // そのため、JavaScriptで連結させて生成することにしました。
    const test = [
        { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
        { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
    ];
    return test.map(buildFullName);
}

function buildFullName(data) {
    // full_nameを生成して追加する
    return {
        ...data,
        full_name: `${data.family_name} ${data.first_name}`
    };
}

// ブラウザに結果を表示する
const result = getData();
result.forEach(item => {
    const p = document.createElement('p');
    p.textContent = item.full_name;
    document.body.appendChild(p);
});
