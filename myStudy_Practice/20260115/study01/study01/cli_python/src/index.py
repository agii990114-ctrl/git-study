# print('파이썬')

import argparse
from cmd import add, List

parser = argparse.ArgumentParser(description="CLI 프로그램")
subparsers = parser.add_subparsers(dest='command')
add_parser = subparsers.add_parser('add', help='메모 추가')
add_parser.add_argument('input01', help='메모내용')
add_parser.add_argument('input02', help='메모내용')

add_parser = subparsers.add_parser('list', help='목록보기')

args = parser.parse_args()


if args.command == 'add':
    add(args.input01, args.input02)
elif args.command == 'list':
    List()


# if args.command == 'list':
#     List()
