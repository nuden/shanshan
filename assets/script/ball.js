
cc.Class({
    extends: cc.Component,
    
    properties: {
       
    },

    // LIFE-CYCLE CALLBACKS:
    onBeginContact(contact, selfCollider, otherCollider){
        if(otherCollider.node.group == "diban"){
            
            let label = this.node.parent.parent.getChildByName("startsbig").getChildByName("black").getChildByName("Label");
            let num =parseInt(label.getComponent(cc.Label).string); 
            label.getComponent(cc.Label).string = num+1; 
            this.node.removeFromParent();

        }

    },
    // onLoad () {},
    init:function(v){
        this.speed = 15000;
        let sp =cc.v2(v.x*this.speed,v.y*this.speed);
        let body = this.node.getComponent("cc.RigidBody");
        body.applyLinearImpulse(sp,cc.v2(0,0),false);
        
    },
    start () {
        //this.speed =1000;
    },

    // update (dt) {},
});
