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
          }
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
  }
  Scratch.extensions.register(new test());
