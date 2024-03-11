# Implement an LAMP structure

### Overview
With the constant advancements in technology choosing a right option for building powerful and dynamic web applications is surely a tedious task. LAMP is known for its free and open-source approach to back end development. It contains Linux OS, Apache web server, MySQL database, and PHP. Besides PHP, developers can also use Python and Perl as an alternative. Developers choose the LAMP stack because of ease of deployment and customization. It is the most popular architecture on the web. LAMP architecture is behind widely-known Content Management Systems (CMS) like WordPress, Joomla, and Drupal.

Therefore, if you’re working with one of these popular CMS, you’re using the LAMP stack on your Virtual Private Server(VPS) or dedicated server. So, How to deploy the LAMP architecture in AWS cloud?

Amazon RDS makes it easy to set up, operate, and scale a relational database in the cloud. It is available on several database instance types - optimized for memory, performance or I/O - and provides you with six familiar database engines to choose from, including Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle Database, and SQL Server.

Amazon EC2 provides scalable computing capacity in the cloud. Using Amazon EC2 eliminates your need to invest in hardware up front, so you can develop and deploy applications faster.

So We will deploy LAMP architecture using Amazon RDS and Amazon EC2.

By the end of this lab, you will be able to:
- Deploy a RDS database and web server
- Connect your web server to your database


`db.cq3qdqsigoge.us-west-2.rds.amazonaws.com`

```sh
#!/bin/bash
# Install Apache Web Server and PHP
yum install -y httpd amazon-linux-extras
amazon-linux-extras install php7.2
# Download web files
wget https://content.ecloudture.com/aws/lab/aws-standard-workshop/implement-an-lamp-structure/materials/public/index.php
wget https://content.ecloudture.com/aws/lab/aws-standard-workshop/implement-an-lamp-structure/materials/public/login.php
wget https://content.ecloudture.com/aws/lab/aws-standard-workshop/implement-an-lamp-structure/materials/public/style.css
mv index.php /var/www/html/
mv login.php /var/www/html/
mv style.css /var/www/html/
# Turn on web server
chkconfig httpd on
service httpd start
```