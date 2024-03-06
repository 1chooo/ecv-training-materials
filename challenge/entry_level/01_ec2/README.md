# Entry Level - EC2

### Overview
- Level: Beginner
- Duration: 45 minutes
------------------------------
EC2 is one of the widely used AWS services, and your organization is planning to use EC2 to host websites to reduce maintenance infrastructure, requiring you to do a series of POCs.

VPC with 2 subnets

> [!TIP]
> 1. We can create the security group in the VPC and use it in the EC2 instance.
> 2. `user-data` should be add at first.

> [!NOTE]
> There is a question about creating `snapshot`, I have selected the `volume` into 9 GB, but after pending it will change into 8 GB.
>
> - **What I have tried:** delete snapshot; however, the snapshot is be used by the volume, so I cannot delete it.
> - **Solved:** I use the `modify volume` to change the size of the volume.  [^1]

```bash
#!/bin/bash
yum update -y
yum install httpd -y
service httpd start
```

[^1]: [Modify an EBS volume using Elastic Volumes](https://docs.aws.amazon.com/ebs/latest/userguide/requesting-ebs-volume-modifications.html#modify-ebs-volume)

