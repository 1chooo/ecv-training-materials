# Chapter 3 - Elastic Compute Cloud (EC2)

Amazon Machine Image (AMI)
- Operating System
- Launch Permission
- Root Volume Mapping

Instance Type
`i3.xlarge` (instance family, instance generation, instance size)

```bash
chmod 400 my-key-pair.pem
ssh -i my-key-pair.pem ec2-user@EC2_PUBLIC_IP
```

```console
  ,     #_
   ~\_  ####_        Amazon Linux 2
  ~~  \_#####\
  ~~     \###|       AL2 End of Life is 2025-06-30.
  ~~       \#/ ___
   ~~       V~' '->
    ~~~         /    A newer version of Amazon Linux is available!
      ~~._.   _/
         _/ _/       Amazon Linux 2023, GA and supported until 2028-03-15.
       _/m/'           https://aws.amazon.com/linux/amazon-linux-2023/
```

