import '../../src/lib/applyMods';

describe('applyMods string prototype', () => {

  describe('index mods', () => {
    it('should alter text correctly - 1', () => {
      const userText = 'Index: ~i';
      const modifiedText = userText.applyMods(1);
      expect(modifiedText).toEqual('Index: 1');
    });

    it('should alter text correctly - 2', () => {
      const userText = 'Index: ~i';
      const modifiedText = userText.applyMods(10);
      expect(modifiedText).toEqual('Index: 10');
    });

    it('should alter text correctly - 3', () => {
      const userText = 'Index: ~i';
      const modifiedText = userText.applyMods(100);
      expect(modifiedText).toEqual('Index: 100');
    });
  });

  describe('number mods', () => {
    it('should alter text correctly - 1', () => {
      const userText = 'Number: ~n';
      const modifiedText = userText.applyMods(1);
      expect(modifiedText).toEqual('Number: 2');
    });

    it('should alter text correctly - 2', () => {
      const userText = 'Number: ~n';
      const modifiedText = userText.applyMods(10);
      expect(modifiedText).toEqual('Number: 11');
    });

    it('should alter text correctly - 3', () => {
      const userText = 'Number: ~n';
      const modifiedText = userText.applyMods(100);
      expect(modifiedText).toEqual('Number: 101');
    });
  });

  describe('alphabetical mods', () => {
    /*
      1 Letter
    */
    it('should alter text correctly (a)', () => {
      const userText = 'Letter Set: ~a';
      const modifiedText = userText.applyMods(0);
      expect(modifiedText).toEqual('Letter Set: a');
    });

    it('should alter text correctly (b)', () => {
      const userText = 'Letter Set: ~a';
      const modifiedText = userText.applyMods(1);
      expect(modifiedText).toEqual('Letter Set: b');
    });

    it('should alter text correctly (z)', () => {
      const userText = 'Letter Set: ~a';
      const modifiedText = userText.applyMods(25);
      expect(modifiedText).toEqual('Letter Set: z');
    });

    /*
      2 Letters
    */
    it('should alter text correctly (aa)', () => {
      const userText = 'Letter Set: ~a';
      const modifiedText = userText.applyMods(26);
      expect(modifiedText).toEqual('Letter Set: aa');
    });

    it('should alter text correctly (ab)', () => {
      const userText = 'Letter Set: ~a';
      const modifiedText = userText.applyMods(27);
      expect(modifiedText).toEqual('Letter Set: ab');
    });

    it('should alter text correctly (zz)', () => {
      const userText = 'Letter Set: ~a';
      const modifiedText = userText.applyMods(701);
      expect(modifiedText).toEqual('Letter Set: zz');
    });

    /*
      3 Letters
    */
    it('should alter text correctly (aaa)', () => {
      const userText = 'Letter Set: ~a';
      const modifiedText = userText.applyMods(702);
      expect(modifiedText).toEqual('Letter Set: aaa');
    });

    it('should alter text correctly (aab)', () => {
      const userText = 'Letter Set: ~a';
      const modifiedText = userText.applyMods(703);
      expect(modifiedText).toEqual('Letter Set: aab');
    });

    it('should alter text correctly (zzz)', () => {
      const userText = 'Letter Set: ~a';
      const modifiedText = userText.applyMods(18277);
      expect(modifiedText).toEqual('Letter Set: zzz');
    });

    /*
      4 Letters
    */
    it('should alter text correctly (aaaa)', () => {
      const userText = 'Letter Set: ~a';
      const modifiedText = userText.applyMods(18278);
      expect(modifiedText).toEqual('Letter Set: aaaa');
    });
  });

});
