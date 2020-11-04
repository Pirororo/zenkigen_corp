// import * as THREE from '../../libs/three.module.js';

export default class Camera extends THREE.PerspectiveCamera{

  constructor() {

    super(45, window.innerWidth / window.innerHeight, 10, 500);
    this.camPos = new THREE.Vector3(0, 0, -355);//9th
    this.position.set(this.camPos.x,this.camPos.y,this.camPos.z);

    // this.frame =0;

    // this.scene0_frag = false;
    // this.scene1_frag = false;
    // this.scene2_frag = false;

    // this.camPos = new THREE.Vector3(-14, 16, 443);
    // this.camTarget = new THREE.Vector3(-88, 123, 467);

  }

  update(){

    // if(this.scene0_frag ==true){
    //   this.camPos = new THREE.Vector3(0, 0, -355);//9th_colorLine
    //   this.position.set(this.camPos.x,this.camPos.y,this.camPos.z);
    //   console.log("ok");
    // }
    // if(this.scene1_frag ==true){
    //   this.camPos = new THREE.Vector3(132, 170, -170);//10th_fill
    //   this.position.set(this.camPos.x,this.camPos.y,this.camPos.z);
    // }


    // this.frame += 1;

    // 原点に注目
    // this.lookAt(new THREE.Vector3(0, 0, 0));//これ大事！！！！
    // this.lookAt(railCenterPoint);//これ大事！！！！

    // this.lookAt(new THREE.Vector3(
    //   0,
    //   0,
    //   centerPoint.z
    // ));//これ大事！！！！

    // if(this.frame == 1){

    //   this.camTarget = new THREE.Vector3(
    //     // (2*Math.random()-1)*100,
    //     // (Math.random())*100,
    //     // Maf.randomInRange( 400, 700)
    //     0,
    //     300,
    //     centerPoint.z-0 
    //   );

    //   this.camPos = new THREE.Vector3(this.position.x, this.position.y-100, this.position.z);
    //   // this.camPos = currentPoint;
    //   console.log(currentPoint.x);
    // }

    // this.camPos.x += (this.camTarget.x - this.camPos.x)*0.02;
    // this.camPos.y += (this.camTarget.y - this.camPos.y)*0.02;
    // this.camPos.z += (this.camTarget.z - this.camPos.z)*0.02;

    // this.position.set(this.camPos.x,this.camPos.y,this.camPos.z);

  }
}