print('파이썬')

import argparse
from word import list,insert, update,delet

parser = argparse.ArgumentParser(description="CLI 프로그램")
subparsers = parser.add_subparsers(dest="command")

add_parser = subparsers.add_parser("list")
add_parser = subparsers.add_parser("insert")
add_parser.add_argument("word")
add_parser = subparsers.add_parser("update")
add_parser.add_argument("id")
add_parser.add_argument("word")
add_parser = subparsers.add_parser("delet")
add_parser.add_argument("id")

args = parser.parse_args()

if args.command == "list":
    list()
if args.command == "insert":
    insert(args.word)
if args.command == "update":
    update(args.id, args.word)
if args.command == "delet":
    delet(args.id)
