const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testando argumento COUNT', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  const expectedNames = ['Jefferson'];
  it('Testando argumento NAMES', () => {
    expect(handlerElephants('names')).toEqual(expect.arrayContaining(expectedNames));
  });
  it('Testando argumento AVERAGEAGE', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Testado argumento LOCATION', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Testando argumento POPULARITY', () => {
    expect(handlerElephants('popularity')).toBeCloseTo(5);
  });
  const expectedAvailability = ['Monday'];
  it('Testando argumento AVAILABILITY', () => {
    expect(handlerElephants('availability')).toEqual(expect.not.arrayContaining(expectedAvailability));
  });
  it('Testando se ao não declarar um parâmetro', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Testando se passar uma string diferente do esperado', () => {
    expect(handlerElephants('brunotest')).toBe(null);
  });
  it('Testando se passar um objeto vazio', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
});
