

cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // LIFE-CYCLE CALLBACKS:
    onEnable(){

    },
    onDisable(){

    },
    // onLoad () {},
    home(){
        cc.director.preloadScene("mian",()=>{
            cc.director.resume();
            cc.director.loadScene("mian");
        });
       
    },
    restart(){
        cc.director.resume();
        this.node.active = false;
    },
    start () {

    },

    // update (dt) {},
});
