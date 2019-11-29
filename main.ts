//% block="Otto BrickHacker"
//% color="#00CC00" icon="\uf1a0"
namespace Otto {
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
    //% block="continuous Geekservo 9g 360° $port run at $speed \\%"
    //% speed.shadow="speedPicker"
    //% speed.defl=100
    export function continuousGeekservo(speed: number, port: ports) {

    }
}
