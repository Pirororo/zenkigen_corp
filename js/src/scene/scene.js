// import * as THREE from '../../libs/three.module.js';
import persCamera from '../camera/persCamera.js';
import Ring_colorLine from '../objects/Ring_9th_colorCirc.js';
import Ring_fill from '../objects/Ring_10th_fill.js';
import Circle from '../objects/Circle.js';
import Overpaint from '../objects/Overpaint.js';

export class Scene extends THREE.Scene {

    constructor(){

        super();
        this.scene = 0;

        //カメラ
        this._persCamera = new persCamera();//thisにする
        this.camera = this._persCamera; //初期値
        this.scene0_frag = false;
        this.scene1_frag = false;
        this.scene2_frag = false;
        this.scene3_frag = false;

        this._orthoCamera = new THREE.OrthographicCamera( innerWidth / - 2, innerWidth / 2, innerHeight / 2, innerHeight / - 2, 1, 100 );

        //リング、色付き線
        this._ring_colorLine = new Ring_colorLine();
        this._ring_colorLine.visible = false;
        this.add(this._ring_colorLine);

        //リング、色付き三角
        this._ring_fill = new Ring_fill();
        this._ring_fill.visible = false;
        this.add(this._ring_fill);


        // // 平行光源
        // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        // directionalLight.castShadow = true;
        // this.add(directionalLight);

         // 環境光源
         const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
         this.add(ambientLight);

         //スポットライト
        var spotLight = new THREE.SpotLight(0xffffff);
        spotLight.castShadow = true;
        spotLight.position.set(500, 300, 800);//
        spotLight.intensity = 0.8;
        // spotLight.shadow.mapSize.width = 2048;
        // spotLight.shadow.mapSize.height = 2048;
        // spotLight.shadow.camera.fov = 120;
        // spotLight.shadow.camera.near = 1;
        // spotLight.shadow.camera.far = 1000;
        this.add(spotLight);

        //円
        this._circle = new Circle();
        this._circle.visible = false;
        this.add(this._circle);

        //画面切り替え
        this._overpaint = new Overpaint();
        this._overpaint.visible = false;
        this.add(this._overpaint);

    }

    update(){

        this.visibleFalse = function(){
            this._ring_colorLine.visible = false;
            this._ring_fill.visible = false;
            this._circle.visible = false;
            this._overpaint.visible = false;
        }

        this.fragFalse = function(){
            this.scene0_frag = false;
            this.scene1_frag = false;
            this.scene2_frag = false;
            this.scene3_frag = false;
            this.camera.position.set(this.camera.camPos.x,this.camera.camPos.y,this.camera.camPos.z);
            this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        }

        if(this.scene == 0){
            if(this.scene0_frag ==false){
                this.camera.camPos = new THREE.Vector3(0, 0, -355);//9th
                this.fragFalse();
                this.scene0_frag = true;
            }
            if(this._ring_colorLine.visible == false){
                this.visibleFalse();
                this._ring_colorLine.visible = true;
            }
            this._ring_colorLine.update();
        }

        if(this.scene == 1){
            if(this.scene1_frag ==false){
                this.camera.camPos = new THREE.Vector3(132, 170, -170);//10th
                this.fragFalse();
                this.scene1_frag = true;
            }
            if(this._ring_fill.visible == false){
                this.visibleFalse();
                this._ring_fill.visible = true;
            }
            this._ring_fill.update();
        }

        if(this.scene == 2){
            if(this.scene2_frag ==false){
                this.camera.camPos = new THREE.Vector3(0, 0, 10);//
                this.fragFalse();
                this.scene2_frag = true;
            }
            if(this._circle.visible == false){
                this.visibleFalse();
                this._circle.visible = true;
            }
            this._circle.update();
        }

        if(this.scene == 3){
            if(this.scene3_frag ==false){
                this.camera.camPos = new THREE.Vector3(-74, 70, 215);//
                this.fragFalse();
                this.scene3_frag = true;
            }
            if(this._overpaint.visible == false){
                this.visibleFalse();
                this._overpaint.visible = true;
            }
            this._overpaint.update();
        }



        
    }
}
