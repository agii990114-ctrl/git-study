import argparse
from method import select, insert
from dotenv import load_dotenv

load_dotenv(override=True)

commands = [
    {"command": "select", "argument": [], "method": select},
    {"command": "insert", "argument": [
        "name", "email", "password", "gender"], "method": insert},
]


def runCmd(args):
    for cmd in commands:
        if args.command == cmd['command']:
            if cmd["method"] == None:
                print("함수 입력 없어")
            else:
                cmd["method"](args)
                break


def run():

    parser = argparse.ArgumentParser(description="힝")
    sub_parsers = parser.add_subparsers(dest='command')
    for cmd in commands:
        add_parsers = sub_parsers.add_parser(cmd["command"])
        for arg in cmd["argument"]:
            add_args = add_parsers.add_argument(arg)
    try:
        runCmd(parser.parse_args())
    except SystemExit:
        # argparse가 에러를 내고 종료하려고 할 때 실행됨
        print('입력 커맨드가 잘못됐어요. 다시 확인해주세요!')


if __name__ == "__main__":
    run()
