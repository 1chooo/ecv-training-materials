# Chapter 1 - Core Knowledge

In local environment, we have three main components:
- Web Server
- App Server
- Database Server

LAMP Architecture
- Linux
- Apache
- MySQL
- Programming Language (PHP, Python, ...)


AWS Global Infrastructure
- Data Center
  - Collection of servers
  - around 50-80k servers
  - customized equipment
  - All DATA CENTER are online
- Availability Zone (AZ)
  - Multiple data centers: to ensure that the data center is not affected by the disaster
  - Redundant power, networking, and connectivity, housed in separate facilities
  - High Availability, Fault Tolerance, and Scalability
  - Conneted by high-speed, low-latency network
- Region
  - Global Compliance
- PoPs (edge location)
  - Closest facility to users in AWS infrastructure
  - A Cache endpoint to store frequently accessed data
- Local Zone
  - Extension of a region
  - Once you have picked up the closest region, you still find the latency is high, you can pick up the local zone


Shared Responsibility Model
- AWS is responsible for the security of the cloud

Managed V.S. Unmanaged


