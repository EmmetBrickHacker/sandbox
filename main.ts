//% block="Otto BrickHacker"
//% color="#00CC00" icon="\uf1a0"
namespace Otto {
    enum servoList {
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

    //% block="continuous Geekservo 9g 360° $port run at $speed \\%"
    //% speed.shadow="speedPicker"
    //% speed.defl=100
    //% subcategory=Geekservo
    export function continuousGeekservo(port: servoList, speed: number) : void {
            let buf = pins.createBuffer(4);
            if (port == 0) {
                buf[0] = 0x03;
            }
            if (port == 1) {
                buf[0] = 0x04;
            }
            if (port == 2) {
                buf[0] = 0x05;
            }
            if (port == 3) {
                buf[0] = 0x06;
            }
            if (port == 4) {
                buf[0] = 0x07;
            }
            if (port == 5) {
                buf[0] = 0x08;
            }
            if (port == 6) {
                buf[0] = 0x09;
            }
            if (port == 7) {
                buf[0] = 0x10;
            }
            buf[1] = speed;
            buf[2] = 0;
            buf[3] = 0;
            pins.i2cWriteBuffer(board_address, buf);
        }
    }
    
}
