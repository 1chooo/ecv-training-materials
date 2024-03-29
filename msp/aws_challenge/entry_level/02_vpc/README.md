# Entry Level - VPC

### Overview
- Level: Basic
- Duration: 45 minutes
-----------------------------
VPC is one of the widely used AWS services, and your organization starts building a networked environment, requiring you to do a series of POCs.

目前遇到的困難﹔有成功建立 VPC, Route Table, Subnet, Internet Gateway 不過後續還是沒有成功 [^1], [^2], [^3], [^4]。

Default VPC
- IPv4 CIDR: `10.0.0.0/16`
- Reserved IP: bigger than 260

#### Public Subnet

IPv4 CIDR: `10.0.0.0/23` (512 IP addresses, 2 reserved for AWS, 1 for the network address, 1 for the broadcast address, 508 for the instances)

1. create a subnet
2. create a route table
3. create internet gateway and attach to the VPC
4. edit subnet association from the route table
5. edit route table to add the route to the internet gateway `0.0.0.0/0` (public subnet)

#### Private Subnet

IPv4 CIDR: `10.0.254.0/23` (512 IP addresses, 2 reserved for AWS, 1 for the network address, 1 for the broadcast address, 508 for the instances)

1. create a subnet
2. create a route table
3. create NAT Gateway (choose the public subnet, allocate the public IP)
4. edit subnet association from the route table
5. edit route table to add the route to the NAT gateway `0.0.0.0/0` (private subnet)

![](./imgs/vpc_result.PNG)


Final VPC Architecture: [^5]

![](./imgs/aws-vpc-private.png)


[^1]: https://docs.aws.amazon.com/vpc/latest/userguide/create-subnets.html
[^2]: https://www.ipvoid.com/ipv4-cidr-calculator/
[^3]: https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html#subnet-sizing
[^4]: https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html
[^5]: https://www.treinaweb.com.br/blog/o-que-e-vpc-e-como-ela-funciona/

