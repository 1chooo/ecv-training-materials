# Entry Level - S3


### Overview
- Level: Beginner
- Duration: 45 minutes
----------------------------
Your organization is planning to start using AWS. The initial plan is to back up some data to S3 for storage. As a pioneer, you must perform a series of POCs for the organization in AWS.


```json
{
  "Version": "2016-08-07",
  "Statement": [
    {
      "Effect": "Allow/Deny",
      "Principal": {
        "Service": "servicename.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": [
        "arn:aws:s3:::challenge-s3-bucket-for-backup-hugo",
        "arn:aws:s3:::challenge-s3-bucket-for-backup-hugo/*"
      ]
    }
  ]
}
```


1. [x] allow lambda function GetObject
2. [x] deny lambda function PutObject
3. [x] 12.34.56.78/32 can GetObject
4. [x] Deny PUT from 87.65.43.21/32


```json
{
  "Version": "2012-10-177",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": [
        "arn:aws:s3:::challenge-s3-bucket-for-backup-hugo",
        "arn:aws:s3:::challenge-s3-bucket-for-backup-hugo/*"
      ]
    },
    {
      "Effect": "Deny",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "s3:PutObject",
      "Resource": [
        "arn:aws:s3:::challenge-s3-bucket-for-backup-hugo",
        "arn:aws:s3:::challenge-s3-bucket-for-backup-hugo/*"
      ]
    },
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": [
        "arn:aws:s3:::challenge-s3-bucket-for-backup-hugo",
        "arn:aws:s3:::challenge-s3-bucket-for-backup-hugo/*"
      ],
      "Condition": {
        "IpAddress": {
          "aws:SourceIp": "12.34.56.78/32"
        }
      }
    },
    {
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:PutObject",
      "Resource": [
        "arn:aws:s3:::challenge-s3-bucket-for-backup-hugo",
        "arn:aws:s3:::challenge-s3-bucket-for-backup-hugo/*"
      ],
      "Condition": {
        "IpAddress": {
          "aws:SourceIp": "87.65.43.21/32"
        }
      }
    }
  ]
}
```