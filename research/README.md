有興趣的人可以試試看這些問題~


AWS

1. RDS blue green 部屬完之後會發生什麼事，應用端在切換的過程中應該要注意什麼事情，B/G 可以應用在哪邊架構為 CloudFront -> ALB -> TG，在 ALB Rule 有設定規則偵測 request 特定 header forward 到特定 TG
2. 發現規則沒有生效，未如預期收到特定 TG 的回應，如何排查
3. private EC2 希望使用 VPC endpoint 下載 S3 中的檔案，創建完 VPC endpoint 之後無法連線到 S3，如何排查
 
Azure

1. 如何確認azure上的虛擬網路沒用
我要如何確認vnet沒有被任何資源使用
2. azure vm備份請教
azure vm備份如何規劃,費用多少?
Hint : recovery service vault
3. Azure Postgres 無法關閉SSL
在Azure PostgresSQL伺服器的Azure資料庫新增了一個DB，但是我無法連線。發現是他預設一定要使用SSL連線，我想關閉但是UI沒有辦法勾選，只能用Azure Cli去下指令
這是客戶用的指令 : az postgres server configuration set --resource-group Res-Essentials-Management --server-name essentials --name require_ssl --value Disabled
Hint : 客戶使用的是flexible server，可以先確認指令是否可以使用
4. 協助設計自動化開關機runbook
Hint : Azure automation
5. Azure service principle secret value 設置 : 
在開發上有許多應用程式使用 Azure service principle，會遇到 secret value 過期的問題，想請問是否有方案可以自動化更新 secret value 
Hint : Azure automation , azure keyvault


