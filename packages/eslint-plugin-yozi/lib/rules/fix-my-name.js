/**
 * @fileoverview fix my name
 * @author yozi
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    fixable: 'code', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      fix: 'yozi 는 이름이 hyojin 입니다.'
    },
  },

  create(context) {
    return {
      //Literal 타입 기준
      Literal(node) {
        // node의 text를 가져옴
        const text = node.raw;

        // text에 yozi 가 있다면
        if (text.includes('yozi')) {
          // messageId로 fix 호출
          context.report({
            node,
            messageId: "fix",
            // 수정 내용 전달
            fix: (fixer) =>
                fixer.replaceText(node, text.replace('yozi', 'hyojin'))
          });
        }
      }
    };
  },
};
