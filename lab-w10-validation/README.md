# lab-w10-validation
This is the folder for the Lab W10 project.

## API

Examples on how to test the API:

### Validation with Joi

Success
```console
curl -X POST \
  https://w10-validation-mllb7eu3a.now.sh/api-joi \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Postman-Token: 57724175-0b02-4cda-a627-9a7d03ccb498' \
  -H 'cache-control: no-cache' \
  -d 'todoItem=Assignments&todoStatus=0&todoDueBy=today'
```

Error
```console
curl -X POST \
  https://w10-validation-mllb7eu3a.now.sh/api-joi \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Postman-Token: 57724175-0b02-4cda-a627-9a7d03ccb498' \
  -H 'cache-control: no-cache' \
  -d 'todoItem=Incomplete'
```

### Validation with Yup

```console
curl -X POST \
  https://w10-validation-mllb7eu3a.now.sh/api-yup \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Postman-Token: 57724175-0b02-4cda-a627-9a7d03ccb498' \
  -H 'cache-control: no-cache' \
  -d 'todoItem=Assignments&todoStatus=0&todoDueBy=today'
```

Error
```console
curl -X POST \
  https://w10-validation-mllb7eu3a.now.sh/api-yup \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Postman-Token: 57724175-0b02-4cda-a627-9a7d03ccb498' \
  -H 'cache-control: no-cache' \
  -d 'todoItem=Incomplete'
```
