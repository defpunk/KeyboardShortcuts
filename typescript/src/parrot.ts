export class Parrot {

    private readonly nailed: boolean;
    private readonly numberOfCoconuts: number;
    private readonly type: ParrotType;
    private readonly voltage: number;

    constructor(type: ParrotType, numberOfCoconuts: number, voltage: number, nailed: boolean) {
        this.type = type;
        this.numberOfCoconuts = numberOfCoconuts;
        this.voltage = voltage;
        this.nailed = nailed;
    }

    getSpeed(): number {
        switch (this.type) {
            case ParrotType.EUROPEAN:
                return this.GetBaseSpeed();
            case ParrotType.AFRICAN:
                return Math.max(0, this.GetBaseSpeed() - this.GetLoadFactor() * this.numberOfCoconuts);
            case ParrotType.NORWEGIAN_BLUE:
                return this.nailed ? 0 : this.GetBaseSpeed(this.voltage);
        }

        throw new Error("Should be unreachable");
    }

    private GetBaseSpeed(voltage?: number): number {
        if(voltage === undefined){
            return 12.0;
        }
        return Math.min(24.0, voltage * this.GetBaseSpeed());
    }

    private GetLoadFactor(): number {
        return 9.0;
    }

}

export enum ParrotType {
    EUROPEAN,
    AFRICAN,
    NORWEGIAN_BLUE
}