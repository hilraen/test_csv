import _ from 'lodash';

export default function solution(content){
  // BEGIN
  const data = content
    .trim()
    .split('\r\n')
    .slice(1)
    .map((e) => e.split(','));
  const totalCount = data.length;
  console.log(`Суммарно пассажиров: ${totalCount}`);

  const stations = data.map((s) => s[12]);
  const uniqStations = _.uniq(stations);
  
  console.log(`Названия станций-остановок: ${uniqStations.join(' ')}`);

  let menCount = 0;
  let womenCount = 0;
  for (let people of data) {
    if (people[5] === 'male') {
      menCount += 1;
    } else womenCount += 1;
  }
  console.log(`Мужчин: ${menCount}. Женщин: ${womenCount}`);

  let survived = 0;
  for (let ppl of data) {
    if (ppl[1] === '1') {
      survived += 1;
    }
  }
  const survivedPercent = (survived / data.length) * 100
  console.log(`Процент выживших: ${Math.round(survivedPercent*100)/100} %`);

  const noQuotes = data.map((name) => name[3].replace(/"/g, ''));
  const nameStartingWA = noQuotes.reduce((acc, user) => {
    if (user.startsWith('A')) {
      acc.push(' ' + user);
    }
    return acc;
  }, []);
  console.log(`Имена пассажиров, начинающиеся на A:${nameStartingWA}.`);
  // END
}
