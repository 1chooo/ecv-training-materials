# Chapter 4 - Database

## Intro
- Relational database (Fixed): 
  - Rows and Columns
  - SQL-based querying
  - Vertical scaling
- No-SQL database (Dynamics):
  - Key-value, In-memory, File, Graph
  - Focused on collection of documents
  - Horizontal scaling

## Introduction of RDS
- Fully managed relational database service
- Provisions new instances in a few minutes
- secure and compliant
- Available and durable

### Subnet Group

- the place stored the RDS, must be in two different AZ in the AWS Region
- The CIDR blocks must be large enough to accommodate spare IP addresses for Amazon RDS

### Public Access

It is default to be disabled because of the security issue. If we want to enable it, we can also add the security group to the RDS.

#### Parameter group
- Able to multiple RDS
- Once changed -> Reboot
- Cannot be modified after the creation of the RDS

### Optimize RDS Performance

- Multi-AZ: Standby and Master
- Read Replica: 
  - Read Only, ex: BI, Report apllication server read
  - cross region, with cross-region read replica as a standby database for disaster recovery
  - Mannually promote the read replica to be the master
  - Also can be Multi-AZ

### Amazon Aurora
- speed and availability of high-end commercial databases
- scale-out and distibuted design
  - striped across hundreds of storage nodes distributed over 3 AZ
  - six copies of data in each AZ
- All sync is up-to-date


### Amazon DynamoDB
- Serverless (event-driven)
- Extreme horizontal scaling

Primary Key: `Partition Key` and `Sort Key` 

CAP Theorem: Consistency, Availability, Partition Tolerance, only two of three can be achieved at the same time.

#### Query Data
- partition key, sort key, or index
- Global Secondary Index (GSI): index with different partition key and sort key
- Local Secondary Index (LSI): index has the same partition key and different sort key

#### Streaming Data

Global Table:
- multi-region, multi-active database 
- multi replica tables that DynamoDB treats as a single unit
- read and write data in multiple regions

### Amazon DMS