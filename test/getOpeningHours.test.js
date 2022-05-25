const getOpeningHours = require('../src/getOpeningHours');

const closed = 'The zoo is closed';
const open = 'The zoo is open';

describe('Testes da função getOpeningHours', () => {
  it('passado os argumentos Monday e 09:00-AM deve retornar a string "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(closed);
  });
  it('passado os argumentos Tuesday e 09:00-AM deve retornar a string "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(open);
  });
  it('passado os argumentos Wednesday e 09:00-PM deve retornar a string "The zoo is closed"', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(closed);
  });
  it('passado os argumentos Thursday e 10:00-AM deve retornar a string "The zoo is open"', () => {
    expect(getOpeningHours('Thursday', '10:00-AM')).toBe(open);
  });
  it('passado os argumentos Friday e 10:00-AM deve retornar a string "The zoo is open"', () => {
    expect(getOpeningHours('Friday', '10:00-AM')).toBe(open);
  });
  it('passado os argumentos Saturday e 07:00-AM deve retornar a string "The zoo is closed"', () => {
    expect(getOpeningHours('Saturday', '07:00-AM')).toBe(closed);
  });
  it('passado os argumentos Sunday e 09:00-PM deve retornar a string "The zoo is closed"', () => {
    expect(getOpeningHours('Sunday', '09:00-PM')).toBe(closed);
  });
  it('quando não passado nenhum argumento retorne um objeto contendo os dias da semana e horários de abertura e fechamento', () => {
    expect(getOpeningHours())
      .toEqual({
        Tuesday: { open: 8, close: 6 },
        Wednesday: { open: 8, close: 6 },
        Thursday: { open: 10, close: 8 },
        Friday: { open: 10, close: 8 },
        Saturday: { open: 8, close: 10 },
        Sunday: { open: 8, close: 8 },
        Monday: { open: 0, close: 0 },
      });
  });
  it('passado os argumentos Thu e 09:00-AM deve lançar uma exceção com a mensagem: "The day must be valid. Example: Monday"', () => {
    expect(() => (getOpeningHours('Thu', '09:00-AM'))).toThrow('The day must be valid. Example: Monday');
  });
  it('passado os argumentos Friday e 09:00-ZM deve lançar uma exceção com a mensagem: "The abbreviation must be \'AM\' or \'PM"', () => {
    expect(() => (getOpeningHours('Friday', '09:00-ZM'))).toThrow('The abbreviation must be \'AM\' or \'PM');
  });
  it('passado os argumentos Saturday e C9:00-AM deve lançar uma exceção com a mensagem: "The hour should represent a number"', () => {
    expect(() => (getOpeningHours('Saturday', 'C9:00-AM'))).toThrow('The hour should represent a number');
  });
  it('passado os argumentos Sunday e 09:c0-AM deve lançar uma exceção com a mensagem: "The minutes should represent a number"', () => {
    expect(() => (getOpeningHours('Sunday', '09:c0-AM'))).toThrow('The minutes should represent a number');
  });
});
