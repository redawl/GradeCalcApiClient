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
 * The GradeResponse model module.
 * @module model/GradeResponse
 * @version 0.0.1
 */
export class GradeResponse {
  /**
   * Constructs a new <code>GradeResponse</code>.
   * @alias module:model/GradeResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GradeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GradeResponse} obj Optional instance to populate.
   * @return {module:model/GradeResponse} The populated <code>GradeResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GradeResponse();
      if (data.hasOwnProperty('className'))
        obj.className = ApiClient.convertToType(data['className'], 'String');
      if (data.hasOwnProperty('grade'))
        obj.grade = ApiClient.convertToType(data['grade'], 'Number');
      if (data.hasOwnProperty('gradeType'))
        obj.gradeType = ApiClient.convertToType(data['gradeType'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} className
 */
GradeResponse.prototype.className = undefined;

/**
 * @member {Number} grade
 */
GradeResponse.prototype.grade = undefined;

/**
 * @member {String} gradeType
 */
GradeResponse.prototype.gradeType = undefined;
