const { type } = require("os");
const path = require("path");

module.exports = function (plop) {
  // Gerador de Componentes Next.js
  plop.setGenerator("item", {
    description: "Criando uma seção para página",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Nome do item:",
      },
      {
        type: "list",
        name: "type",
        message: "selecione o tipo de arquivo",
        choices: ["Página", "Componente", "Seção"],
        filter: function (value) {
          if (value === "Página") {
            return "Page";
          }
          if (value === "Seção") {
            return "Section";
          }
          return "Min";
        },
      },
      {
        type: "input",
        name: "path",
        message: "Caminho do arquivo",
        default: "src/components/sections",
        when: function (answers) {
          return answers.type === "Section";
        },
      },
      {
        type: "input",
        name: "path",
        message: "Caminho do arquivo",
        default: "app/(tabs)",
        when: function (answers) {
          return answers.type === "Page";
        },
      },
      {
        type: "input",
        name: "path",
        message: "Caminho do arquivo",
        default: "components",
        when: function (answers) {
          return answers.type === "Min";
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{path}}/{{pascalCase name}}/index.tsx",
        templateFile: ".templatesPlop/page.hbs",
      },
      {
        type: "add",
        path: "{{path}}/{{pascalCase name}}/styled.ts",
        templateFile: ".templatesPlop/styles.hbs",
      },
    ],
  });
};
