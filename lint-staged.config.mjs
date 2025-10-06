export default {
  '*.ts': [() => 'tsc', 'git add ./dist'],
  '*': 'eslint',
}
