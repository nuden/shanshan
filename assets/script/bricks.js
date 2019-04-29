
cc.Class({
    extends: cc.Component,

    properties: {
        bricks:[cc.Prefab],
        speed:50,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.init();
    },
    random_int:function (min, max) {
        var value = min + (max - min + 1) * Math.random(); // [0, max-min)--> min + [min, max + 1)
        value = Math.floor(value);
        
        return value;
    },
    init(){

        for(let i =0;i<7;i++){
            let brick = cc.instantiate(this.bricks[this.random_int(0,this.bricks.length-1)])
            this.node.addChild(brick);
        }
        let that =this;
        this.scheduleOnce(function() {
          that.node.getComponent(cc.Layout).enabled = false ;
          let num = that.random_int(3,6)
          for(let j =0;j<num;j++){
            let suiji = that.random_int(0,6);
            while(!that.node.children[suiji]){
                suiji = that.random_int(0,6);
            }
            that.node.children[suiji].removeFromParent();
           }
        }, 1);
    },
    start () {
      
    },

    update (dt) {

       
    },
});
