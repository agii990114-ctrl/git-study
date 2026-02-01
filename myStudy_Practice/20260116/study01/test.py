import json


def getData():
    f = open('./data/word.json', "r", encoding="utf-8")
    data = json.load(f)
    f.close()
    return data


def setData(data):
    f = open('./data/word.json', "w", encoding="utf-8")
    json.dump(data, f, ensure_ascii=False)
    f.close()
    목록(1)


# def 목록(args):
    data = getData()
    row1 = "="*30
    row2 = "-"*30
    print(row1)
    print(f'ID \t 단어')
    print(row2)
    for i in range(len(data['words'])):
        print(f'{data['words'][i]["id"]} \t {data['words'][i]["word"]}')
        if i+1 < len(data['words']):
            print(row2)
    if len(data["words"]) == 0:
        print('입력값이 없습니다')
    print(row1)


def 목록(args):
    data = getData()
    row1 = "="*40
    row2 = "-"*40
    print(row1)
    print(f'ID\t목록')
    for i in range(len(data["words"])):
        print(f'{data["words"][i]["id"]}\t{data["words"][i]["word"]}')
        if i + 1 < len(data["words"]):
            print(row2)
        if len(data["words"]) == 0:
            print('아무것도 없습니다')
    print(row1)


def 추가(args):
    pass


def 편집(args):
    data = getData()
    print(args.id)
    for i in range(len(data["words"])):
        if data["words"][i]["id"] == int(args.id):
            data["words"][i]["word"] = args.word
            break
    setData(data)


def 삭제(args):
    data = getData()
    for i in range(len(data["words"])):
        if data["words"][i]["id"] == int(args.id):
            data["words"].pop(i)
            break
    setData(data)
