# Bearer

- わかりやすかったQiitaの記事
  - [Bearer認証について](https://qiita.com/h_tyokinuhata/items/ab8e0337085997be04b1)

- [公式doc](http://openid-foundation-japan.github.io/rfc6750.ja.html)

## Bearer認証とは

- Oauth2.0で使われる認証の方式

- Oauth2.0では保護リソースへのアクセスのためにアクセストークンと使って認証を行っている。アクセスの度に毎回アクセストークンの発行を行っていては面倒なので、このBearer認証を使うことで発行したことを証明できる。

- 最初のアクセストークンの発行はBasic認証でやるのが基本（？）