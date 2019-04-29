//45--175
cc.Class({
    extends: cc.Component,

    properties: {
        muzzle:cc.Node,
        bricks:cc.Prefab,
        bg:cc.Node,
        ball:cc.Prefab,
        ballnumb:cc.Label,
        bulltpos:cc.Node,
        pauseNode:cc.Node,
        ballparent:cc.Node,

    },

    // LIFE-CYCLE CALLBACKS:
    
    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
        this.creatblicks()
       
         //cc.director.getPhysicsManager().debugDrawFlags = 1;
    },
    creatblicks(){
        let brick = cc.instantiate(this.bricks);
        let posy = cc.winSize.height/2;
        brick.position =cc.v2(0,posy); 
        this.bg.addChild(brick);
    },
    start () {
        this.muzzle_Move();
        this.time = 0;
        this.speed =50;
        this.ballcount = 5;
    },
    muzzle_Move(){
        this.muzzle.angle = 20;
        let that = this;
        let actions = [];  
        let rotationTo1 = cc.rotateTo(2.5,90);
        let rotationTo2 = cc.rotateTo(2.5,160);
        let delaytime = cc.delayTime(0.3);
        let rotationTo3 = cc.rotateTo(2.5,90);
        let rotationTo4 = cc.rotateTo(2.5,20);
        actions.push(rotationTo1);
        actions.push(rotationTo2);
        actions.push(delaytime);
        actions.push(rotationTo3);
        actions.push(rotationTo4);
        actions.push(delaytime);
        that.muzzle.runAction(cc.repeatForever(cc.sequence(actions)));
       
    },
    pause(){
        cc.director.pause();
        this.pauseNode.active = true;

    },
    degreesToVectors: function (degree) {
        let radian = cc.misc.degreesToRadians(degree);    // 将角度转换为弧度
        let comVec = cc.v2(0, 1);    // 一个水平向右的对比向量
        let dirVec = comVec.rotate(-radian);    // 将对比向量旋转给定的弧度返回一个新的向量
        return dirVec;
    },
      
    /* 发射球 */
    emission(){
        if(parseInt(this.ballnumb.string)>=this.ballcount){
           
            let pos = this.bulltpos.position;
        
            let roation = this.bulltpos.angle;
            roation = this.degreesToVectors(roation)
            let dec = this.muzzle.getAnchorPoint();
            let len = this.muzzle.height/2+this.muzzle.height*Math.abs(dec.x)
            this.muzzle.pauseAllActions();
            pos =cc.v2(roation.y*len,roation.x*len);
            let i = 0;
            this.schedule(()=>{
                i++;
                let ball = cc.instantiate(this.ball);
                this.ballparent.addChild(ball);
               
                ball.position = pos;
                if(roation.y>1) roation.y=1;
                if(roation.x<-1) roation.x= -1;
             
                ball.getComponent("ball").init(cc.v2(roation.y,roation.x));
                this.ballnumb.string = parseInt(this.ballnumb.string)-1;
               
                this.muzzle.getComponent(cc.Animation).play();
                if(i==this.ballcount-1){
                    console.log(i);
                    this.muzzle.resumeAllActions();
                }
            }, 0.1, this.ballcount-1, 0);   
        }
    },
    update (dt) {
        this.time +=dt;
        if(this.time>=(140/(0.8*this.speed))){
            this.time = 0;
            //console.log("hello");
            this.creatblicks();
        }
    },
});
