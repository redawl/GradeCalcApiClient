# GradeCalc.RegisterControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**registerUser**](RegisterControllerApi.md#registerUser) | **POST** /api/register | 

<a name="registerUser"></a>
# **registerUser**
> registerUser(body)



### Example
```javascript
import {GradeCalc} from 'grade_calc';

let apiInstance = new GradeCalc.RegisterControllerApi();
let body = new GradeCalc.UserDto(); // UserDto | 

apiInstance.registerUser(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserDto**](UserDto.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

