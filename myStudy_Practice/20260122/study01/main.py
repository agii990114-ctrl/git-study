import argparse
from cmd import insert, select, delete, update


def start():
    commands = [
        {"command": "insert", "arguments": ['word'], "method": insert},
        {"command": "select", "arguments": [], "method": select},
        {"command": "update", "arguments": ['id', 'word'], "method": update},
        {"command": "delete", "arguments": ["id"], "method": delete},
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

print('종료')
