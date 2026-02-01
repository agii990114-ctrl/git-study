import { Command } from 'commander'
import { add, list, del, edt } from './cmd.js'

const program = new Command();

program.command('add')
    .argument('<word>')
    .description('단어 추가')
    .action((word) => {
        add(word)
    });

program.command('list')
    .description('단어 목록')
    .action(list);

program.command('del')
    .argument('<word>')
    .description('단어 삭제')
    .action((word) => {
        del(word)
    });

program.command('edt')
    .argument('<word>')
    .argument('<edtWord>')
    .description('단어 수정')
    .action((word, edtWord) => {
        edt(word, edtWord)
    });

program.parse(process.argv);

