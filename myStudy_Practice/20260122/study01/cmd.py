from db import findAll, findOne, save


def insert(args):
    name = '지환'
    sql = f"insert into edu.study (`word`,`nickname`) value('{args.word}','{name}')"
    save(sql)
    select(None)


def select(args):
    sql = f"""select * from edu.study"""
    list = findAll(sql)
    bar = "=" * 50
    print("=" * 50)
    print(f'{'번호':<5}\t{'닉네임':<10}\t{'글자':<10}\t{'생성일자':<20}')

    for row in list:
        print("-"*50)
        # if len(row["word"]) > 10:
        #     print(f'{row["id"]}\t{row["word"][:7]}{row["regDate"]}')
        # else:
        print(f'{row["id"]}\t{row["nickname"]}\t{row["word"]}\t{row["regDate"]}')
    print("="*50)


def update(args):
    sql = f"UPDATE edu.study SET `word` ='{args.word}' WHERE `id` = {args.id}"
    save(sql)
    select(None)


def delete(args):
    sql = f"DELETE FROM edu.study WHERE `id` = {args.id}"
    save(sql)
    select(None)
