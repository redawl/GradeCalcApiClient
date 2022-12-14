/*
 * Grade Calc
 * Grade Calculator App
 *
 * OpenAPI spec version: 0.0.1
 * Contact: eli.burch@burchbytes.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.36
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {AssignmentDto} from '../model/AssignmentDto';

/**
* AssignmentController service.
* @module api/AssignmentControllerApi
* @version 0.0.1
*/
export class AssignmentControllerApi {

    /**
    * Constructs a new AssignmentControllerApi. 
    * @alias module:api/AssignmentControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addAssignmentToClass operation.
     * @callback moduleapi/AssignmentControllerApi~addAssignmentToClassCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/AssignmentDto} body 
     * @param {module:api/AssignmentControllerApi~addAssignmentToClassCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addAssignmentToClass(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addAssignmentToClass");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/assignment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAssignmentsByClass operation.
     * @callback moduleapi/AssignmentControllerApi~getAssignmentsByClassCallback
     * @param {String} error Error message, if any.
     * @param {Object{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} className 
     * @param {module:api/AssignmentControllerApi~getAssignmentsByClassCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getAssignmentsByClass(className, callback) {
      
      let postBody = null;
      // verify the required parameter 'className' is set
      if (className === undefined || className === null) {
        throw new Error("Missing the required parameter 'className' when calling getAssignmentsByClass");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'className': className
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/hal+json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/api/assignment', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the removeAssignment operation.
     * @callback moduleapi/AssignmentControllerApi~removeAssignmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} assignmentName 
     * @param {String} className 
     * @param {module:api/AssignmentControllerApi~removeAssignmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    removeAssignment(assignmentName, className, callback) {
      
      let postBody = null;
      // verify the required parameter 'assignmentName' is set
      if (assignmentName === undefined || assignmentName === null) {
        throw new Error("Missing the required parameter 'assignmentName' when calling removeAssignment");
      }
      // verify the required parameter 'className' is set
      if (className === undefined || className === null) {
        throw new Error("Missing the required parameter 'className' when calling removeAssignment");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'assignmentName': assignmentName,'className': className
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/assignment', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}