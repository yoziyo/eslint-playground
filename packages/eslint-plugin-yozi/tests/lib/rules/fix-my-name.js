/**
 * @fileoverview fix my name
 * @author yozi
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/fix-my-name"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("fix-my-name", rule, {
  valid: [
    {
      code: `console.log('hyojin')`
    }
  ],

  invalid: [
    {
      code: "console.log('yozi')",
      output: "console.log('hyojin')",
      errors: [{ message: "yozi 는 이름이 hyojin 입니다.", type: "Literal" }],
    },
  ],
});
