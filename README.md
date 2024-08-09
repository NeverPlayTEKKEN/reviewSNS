# 注意
**これは現在開発中のプロジェクトです。**

# 言語等
- フロントエンド：Next.js, tailwind CSS
- バックエンド：Python Django
- DB：Amazon S3, Amazon RDS

# 環境
- WEBサーバー、アプリサーバー：EC2
- DB：上述
- 負荷分散：Elastic Load Balancing（必要なら）

# データイメージ
- 写真データ→フロントエンドから直接S3へ
- そのほかのデータ→フロントエンド→（RestAPI）→Django→RDS

# ログイン認証
- Django？（未定）