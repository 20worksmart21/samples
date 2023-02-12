import { passwordValidation, phoneValidate, validateEmail  } from '../utils/inputValidation';


describe('input validation', () => {
    it('test password ', () => {
        expect(passwordValidation('ssf!C2')).toMatchInlineSnapshot(`"not long enough"`);
        expect(passwordValidation('ssf!Cososooso')).toMatchInlineSnapshot(`"No number"`);
        expect(passwordValidation('ssf!sssdd')).toMatchInlineSnapshot(`"No capital"`);
        expect(passwordValidation('ssfasafaf2')).toMatchInlineSnapshot(`"No capital"`);
        expect(passwordValidation('ssf!Cosoos2')).toMatchInlineSnapshot(`true`);
        expect(passwordValidation('ssfsssssC2')).toMatchInlineSnapshot(`"no SEPCIAL_CASE"`);
    })
    it('test phone number ', () => {
      expect(phoneValidate('133342')).toMatchInlineSnapshot(`false`);
      expect(phoneValidate('2334444444')).toMatchInlineSnapshot(`true`);      
    })
    it('test email ', () => {
        expect(validateEmail('afaf@ss.ss')).toMatchInlineSnapshot(`true`);
        expect(validateEmail('afaf@ss.')).toMatchInlineSnapshot(`true`);      
        expect(validateEmail('afaf@ss')).toMatchInlineSnapshot(`false`);      
      })

})