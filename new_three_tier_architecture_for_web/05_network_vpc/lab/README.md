# Create Your EC2 Instance in Your Custom Network Environment


### Overview

Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. Simply put, EC2 is a virtual machine on AWS.

Amazon Virtual Private Cloud (Amazon VPC) is a service that lets you launch AWS resources in a logically isolated virtual network that you define. And VPC is the network environment where EC2 Instances locate.

Usually, users will use EC2 as a web server, database server, and other servers for different purposes. In order to protect our own servers, we can set up a customized network environment to limit specific traffic that can access the servers.

The following procedures are for manually creating a VPC and subnets. You also have to manually add gateways and routing tables. Alternatively, you can use the Amazon VPC wizard to create a VPC plus its subnets, gateways, and routing tables in one step.

By the end of this lab, you will be able to:
- Configure VPC and Subnet to your own internet environment
- Edit your Route Table to the accurate path
- Knowing the difference between network in and out and how we could use NAT Gateway to route our private network to public

```sh
#!/bin/bash
# Install Apache Web Server and PHP
yum install -y httpd amazon-linux-extras git
amazon-linux-extras install php7.2
# Download Lab files 
echo -e '<html>\n<head>\n\t<style>\n\t\tbody { background-color: rgb(252, 230, 201) }\n\t</style>\n</head>\n<body>\n\t\t<h1>Hello! This is a simple web page hosting by EC2 Instance.</h1>\n\t</body>\n</html>' > index.html
mv index.html /var/www/html/
# Start web service
chkconfig httpd on 
service httpd start
```
