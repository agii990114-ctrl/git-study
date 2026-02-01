import argparse
from cmd import add, arrList, remove, edit

parser = argparse.ArgumentParser(description="단어장")
subparsers = parser.add_subparsers(dest="command", help="사용 가능한 명령어")
add_parser = subparsers.add_parser('add', help='단어 추가')
add_parser.add_argument("word", help="추가할 단어")

add_parser = subparsers.add_parser('list', help='단어 목록')

add_parser = subparsers.add_parser('remove', help='단어 삭제')
add_parser.add_argument("word", help="삭제할 단어")

add_parser = subparsers.add_parser('edit', help='단어 수정')
add_parser.add_argument("word", help="검색 단어")
add_parser.add_argument("editWord", help="수정할 단어")

args = parser.parse_args()

if args.command == 'add':
    add(args.word)
if args.command == 'list':
    arrList()
if args.command == 'remove':
    remove(args.word)

if args.command == 'edit':
    edit(args.word, args.editWord)
