# Run a Windows Server on Azure

### Overview
The virtual machine is a web service that provides secure, resizable compute capacity in the cloud. Simply put, it is a virtual machine on the Azure cloud.

Sometimes you want to do some testing or computing. But you need a Computer which has some powerful resources. You will use the virtual machine with specific specifications. After creation, we can use SSH, Remote Desktop, etc to connect the Virtual machine.

In this lab, we will teach you how to create Windows virtual machine and enable you to connect to the VM with Remote Desktop.

By the end of this lab, you will be able to:
- Create a Virtual machine
- Use the RDP to connect to the VM


# Build LAMP Structure in Azure Virtual Machine

### Overview
With the constant advancements in technology choosing the right option for building powerful and dynamic web applications is surely a tedious task. LAMP is known for its free and open-source approach to back-end development. It contains Linux OS, Apache web server, MySQL database, and PHP. Besides PHP, developers can also use Python and Perl as an alternative. Developers choose the LAMP stack because of the ease of deployment and customization. It is the most popular architecture on the web. LAMP architecture is behind widely-known Content Management Systems (CMS) like WordPress, Joomla, and Drupal. Therefore, if you’re working with one of these popular CMS, you’re using the LAMP stack on your Virtual Private Server(VPS) or dedicated server. So, How to deploy the LAMP architecture in the Azure cloud?

Azure offers a choice of fully managed relational, NoSQL, and in-memory databases, spanning proprietary and open-source engines, to fit the needs of modern app developers. Azure relational database solution provides you with four familiar database engines to choose from, including SQL Server, MySQL, PostgreSQL, MariaDB. Azure Virtual Machines provides scalable computing capacity in the cloud. Using Azure Virtual Machines eliminates your need to invest in hardware upfront, so you can develop and deploy applications faster.
So We will deploy LAMP architecture using Azure Database for MySQL and Azure Virtual Machines.

By the end of this lab, you will be able to:
- Deploy an Azure Database for MySQL database and webserver
- Connect your webserver to your database


```sql
show tables;
SELECT count(*) FROM products;
exit
```