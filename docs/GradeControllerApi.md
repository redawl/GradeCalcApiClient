# GradeCalc.GradeControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**computeGrade**](GradeControllerApi.md#computeGrade) | **GET** /api/grade | 
[**computeMaxGrade**](GradeControllerApi.md#computeMaxGrade) | **GET** /api/grade/max | 
[**computeRequiredGrade**](GradeControllerApi.md#computeRequiredGrade) | **GET** /api/grade/required | 

<a name="computeGrade"></a>
# **computeGrade**
> GradeResponse computeGrade(className)



### Example
```javascript
import {GradeCalc} from 'grade_calc';

let apiInstance = new GradeCalc.GradeControllerApi();
let className = "className_example"; // String | 

apiInstance.computeGrade(className, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **className** | **String**|  | 

### Return type

[**GradeResponse**](GradeResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

<a name="computeMaxGrade"></a>
# **computeMaxGrade**
> GradeResponse computeMaxGrade(className)



### Example
```javascript
import {GradeCalc} from 'grade_calc';

let apiInstance = new GradeCalc.GradeControllerApi();
let className = "className_example"; // String | 

apiInstance.computeMaxGrade(className, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **className** | **String**|  | 

### Return type

[**GradeResponse**](GradeResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

<a name="computeRequiredGrade"></a>
# **computeRequiredGrade**
> GradeResponse computeRequiredGrade(className, targetGrade)



### Example
```javascript
import {GradeCalc} from 'grade_calc';

let apiInstance = new GradeCalc.GradeControllerApi();
let className = "className_example"; // String | 
let targetGrade = 1.2; // Number | 

apiInstance.computeRequiredGrade(className, targetGrade, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **className** | **String**|  | 
 **targetGrade** | **Number**|  | 

### Return type

[**GradeResponse**](GradeResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

