enum ports {
    //% block="S0"
    s0,
    //% block="S1"
    s1,
    //% block="S2"
    s2,
    //% block="S3"
    s3,
    //% block="S4"
    s4,
    //% block="S5"
    s5,
    //% block="S6"
    s6,
    //% block="S7"
    s7

}

//% color="#00CC00" icon="\uf1a0"
namespace geekservo {

    //% block="continuous Geekservo 9g 360° $port run at $speed \\%"
    //% speed.shadow="speedPicker"
    //% speed.defl=100
    export function continuousGeekservo(speed: number, port: ports) {
    }

    //
    // pokusná třída
    //
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

    export class joint {
        private name: string;
        public constructor(name: string) { this.name = name; }
        public port: servoList;
        public position: number;
        public defaultPosition: number;

        portToString() {
            return convertToText(this.port);
        }
    }

    export let leftAnkle = new joint("leftAnkle");
    leftAnkle.port = servoList.S3;
    let variable = 10;

    /**
     * Just for testing
     */
    //% block="Choose port $port || $numero"
    //% expandableArgumentMode="toggle"
    export function choosePort(port: servoList, numero?: number) {
        basic.showNumber(variable)
        basic.showString(leftAnkle.portToString())
    }

}
