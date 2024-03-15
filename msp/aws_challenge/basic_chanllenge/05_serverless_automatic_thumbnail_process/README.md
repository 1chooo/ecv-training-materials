# Serverless Automatic Thumbnail Process on AWS
### Overview
- Level: Basic
- Duration: 120 minutes

Your organization has set up a social networking site and wants to thumbnail images uploaded by users for different devices. However, the superior does not want to maintain the infrastructure of this system, so you want to implement it through a serverless architecture.


![](./diagram.png)

We can observe the below code segment in the `index.js` file:

```js
var srcBucket = process.env.source_bucket;
var dstBucket = process.env.target_bucket;
```

> [!TIP]
> We need to add the bucket information to the lambda function as environment variables instead of directly adding the policy to the lambda function. Additionally, configure the source bucket to trigger the lambda function and set the destination as SNS.


- https://docs.aws.amazon.com/zh_tw/AmazonS3/latest/userguide/tutorial-s3-object-lambda-uppercase.html
- https://3lexw.medium.com/aws-%E6%9C%AD%E8%A8%98-3-%E5%88%A9%E7%94%A8-aws-s3-%E4%BD%9C%E7%82%BA-aws-lambda-%E5%87%BD%E6%95%B8%E4%B9%8B%E9%96%93%E7%9A%84%E4%B8%AD%E8%BD%89%E7%AB%99-982d40e6e20f