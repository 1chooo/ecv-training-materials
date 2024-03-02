# Chapter 2 - Simple Storage Service (S3)

units: object

When we upload a file into the s3, it will duplicate the file into the different availability zones to ensure the high availability and fault tolerance. Because of this, it can prevent the data loss and the data corruption.

Prefix: use hash to improve the performance of the s3. For example, if we have a lot of files in the s3, we can use the hash to divide the files into different folders. In this way, we can improve the performance of the s3.


Data Consistency Model
- Strong Read After Write Consistency for `GET`, `PUT`, `LIST` operations
- Eventual Consistency for list of all buckets


## Move data to s3
Multi-part upload:
- Use Lifecycle policy

```
<LifecycleConfiguration>
    < Rule>
        <ID>sample-rule</ID>
        <Prefix></Prefix>
        <Status>Enabled</Status>
        <AbortIncompleteMultipartUpload>
        <DaysAfterlnitiation>7</DaysAfterInitiation>
        </AbortIncompleteMultipartUpload>
    </ Rule>
</LifecycleConfiguration>
```

Slow Transfer Speed: (S3 Transfer Acceleration)
- First we upload the file through the edge location, and then the edge location will transfer the file to the s3. (with the AWS inner network)

AWS Snow Family:
- Snowcone
- Snowball Edge
- Snowmobile

AWS Storage Gateway


## Access Control of s3

through ACL (Access Control List) and Bucket Policy

### Bucket Policy
- Resoure: through the ARN (Amazon Resource Name)
- Action
- Effect
- Principal: `*` means everyone

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
        }
    ]
}
```

CORS (Cross-Origin Resource Sharing)
```json
[
  {
    "AllowedHeaders": [
      "*"
    ],
    "AllowedMethods": [
      "PUT"
      "POST",
      "DELETE"
    ],
    "AllowedOrigins": [
      "http://www.example.com"
    ],
    "ExposeHeaders": [
      "x-amz-server-side-encryption",
      "x-amz-request-id",
      "x-amz-id-2"
    ],
    "MaxAgeSeconds": 3000
  }
]
```

Pre-signed URLs:
- Generate a URL that can be used to access an object for a limited time.
- Using AWS CLI and SDKs

```bash
aws s3 presign --expires-in 300 s3://mybucket/myobject 
```

Access points: unique hostname with dedicated access policy that describes how data can be accessed using that endpoint.


## Data Protection

Once version-enabled, only can suspend, not disable.

### MFA Delete
- Onlt root account can enable MFA Delete
- permanently delete a version of an object
- Only AWS CLI and SDKs can enable MFA Delete
- Only protect version -> We can delete the new uploaded file

```bash
aws s3api put-bucket-versioning --bucket my-bucket --versioning-configuration Status=Enabled,MFADelete=Enabled --mfa "arn:aws:iam::123456789012:mfa/root-account-mfa-device 123456"
```


## Encryption

- SSE-S3: Encryption with S3 Managed Keys through AES-256
- SSE-KMS (Server-Side): User Control and Audit trail
- SSE-C: Customer Provided Keys, using AWS CLI, SDKs, or REST API

```bash
aws s3 cp my-file s3://my-bucket --sse aws:kms --sse-kms-key-id 1234abcd-12ab-34cd-56ef-1234567890ab
```

## Replication

metadata, ownership, replace with different storage class, 

**Only the new uploaded file will be replicated after the replication is enabled and versioning is required.**

### Cross-Region Replication (CRR)
- reduce latency
- compliance
- Increase operational efficiency

### Same-Region Replication (SRR)
- Multi-account using the same data
- Log aggregation: collection data of analysis
- Data residency requirements: Abide by data sovereignty laws

## S3 Storage Classes

- S3 Standard
- S3 Intelligent-Tiering
- S3 Standard-IA (Infrequent Access)
- S3 One Zone-IA
- S3 Glacier

frequent access tier <-> infrequent access tier

## S3 Lifecycle Management





