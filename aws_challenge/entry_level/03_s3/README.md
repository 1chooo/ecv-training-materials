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
        "arn:aws:s3:::challenge-s3-bucket-for-backup-hugo-will-get-aws-offer",
        "arn:aws:s3:::challenge-s3-bucket-for-backup-hugo-will-get-aws-offer/*"
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
	"Version": "2012-10-17",
	"Statement": [
		{
			"Effect": "Allow",
			"Principal": {
				"Service": "lambda.amazonaws.com"
			},
			"Action": "s3:GetObject",
			"Resource": [
				"arn:aws:s3:::<YOUR_BUCKET_NAME>",
				"arn:aws:s3:::<YOUR_BUCKET_NAME>/*"
			]
		},
		{
			"Effect": "Deny",
			"Principal": {
				"Service": "lambda.amazonaws.com"
			},
			"Action": "s3:PutObject",
			"Resource": [
				"arn:aws:s3:::<YOUR_BUCKET_NAME>",
				"arn:aws:s3:::<YOUR_BUCKET_NAME>/*"
			]
		},
		{
			"Effect": "Allow",
			"Principal": "*",
			"Action": "s3:GetObject",
			"Resource": [
				"arn:aws:s3:::<YOUR_BUCKET_NAME>",
				"arn:aws:s3:::<YOUR_BUCKET_NAME>/*"
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
			"Action": "s3:Put*",
			"Resource": [
				"arn:aws:s3:::<YOUR_BUCKET_NAME>",
				"arn:aws:s3:::<YOUR_BUCKET_NAME>/*"
			],
			"Condition": {
				"IpAddress": {
					"aws:SourceIp": "87.65.43.21/32"
				}
			}
		}
	],
	"Transform": "AWS::Serverless-2016-10-31",
	"Resources": {
		"ServiceNetworkServiceAssociation": {
			"Type": "AWS::VpcLattice::ServiceNetworkServiceAssociation",
			"Properties": {}
		},
		"Function": {
			"Type": "AWS::Serverless::Function",
			"Properties": {
				"Description": {
					"Fn::Sub": [
						"Stack ${AWS::StackName} Function ${ResourceName}",
						{
							"ResourceName": "Function"
						}
					]
				},
				"CodeUri": "src/Function",
				"Handler": "index.handler",
				"Runtime": "nodejs20.x",
				"MemorySize": 3008,
				"Timeout": 30,
				"Tracing": "Active"
			}
		},
		"FunctionLogGroup": {
			"Type": "AWS::Logs::LogGroup",
			"DeletionPolicy": "Retain",
			"Properties": {
				"LogGroupName": {
					"Fn::Sub": "/aws/lambda/${Function}"
				}
			}
		}
	}
}
```