
cc.Class({
    extends: cc.Component,

    properties: {
      bestscore:cc.Label,
      nowsore:cc.Label,
      myscore:cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onEnable(){
        this.init();
    },
    onDisable(){

    },
    init(){
      console.log("init()");
      this.nowsore.string = this.myscore.string;
    },
    restart(){
        
        cc.director.preloadScene("game",()=>{
            cc.director.resume();
            cc.director.loadScene("game");
        });
    },
    home(){
        cc.director.preloadScene("mian",()=>{
            cc.director.resume();
            cc.director.loadScene("mian");
        });
    },
    start () {

    },

    // update (dt) {},
});
