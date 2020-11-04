// import * as THREE from '../../libs/three.module.js';
import Ring_colorLine from '../objects/Ring_9th_colorCirc.js';
import Ring_fill from '../objects/Ring_10th_fill.js';
import Circle from '../objects/Circle.js';
import Overpaint from '../objects/Overpaint.js';

export class Scene extends THREE.Scene {

    constructor(){

        super();
        this.scene = 0;

        //カメラ
        this._persCamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 10, 500);
        this.camera = this._persCamera; //初期値
        this.camera.camPos = new THREE.Vector3(0, 0, -355);//9th
        this.camera.position.set(this.camera.camPos.x,this.camera.camPos.y,this.camera.camPos.z);
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
