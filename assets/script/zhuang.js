
cc.Class({
    extends: cc.Component,

    properties: {
        label:cc.Label,
        parct:cc.Prefab,
        _ball:0,
        _restart:0,
    },

    // LIFE-CYCLE CALLBACKS:
    random_int:function (min, max) {
        var value = min + (max - min + 1) * Math.random(); // [0, max-min)--> min + [min, max + 1)
        value = Math.floor(value);
        
        return value;
    },
    onBeginContact(contact, selfCollider, otherCollider){
        console.log("onBeginContact==");
        if(otherCollider.node.group=="ball"){ 
            if(!this.node.parent) return;
            //播放动画
            let ani = this.node.getComponent(cc.Animation);
            ani.play();
            let lable = this.node.parent.parent.parent.getChildByName("titile").getChildByName("sorce").getComponent(cc.Label);
            lable.string =parseInt(lable.string)+1;
            let num =parseInt(this.label.string);
            num = num-1;
            if(num<=0){
                //粒子效果
                let part = cc.instantiate(this.parct);
                part.position = this.node.position;
                this.node.parent.addChild(part);
               
                if(this._ball){
                    let add =  this.node.parent.parent.parent.getChildByName("right_button").getChildByName("add3").getChildByName("cishu");
                    add.getComponent(cc.Label).string =  parseInt(add.getComponent(cc.Label).string) + this._ball;
                }
                if(this._restart){
                    let rest = this.node.parent.parent.parent.getChildByName("right_button").getChildByName("rest").getChildByName("cishu");
                    console.log(rest);
                    rest.getComponent(cc.Label).string = parseInt(rest.getComponent(cc.Label).string) + this._restart;
                }
                
                this.node.removeFromParent();

            }else{
                this.label.string = num;
            }      
        }

    },
    onLoad () {
        this.speed = this.node.parent.getComponent("bricks").speed;
        
        
        if(this.node.name=="startsdf"||this.node.name=="startsh"){
           
            this.label.string = 1; 
            
        }else{
            this.label.string = this.random_int(1,10);
        }
        
    },
    add(){

    },
    start () {

        if(this.node.name=="startsdf"){
            this._ball = 1;

        }else if(this.node.name=="startsh"){
            
            this._restart = 1;
        }
       
    },

    update (dt) {
        this.node.y -=dt*this.speed;
       
        
    },
});
