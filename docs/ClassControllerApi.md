# GradeCalc.ClassControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getClasses**](ClassControllerApi.md#getClasses) | **GET** /api/class | 

<a name="getClasses"></a>
# **getClasses**
> [ModelClass] getClasses()



### Example
```javascript
import {GradeCalc} from 'grade_calc';

let apiInstance = new GradeCalc.ClassControllerApi();
apiInstance.getClasses((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ModelClass]**](ModelClass.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

