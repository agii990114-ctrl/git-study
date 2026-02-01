import argparse
from test import 추가, 목록, 삭제, 편집


def aa(a):
    print("안녕")


def start():
    commands = [
        {"command": "추가", "arguments": ['word'], "method": 추가},
        {"command": "목록", "arguments": [], "method": 목록},
        {"command": "편집", "arguments": ['id', 'word'], "method": 편집},
        {"command": "삭제", "arguments": ["id"], "method": 삭제},
    ]

    DESC = "CLI Program"
    parser = argparse.ArgumentParser(description=DESC)
    subparser = parser.add_subparsers(dest="command")

    for cmd in commands:
        add_parsers = subparser.add_parser(cmd["command"])
        for arg in cmd["arguments"]:
            add_argument = add_parsers.add_argument(arg)

    args = parser.parse_args()

    for cmd in commands:
        if args.command == cmd["command"]:
            if cmd["method"]:
                cmd["method"](args)
            else:
                print('정의되어 있지 않습니다.')
            break


start()
