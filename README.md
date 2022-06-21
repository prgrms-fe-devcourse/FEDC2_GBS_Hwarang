# 👉 가봤슈🔥

# prettier vscode 설정 방법

cmd(ctrl) + shift + p => Open Settings.json(JSON)

```
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
```

와

```
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

입력 후 저장

# 사용 방법(패키지 설치)

## yarn

```
yarn install
```

## npm

```
npm install
```

# 사용한 패키지들(공식문서)

- [recoil](https://recoiljs.org/ko/)
- [axios](https://axios-http.com/kr/docs/intro)
- [react-hook-form](https://react-hook-form.com/)
- [emotion](https://emotion.sh/docs/introduction)
- [react-router-dom](https://reactrouter.com/docs/en/v6/getting-started/overview)

# main은 Production용입니다

git webhook을 통해서 jenkins와 연동하였습니다 따라서 main branch에 푸시하면 자동으로 develope 됩니다.
