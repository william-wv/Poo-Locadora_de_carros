import { Vendedor } from '../models/Vendedor';
import { Ecargo } from '../Enum/ECargo';

describe('Vendedor', () => {
  test('Deve criar um vendedor com cargo correto', () => {
    const vendedor = new Vendedor('Maria', '12345678900', { id: 1 }, Ecargo.nivel2);

    expect(vendedor.getNivelCargo()).toBe(Ecargo.nivel2);
    expect(vendedor.nome).toBe('Maria');
    expect(vendedor.documento).toBe('12345678900');
  });

  test('Deve alterar o nível do cargo', () => {
    const vendedor = new Vendedor('João', '98765432100', { id: 2 }, Ecargo.nivel1);
    vendedor.setNivelCargo(Ecargo.nivel2);
    expect(vendedor.getNivelCargo()).toBe(Ecargo.nivel2);
  });
});
