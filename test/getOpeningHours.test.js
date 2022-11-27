const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testando o retorno se o parâmetro for vázio', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Testando recebendo dois argumentos MONDAY e 09:00-AM', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Testando recebendo dois argumentos TUESDAY e 09:00-AM', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Testando recebendo dois argumentos WEDNESDAY e 09:00-PM', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Testando recebendo dois argumentos Thu e 09:00-AM', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowErrorMatchingSnapshot('The day must be valid. Example: Monday');
  });
  it('Testando recebendo dois argumentos Friday e 09:00-ZM', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowErrorMatchingSnapshot('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Testando recebendo dois argumentos Saturday e C9:00-AM', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrowErrorMatchingSnapshot('The hour should represent a number');
  });
  it('Testando recebendo dois argumentos Sunday e 09:c0-AM', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrowErrorMatchingSnapshot('The minutes should represent a number');
  });
  it('Testando recebendo dois argumentos Monday e 13:00-AM', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrowErrorMatchingSnapshot('The hour must be between 0 and 12');
  });
  it('Testando recebendo dois argumentos Tuesday e 09:60-AM', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrowErrorMatchingSnapshot('The minutes must be between 0 and 59');
  });
});
