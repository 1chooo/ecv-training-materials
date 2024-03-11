# Chapter 5 - Network VPC (Virtual Private Cloud)

**Table of Contents**
- [Chapter 5 - Network VPC (Virtual Private Cloud)](#chapter-5---network-vpc-virtual-private-cloud)
  - [Subnet](#subnet)
  - [Components of VPC](#components-of-vpc)
    - [Public Subnet Route Table](#public-subnet-route-table)
    - [Private Subnet Route Table](#private-subnet-route-table)
    - [Elastic IP Addresses](#elastic-ip-addresses)
    - [Elastic Network Interface (ENI)](#elastic-network-interface-eni)
  - [Security](#security)
    - [Security Group](#security-group)
    - [Network Access Control List (NACL)](#network-access-control-list-nacl)

## Subnet
The segments or partitions of a network, divided by CIDR range, recommended to use large subnets.

The following 5 IPs are reserved by AWS in a subnet with `10.0.0.0/24`:
- `10.0.0.0`: Network address
- `10.0.0.1`: Reserved by AWS for the VPC router
- `10.0.0.2`: Reserved by AWS for the DNS server
- `10.0.0.3`: Reserved by AWS for future use
- `10.0.0.255`: Network broadcast address

one Public and one Private subnet in each Availability Zone (AZ) for **high availability**.

## Components of VPC

- Route Table: Destination and Target
- Internet Gateway: Connects VPC to the internet, `0.0.0.0/0 : Igw-id` in the route table to connect to the external network.
- NAT Gateway: enable instances in a **private subnet** VPC to the internet, Managed by AWS, No port forwarding
- NAT Instance: enable instances in a **private subnet** VPC to the internet, Managed by the user

NAT (Network Address Translation)

### Public Subnet Route Table
| Destination | Target |
| --- | --- |
| `10.0.0.0/16` | local |
| `0.0.0.0/0` | `igw-xxxx` |

### Private Subnet Route Table
| Destination | Target |
| --- | --- |
| `10.0.0.0/16` | local |
| `0.0.0.0/0` | `nat-xxxx` |

### Elastic IP Addresses
- Static IP address for dynamic cloud computing which associates with the instance or a network interface
- keep the same public IP address for the instance, even if the instance is stopped and restarted.


### Elastic Network Interface (ENI)
- Virtual network interface that can include multiple private IP addresses, security groups, and a MAC address.
- avaliable in moving across EC2 instances in the same Availability Zone.

## Security

### Security Group
- virtual **firewall** for the instance to control the traffic, stateful, allow rules only.
- By default, all inbound traffic is blocked, and all outbound traffic is allowed.

> [!NOTE]
> 1. Security Group is **stateful**, if you allow the inbound traffic, the response traffic is allowed automatically. No matter what the outbound rules are.
> 2. If we want to reach out to external network based on `NAT`. We need to allow the outbound traffic to the NAT Gateway.

### Network Access Control List (NACL)
Firewalls at the subnet boundary, by default, all inbound and outbound traffic is allowed.

> [!TIP]
> Decide by Rule Number, the higher number has higher priority.


###　VPC Flow Logs
- `<version> <account-id> <interface-id> <srcaddr> <dstaddr> <srcport> <dstport> <protocol> <packets> <bytes> <start> <end> <action> <log-status>`
- be published to CLoudWatch Logs or S3 bucket