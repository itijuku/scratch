((Scratch) => {
    const MyExtensionInfo = {
        id : 'MYEXTENSION',
        name : '独自拡張練習',
        blocks : [
            {
            
                opcode : 'moveStep',
                blockType : Scratch.BlockType.COMMAND,
                text : '動かす [STEPS]',
                arguments: {
                    STEPS : {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 10,
                    },
                },
            
            },
        ],
    }
    class MyExtension {
        getInfo() {
            return MyExtensionInfo;
        }
        moveStep ( args, util ) { // 引数は２つ必要です。
            console.log(args.STEPS);
            // const steps = Scratch.Cast.toNumber(args.STEPS);
            // const radians = MathUtil.degToRad(90 - util.target.direction);
            // const dx = steps * Math.cos(radians);
            // const dy = steps * Math.sin(radians);
            // util.target.setXY(util.target.x + dx, util.target.y + dy);
        }
    }    
    Scratch.extensions.register( new MyExtension() );
})(Scratch);
