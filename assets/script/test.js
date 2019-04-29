
cc.Class({
    extends: cc.Component,

    properties: {
       gameover:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    onBeginContact(contact, selfCollider, otherCollider){
        if(otherCollider.node.group=="blick"){
            console.log("gameover!");
            cc.director.pause();
            this.gameover.active = true;
       }
    },
    

    update (dt) {
        //this.node.y -=dt*50;
    },
});
