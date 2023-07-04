
# Full Cycle Challenge / Docker <> NodeJS <> NGINX

## How to Run
```shell
docker-compose up --build
```

## Additional

To add new people to the table using the curl command, you can use the following code:
```shell
  curl -XPOST -H 'Content-Type: application/json' -d '{"name": "[NAME]"}' 'http://localhost:8080/peoples'
```
Make sure to replace [NAME] with the name of the person you want to add.