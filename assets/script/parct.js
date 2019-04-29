

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
       
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.scheduleOnce(()=>{
            // 这里的 this 指向 component
            this.node.removFromParent();
        },1.5);
    },

    start () {

    },

    // update (dt) {},
});
