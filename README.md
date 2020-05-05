# 概要

typescriptで記述、かつpromiseを使用したソースがIE11で動作する様にwebpackでトランスパイルする検証

# package.json

使用モジュールについて

## webpack関連

- webpack
    - コアモジュール
- webpack-cli
    - webpackコマンド
- webpack-dev-server
    - ローカルサーバー
- @types/webpack-env
    - 型定義
- @types/webpack
    - 型定義

## Typescript関連

- typescript
    - Typescript本体
- ts-loader
    - webpackでTypescriptを読み込む
- fork-ts-checker-webpack-plugin
    - ts-loaderではコンパイルのみを実行し型チェックは別途並列で実行
- tslint
    - 型チェックを実行

## babel関連

- @babel/core
- @babel/preset-env
- core-js
