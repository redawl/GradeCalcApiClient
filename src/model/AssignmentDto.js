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
import {ApiClient} from '../ApiClient';

/**
 * The AssignmentDto model module.
 * @module model/AssignmentDto
 * @version 0.0.1
 */
export class AssignmentDto {
  /**
   * Constructs a new <code>AssignmentDto</code>.
   * @alias module:model/AssignmentDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AssignmentDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AssignmentDto} obj Optional instance to populate.
   * @return {module:model/AssignmentDto} The populated <code>AssignmentDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AssignmentDto();
      if (data.hasOwnProperty('assignmentWeight'))
        obj.assignmentWeight = ApiClient.convertToType(data['assignmentWeight'], 'Number');
      if (data.hasOwnProperty('assignmentScore'))
        obj.assignmentScore = ApiClient.convertToType(data['assignmentScore'], 'Number');
      if (data.hasOwnProperty('assignmentName'))
        obj.assignmentName = ApiClient.convertToType(data['assignmentName'], 'String');
      if (data.hasOwnProperty('className'))
        obj.className = ApiClient.convertToType(data['className'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} assignmentWeight
 */
AssignmentDto.prototype.assignmentWeight = undefined;

/**
 * @member {Number} assignmentScore
 */
AssignmentDto.prototype.assignmentScore = undefined;

/**
 * @member {String} assignmentName
 */
AssignmentDto.prototype.assignmentName = undefined;

/**
 * @member {String} className
 */
AssignmentDto.prototype.className = undefined;

