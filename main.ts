//% block="Otto BrickHacker"
//% color="#00CC00" icon="\uf1a0"
namespace Otto {
// *************************************************** Otto's ports ****************************************** //
    /** 
     * I2C adresses links to wuKong board
    */
    const board_address = 0x10

    /** 
     * List of aviable ports for servos
    */
   export enum servoList {
        //% block="S0" enumval=0
        S0,
        //% block="S1" enumval=1
        S1,
        //% block="S2" enumval=2
        S2,
        //% block="S3" enumval=3
        S3,
        //% block="S4" enumval=4
        S4,
        //% block="S5" enumval=5
        S5,
        //% block="S6" enumval=6
        S6,
        //% block="S7" enumval=7
        S7
    }
    
// *************************************************** Otto's joints ****************************************** //
    export class joint {
        private name: string;
        public constructor(name: string) { this.name = name; }
        public port: servoList;
        public position: number;
        public startPosition: number;

        portToString() {
            return convertToText(this.port);
        }
    }

    export let leftAnkle = new joint("leftAnkle"); leftAnkle.port = Otto.servoList.S0, leftAnkle.startPosition = 137;    
    export let rightAnkle = new joint("rightAnkle"); rightAnkle.port = Otto.servoList.S1, rightAnkle.startPosition = 133;
    export let leftHip = new joint("leftHip"); leftHip.port = Otto.servoList.S2, leftHip.startPosition = 140;
    export let rightHip = new joint("rightHip"); rightHip.port = Otto.servoList.S3, rightHip.startPosition = 130;

// *************************************************** Main ****************************************** //
    //% block="Move legs to starting position"
    export function legsStartPosition() {
        Otto.geekServo270(Otto.leftAnkle.port, Otto.leftAnkle.startPosition)
        Otto.geekServo270(Otto.rightAnkle.port, Otto.rightAnkle.startPosition)
        Otto.geekServo270(Otto.leftHip.port, Otto.leftHip.startPosition)
        Otto.geekServo270(Otto.rightHip.port, Otto.rightHip.startPosition)
    }
    
// *************************************************** [SUBCATEGORY] settings ****************************************** //
    /**
     * Setting ports where servos for joints are plugged. 
     * @param leftAnklePort Port for left ankle , eg: Otto.servoList.S0
     * @param rightAnklePort Port for right ankle , eg: Otto.servoList.S1
     * @param leftAnkleHip Port for left hip , eg: Otto.servoList.S2
     * @param rightAnkleHip Port for right hip , eg: Otto.servoList.S3
     * @param leftAnkleStartPosition Default angle of left ankle , eg: 137
     * @param rightAnkleStartPosition Default angle of right ankle , eg: 133
     * @param leftHipStartPosition Default angle of left hip , eg: 140
     * @param rightHipStartPosition Default angle of right hip , eg: 130
    */
    //% block="Set legs starting positions:|left ankle $leftAnklePort starting position $leftAnkleStartPosition| right ankle $rightAnklePort starting position $rightAnkleStartPosition|left hip $leftHipPort starting position $leftHipStartPosition|right hip $rightHipPort starting position $rightHipStartPosition"
    //% leftAnklePort.defl=Otto.servoList.S0
    //% rightAnklePort.defl=Otto.servoList.S1
    //% leftHipPort.defl=Otto.servoList.S2
    //% rightHipPort.defl=Otto.servoList.S3      
    //% leftAnkleStartPosition.defl=137
    //% rightAnkleStartPosition.defl=133
    //% leftHipStartPosition.defl=140
    //% rightHipStartPosition.defl=130      
    //% subcategory=settings
    //% expandableArgumentMode="toggle"
    export function settingLegs(
        leftAnklePort: servoList, rightAnklePort: servoList, leftHipPort: servoList, rightHipPort: servoList,
        leftAnkleStartPosition: number, rightAnkleStartPosition: number, leftHipStartPosition: number, rightHipStartPosition: number) {
        leftAnkle.port = leftAnklePort
        leftAnkle.startPosition = leftAnkleStartPosition
        rightAnkle.port = rightAnklePort
        rightAnkle.startPosition = rightAnkleStartPosition
        leftHip.port = leftHipPort
        leftHip.startPosition = leftHipStartPosition
        rightHip.port = rightHipPort
        rightHip.startPosition = rightHipStartPosition     
    }

// *************************************************** [SUBCATEGORY] Geekservo ****************************************** //
    /**
     * Setting the power and direction of a continuous Geekservo (usualy has lime color). 
     * @param servo A port of servo in the servoList , eg: servoList.S0
     * @param power [-100-100] power of continuous Geekservo , eg: 100
    */
    //% block="continuous Geekservo 9g 360° $servo run at $power\\%"
    //% power.shadow="speedPicker"
    //% power.defl=100
    //% subcategory=Geekservo
    export function geekServo360(servo: servoList, power: number) {
        let buf = pins.createBuffer(4);
        if (servo == 0) {
            buf[0] = 0x03;
        }
        if (servo == 1) {
            buf[0] = 0x04;
        }
        if (servo == 2) {
            buf[0] = 0x05;
        }
        if (servo == 3) {
            buf[0] = 0x06;
        }
        if (servo == 4) {
            buf[0] = 0x07;
        }
        if (servo == 5) {
            buf[0] = 0x08;
        }
        if (servo == 6) {
            buf[0] = 0x09;
        }
        if (servo == 7) {
            buf[0] = 0x10;
        }
        buf[1] = Math.map(power, -100, 100, 0, 180);
        buf[2] = 0;
        buf[3] = 0;
        pins.i2cWriteBuffer(board_address, buf);
    }

    /**
     * Setting the angle of a Geekservo (usualy has grey color). 
     * @param servo A  port of servo in the servoList , eg: servoList.S0
     * @param angle[0-270] Angle of Geekservo , eg: 135
    */
    //% block="Geekservo 9g 270° $servo set to $angle\\°"
    //% angle.min=0 angle.max=270
    //% angle.defl=135
    //% subcategory=Geekservo
    export function geekServo270(servo: servoList, angle: number) {
        let buf = pins.createBuffer(4);
        if (servo == 0) {
            buf[0] = 0x03;
        }
        if (servo == 1) {
            buf[0] = 0x04;
        }
        if (servo == 2) {
            buf[0] = 0x05;
        }
        if (servo == 3) {
            buf[0] = 0x06;
        }
        if (servo == 4) {
            buf[0] = 0x07;
        }
        if (servo == 5) {
            buf[0] = 0x08;
        }
        if (servo == 6) {
            buf[0] = 0x09;
        }
        if (servo == 7) {
            buf[0] = 0x10;
        }
        buf[1] = Math.map(angle, 0, 270, 0, 180);
        buf[2] = 0;
        buf[3] = 0;
        pins.i2cWriteBuffer(board_address, buf);
    }

}

