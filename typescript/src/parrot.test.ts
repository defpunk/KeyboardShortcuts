import { Parrot, ParrotType } from './parrot'

describe("parrot", () => {

    it('should have speed 12 when created as default African', () => {
        const parrot = new Parrot(ParrotType.AFRICAN, 0, 0, false);
        expect(parrot.getSpeed()).toBe(12);
    });

    it('should have speed 0 when 2 coconuts fed to African', () => {
        const parrot = new Parrot(ParrotType.AFRICAN, 2, 0, false);
        expect(parrot.getSpeed()).toBe(0.0);
    });

    it('should have speed 3 when coconut fed to African', () => {
        const parrot = new Parrot(ParrotType.AFRICAN, 1, 0, false);
        expect(parrot.getSpeed()).toBe(3);
    });
    it('should have speed 12 when created as basic European', () => {
        const parrot = new Parrot(ParrotType.EUROPEAN, 0, 0, false);
        expect(parrot.getSpeed()).toBe(12);
    });

    it('should have speed 24 when coconuts fed to Norwegian Blue', () => {
        const parrot = new Parrot(ParrotType.NORWEGIAN_BLUE, 0, 4, false);
        expect(parrot.getSpeed()).toBe(24);
    })

    it('should have speed 0 when nailed Norwegian Blue', () => {
        const parrot = new Parrot(ParrotType.NORWEGIAN_BLUE, 0, 0, true);
        expect(parrot.getSpeed()).toBe(0.0);
    })

    it('should have speed 18 when voltage applied to Norwegian Blue', () => {
        const parrot = new Parrot(ParrotType.NORWEGIAN_BLUE, 0, 1.5, false);
        expect(parrot.getSpeed()).toBe(18);
    })



})
