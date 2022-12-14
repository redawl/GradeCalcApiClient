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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GradeCalc);
  }
}(this, function(expect, GradeCalc) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('AssignmentDto', function() {
      beforeEach(function() {
        instance = new GradeCalc.AssignmentDto();
      });

      it('should create an instance of AssignmentDto', function() {
        // TODO: update the code to test AssignmentDto
        expect(instance).to.be.a(GradeCalc.AssignmentDto);
      });

      it('should have the property assignmentWeight (base name: "assignmentWeight")', function() {
        // TODO: update the code to test the property assignmentWeight
        expect(instance).to.have.property('assignmentWeight');
        // expect(instance.assignmentWeight).to.be(expectedValueLiteral);
      });

      it('should have the property assignmentScore (base name: "assignmentScore")', function() {
        // TODO: update the code to test the property assignmentScore
        expect(instance).to.have.property('assignmentScore');
        // expect(instance.assignmentScore).to.be(expectedValueLiteral);
      });

      it('should have the property assignmentName (base name: "assignmentName")', function() {
        // TODO: update the code to test the property assignmentName
        expect(instance).to.have.property('assignmentName');
        // expect(instance.assignmentName).to.be(expectedValueLiteral);
      });

      it('should have the property className (base name: "className")', function() {
        // TODO: update the code to test the property className
        expect(instance).to.have.property('className');
        // expect(instance.className).to.be(expectedValueLiteral);
      });

    });
  });

}));
