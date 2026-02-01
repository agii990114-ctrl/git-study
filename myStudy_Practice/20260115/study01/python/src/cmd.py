import json


def getData():
    f = open('./data/word.json', 'r', encoding='utf-8')
    return json.load(f)


def add(word):
    data = getData()
    arr = data['wordList']
    arr.append(word)
    f = open('./data/word.json', 'w', encoding='utf-8')
    json.dump(data, f, ensure_ascii=False)


def arrList():
    data = getData()
    arr = data['wordList']
    for v in arr:
        print(v)


def remove(word):
    data = getData()
    arr = data['wordList']

    arr.remove(word)
    f = open('./data/word.json', 'w', encoding='utf-8')
    json.dump(data, f, ensure_ascii=False)
    print(data)


def edit(word, editWord):
    data = getData()
    arr = data['wordList']
    for index in range(len(arr)):
        if arr[index] == word:
            arr[index] = editWord
    f = open('./data/word.json', 'w', encoding='utf-8')
    json.dump(data, f, ensure_ascii=False)
