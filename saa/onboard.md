# Onboard Exam

> Organizers for a global event want to put daily reports online as static HTML pages. The pages are expected to generate millions of views from users around the world. The files are stored in an Amazon S3 bucket. A solutions architect has been asked to design an efficient and effective solution.
> Which action should the solutions architect take to accomplish this?
> - Generate presigned URLs for the files.
> - Use cross-Region replication to all Regions.
> - Use the geoproximity feature of Amazon Route 53.
> - Use Amazon CloudFront with the S3 bucket as its origin.

Use Amazon CloudFront with the S3 bucket as its origin.

> An ecommerce company is running a multi-tier application on AWS. The front-end and backend tiers both run on Amazon EC2, and the database runs on Amazon
> RDS for MySQL. The backend tier communicates with the RDS instance. There are frequent calls to return identical datasets from the database that are causing performance slowdowns.
> Which action should be taken to improve the performance of the backend?
> - Implement Amazon SNS to store the database calls.
> - Implement Amazon ElastiCache to cache the large datasets.
> - Implement an RDS for MySQL read replica to cache database calls.
> - Implement Amazon Kinesis Data Firehose to stream the calls to the database.

Implement Amazon ElastiCache to cache the large datasets.

> A company has created a VPC with multiple private subnets in multiple Availability Zones (AZs) and one public subnet in one of the AZs. The public subnet is used to launch a NAT gateway. There are instances in the private subnets that use a NAT gateway to connect to the internet. In case of an AZ failure, the company wants to ensure that the instances are not all experiencing internet connectivity issues and that there is a backup plan ready.
> Which solution should a solutions architect recommend that is MOST highly available?
> - Create a new public subnet with a NAT gateway in the same AZ. Distribute the traffic between the two NAT gateways.
> - Create an Amazon EC2 NAT instance in a new public subnet. Distribute the traffic between the NAT gateway and the NAT instance.
> - Create public subnets in each AZ and launch a NAT gateway in each subnet. Configure the traffic from the private subnets in each AZ to the respective NAT gateway.
> - Create an Amazon EC2 NAT instance in the same public subnet. Replace the NAT gateway with the NAT instance and associate the instance with an Auto Scaling group with an appropriate scaling policy.

Create public subnets in each AZ and launch a NAT gateway in each subnet. Configure the traffic from the private subnets in each AZ to the respective NAT gateway.

