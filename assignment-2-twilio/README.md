# assignment-2-twilio
This is the folder for the Assignment 2 project.

## API
Examples on how to use the API:

### Create a new item
Send an SMS message to +15067990356
The text must be minimum 5 characters and maximum 60 characters

### List All items
```console
http GET https://twilio-ptsy1u7u9.now.sh
```

### Get one item by id
```console
http GET https://twilio-ptsy1u7u9.now.sh < mocks/get.json
```
```console
http GET https://twilio-ptsy1u7u9.now.sh todoId=10
```

### Delete an item
```console
http DELETE https://twilio-ptsy1u7u9.now.sh < mocks/delete.json
```
```console
http DELETE https://twilio-ptsy1u7u9.now.sh todoId=10
```
