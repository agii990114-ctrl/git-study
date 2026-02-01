import fs from 'fs';
import { json } from 'stream/consumers';

const getData = () => {
    const f = fs.readFileSync('./data/memo.json', 'utf-8')
    const data = JSON.parse(f)
    return data
}

export const add = (a, b) => {
    const data = getData()
    const result = Number(a) + Number(b)
    data.list.push(result)

    fs.writeFileSync('./data/memo.json', JSON.stringify(data), 'utf-8')

    console.log(data, result)


}

export const list = () => {
    console.log('list() 호출됨');

    for (const v of getData().list) console.log(v)
}