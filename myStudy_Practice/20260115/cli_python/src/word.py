import json

def getData():
  f = open('./data/word.json', "r", encoding="utf-8")
  result = json.load(f)
  f.close()
  return result

def setData(data):
    f = open('./data/word.json','w',encoding='utf-8')
    json.dump(data,f,ensure_ascii=False)
    f.close()
    list()  

def list():
    data = getData()
    row1 = "="*50
    row2 = "-"*50
    print(row1)
    print(f'번호\t내용')
    for i in range(len(data['words'])):
        if i < len(data['words']): print(row2)
        print(f'{data['words'][i]['id']}\t{data['words'][i]['word']}')
    print(row1)


    
def insert(word):
    data = getData()
    #if not len(data['words']) : id = 1
    #else : id = data['words'][-1]['id']+1
    
    id = (max((word["id"] for word in data["words"]), default=0) + 1)
    row = {"id" : id, "word" : word}
    data['words'].append(row)
    setData(data)  
    
def update(id, word):
    data = getData()
    for i in data['words']:
        if i['id'] == int(id) :
            i['word'] = word
            break
    setData(data)

def delet(id):
    data = getData()
    for i in range(len(data['words'])):
        if data['words'][i]['id'] == int(id) :
            del data['words'][i]
            break
    setData(data)
    
