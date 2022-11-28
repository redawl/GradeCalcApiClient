# GradeCalc.AssignmentControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAssignmentToClass**](AssignmentControllerApi.md#addAssignmentToClass) | **POST** /api/assignment | 
[**getAssignmentsByClass**](AssignmentControllerApi.md#getAssignmentsByClass) | **GET** /api/assignment | 
[**removeAssignment**](AssignmentControllerApi.md#removeAssignment) | **DELETE** /api/assignment | 

<a name="addAssignmentToClass"></a>
# **addAssignmentToClass**
> addAssignmentToClass(body)



### Example
```javascript
import {GradeCalc} from 'grade_calc';

let apiInstance = new GradeCalc.AssignmentControllerApi();
let body = new GradeCalc.AssignmentDto(); // AssignmentDto | 

apiInstance.addAssignmentToClass(body, (error, data, response) => {
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
 **body** | [**AssignmentDto**](AssignmentDto.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="getAssignmentsByClass"></a>
# **getAssignmentsByClass**
> Object getAssignmentsByClass(className)



### Example
```javascript
import {GradeCalc} from 'grade_calc';

let apiInstance = new GradeCalc.AssignmentControllerApi();
let className = "className_example"; // String | 

apiInstance.getAssignmentsByClass(className, (error, data, response) => {
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

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

<a name="removeAssignment"></a>
# **removeAssignment**
> removeAssignment(assignmentName, className)



### Example
```javascript
import {GradeCalc} from 'grade_calc';

let apiInstance = new GradeCalc.AssignmentControllerApi();
let assignmentName = "assignmentName_example"; // String | 
let className = "className_example"; // String | 

apiInstance.removeAssignment(assignmentName, className, (error, data, response) => {
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
 **assignmentName** | **String**|  | 
 **className** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

