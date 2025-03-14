// https://docs.turbowarp.org/development/extensions/hello-world

class test {
    
    getInfo() {
      return {
        id: 'test',
        name: 'test',
        blocks: [
          {
            opcode: 'getname',
            blockType: Scratch.BlockType.REPORTER,
            text: 'スプライトの名前',
          },

          {
            opcode: 'setxy',
            blockType: Scratch.BlockType.COMMAND,
            text: '移動 [x] [y]',
            arguments: {
                x : {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 0,
                },
                y : {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 0,
                },
            },
          },

          {
            opcode: 'xzutu',
            blockType: Scratch.BlockType.COMMAND,
            text: 'x座標を[value]ずつ変える',
            arguments: {
                value : {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 0,
                },
            }
          },

          {
            opcode: 'yzutu',
            blockType: Scratch.BlockType.COMMAND,
            text: 'y座標を[value]ずつ変える',
            arguments: {
                value : {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 0,
                },
            }
          },
          
          {
            opcode: 'url',
            blockType: Scratch.BlockType.COMMAND,
            text: '[value]を開く',
            arguments: {
                value : {
                    type: Scratch.ArgumentType.STRING,
                    // defaultValue: 0,
                },
            }
          },

          {
            opcode: 'alert',
            blockType: Scratch.BlockType.COMMAND,
            text: 'alertを表示[value]',
            arguments: {
                value : {
                    type: Scratch.ArgumentType.STRING,
                    // defaultValue: 0,
                },
            }
          },

          {
            opcode: 'input',
            blockType: Scratch.BlockType.COMMAND,
            text: '入力を要求',
          },

          {
            opcode: 'kotae',
            blockType: Scratch.BlockType.REPORTER,
            text: '答え',
          },
        ]
      };
    }
  
    getname(args,util) {
      return util.target.getName();
    };
    setxy(args,util) {
        util.target.setXY(args.x,args.y);
    };
    xzutu(args,util) {
        util.target.setXY(util.target.x + args.value,util.target.y);
    };
    yzutu(args,util) {
        util.target.setXY(util.target.x,util.target.y + args.value);
    };
    url(args,util) {
        window.open(args.value);
    };
    alert(args,util) {
        window.alert(args.value);
    };
    input(args,util) {
        kotae = window.prompt();
    };
    ktoae(args,util) {
        return kotae;
    };
  }
  let kotae = 0;
  Scratch.extensions.register(new test());

