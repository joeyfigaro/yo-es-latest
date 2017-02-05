(function (){
  "use strict";

  var Generator = require('yeoman-generator');

  module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
      // Calling the super constructor is important so our generator is correctly set up
      super(args, opts);

      // Next, add your custom code
      this.option('babel'); // This method adds support for a `--babel` flag
    }

    prompting () {
        console.log('Are you ready to turn this directory into a es6 environment?');
    }

    startCopy () {
        this.fs.copyTpl(
          this.templatePath('test.js'),
          this.destinationPath()
        );
    }


  };
}());
