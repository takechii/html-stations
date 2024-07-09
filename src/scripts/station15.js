function buildFullName(data) {
  return {
      ...data,
      full_name: `${data.family_name} ${data.first_name}`
  };
}

async function getData() {
// 3秒後にフルネームのリストを表示させる
const userList = [
  { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
  { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
];

const result = await test(userList);
return result;
}

function test(userList) {
return new Promise((resolve) => {
  setTimeout(() => {
    resolve(userList.map(buildFullName));
  }, 3000);
});
}

// ブラウザに結果を表示する
async function displayData() {
  const result = await getData();
  result.forEach(item => {
      const p = document.createElement('p');
      p.textContent = item.full_name;
      document.body.appendChild(p);
  });
}

displayData();
