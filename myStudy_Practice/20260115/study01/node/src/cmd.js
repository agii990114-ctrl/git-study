import fs from 'fs';
import { json } from 'stream/consumers';

const getData = () => {
    const f = fs.readFileSync('./data/word.json', 'utf-8')
    return JSON.parse(f)

}


export const add = (word) => {
    const data = getData()
    const list = data.wordList

    list.push(word)

    console.log(data)
    const f = fs.writeFileSync('./data/word.json', JSON.stringify(data), 'utf-8')

}

export const list = () => {
    const data = getData();
    return data.wordList.map((v) => console.log(v))
}

export const del = (word) => {
    const data = getData();
    let list = data.wordList;
    list = list.filter((v, i) => i !== list.indexOf(word))
    const delData = { ...data, wordList: list }
    const f = fs.writeFileSync('./data/word.json', JSON.stringify(delData), 'utf-8')
}

export const edt = (word, edtWord) => {
    const data = getData();
    let list = data.wordList;
    // if (list.includes(word)) {
    list[list.indexOf(word)] = edtWord
    // }
    const editData = { ...data, wordList: list }
    const f = fs.writeFileSync('./data/word.json', JSON.stringify(data), 'utf-8')
}