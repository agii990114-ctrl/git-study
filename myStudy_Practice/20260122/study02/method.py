from db import findAll, save


def select(args):
    sql = f'''
    select * from edu.`user`
    '''
    result = findAll(sql)
    print("="*50)
    print(f'번호\t이름\t이메일\t비밀번호\t성별\t\가입일\t수정일')
    for row in result:
        pass


def insert(args):
    sql = f'''
    INSERT INTO edu.`user` (`name`,`email`,`password`,`gender`)
    VALUE ('{args.name}','{args.email}','{args.password}','{args.gender}')
    ;
    '''
    save(sql)

    sql2 = f'''
    select * from edu.`user`
    '''
    result = findAll(sql2)
    print(result)
