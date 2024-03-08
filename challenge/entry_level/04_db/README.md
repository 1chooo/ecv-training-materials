# Entry Level - DynamoDB


### Overview
- Level: Beginner
- Duration: 45 minutes

A new application in the organization will generate a large amount of unstructured data, which needs to be stored in a highly available and does not want excessive maintenance costs, so the organization hopes to use DynamoDB as a solution and hopes that you can complete this task first.


import data from s3 to dynamodb

```csv
"Artist","SongTitle","AblumInfo","AlbulmTitle","PublishDate","Sales"
"C","Car","{...}","xoxo","1999/06/23","87654"
"A","Abc","{...}","xxxx","1983/03/11","12536"
"C","Cat","{...}","xoxo","1978/07/18","12854"
"B","Banana","{...}","oooo","1989/04/12","75744"
"A","Apple","{...}","xxxx","1997/02/26","234234"
```


Check table with aws cli:
```sh
aws dynamodb get-item --consistent-read \
    --table-name Music \
    --key '{ "Artist": {"S": "Acme Band"}, "SongTitle": {"S": "Happy Day"}}'
```



goto Global Secondary Indexes and create a new index with `AlbumTitle`.

