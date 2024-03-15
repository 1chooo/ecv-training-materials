# Set up an Alarm with Azure Monitor
### Overview
Azure Monitor provides the alert rule, that us to set the condition to monitor our environment. If our service reaches the condiction, Azure will trigger the action group to do the action we set. The Azure alert rule is a useful service to monitor and manage our environment.

By the end of this lab, you will be able to:
- Create the virtual machine
- Create the customized monitor dashboard
- Create the alert rule and action group


```bash
ssh <your vm user name>@<your public ip>
```

```bash
sudo apt-get update
sudo apt-get install stress-ng -y
stress-ng --cpu 1 --timeout 5m
```





