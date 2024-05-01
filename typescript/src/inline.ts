export default class Inline {

    e = 2;

    practice(): number {
        const i = 2;
        const a = 5;
        const s = 2 - i;
        const j = (Inline.B() - a + i);
        var m = Inline.F(3);
        if (this.N()) {
            m += 56;
        }

        const k = () => {
            var l = m + j;
            return l - Inline.C(this.e);
        };

        const q = 1 - O.Create().p;
        return 42 + k() + q + Extensions.H(7) + s;
    }

    private N() {
        return false;
    }

    private static B() {
        return 5;
    }

    private static F(g: number): number {
        return -3 + g;
    }

    private static C(d: number) {
        return d;
    }


}

class O {
    p = 1;

    static Create() {
        return new O();
    }
}

class Extensions{

     static H(that: number){
        return that - 7;
    }
}
