# Entry Level - Lambda


### Overview
Level: Beginner
Duration: 45 minutes

Your organization has set up a social networking site and wants to thumbnail images uploaded by users for different devices. However, the superior does not want to maintain the infrastructure of this system, so you want to implement it through a serverless architecture.

- [ ] run at least 30 seconds
- [ ] best memory configuration is 256 mb
- [ ] Ensure x-ray is enabled to optimized [^1]



Test the runtimes with `sleep()` [^2]
```python
import json
import time

def lambda_handler(event, context):
    # TODO implement
    time.sleep(30)
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
```


[^1]: https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html
[^2]: https://ithelp.ithome.com.tw/articles/10262385

