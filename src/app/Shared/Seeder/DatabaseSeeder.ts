import axios from 'axios';

import { CrearUsuarioCommand } from '../../Admin/Usuarios/Escritura/CrearUsuario/Application/CrearUsuarioCommand';
import { CrearUsuarioCommandHandler } from '../../Admin/Usuarios/Escritura/CrearUsuario/Application/CrearUsuarioCommandHandler';
import { UsuarioRepositoryInterface } from '../../Admin/Usuarios/Escritura/CrearUsuario/Domain/Interfaces/UsuarioRepositoryInterface';
import { ValidadorUsuario } from '../../Admin/Usuarios/Escritura/CrearUsuario/Domain/Service/ValidadorUsuario';
import { UsuarioRepository } from '../../Admin/Usuarios/Escritura/CrearUsuario/Infrastructure/UsuarioRepository';
import { BaseSeeder } from '../Base/BaseSeeder';

export const API_USERS = 'https://randomuser.me/api/?results=100';
export const API_COUNTRIES = 'https://restcountries.com/v3.1/all';

const usuarioRepository: UsuarioRepositoryInterface = new UsuarioRepository();
const validadorUsuario: ValidadorUsuario = new ValidadorUsuario(usuarioRepository);
const crearUsuarioCommandHandler: CrearUsuarioCommandHandler = new CrearUsuarioCommandHandler(
  usuarioRepository,
  validadorUsuario
);

export class DatabaseSeeder {
  async seed(): Promise<void> {
    console.log('Database seeding...');
    await new UsersSeeder(crearUsuarioCommandHandler).seed();
  }
}

export class UsersSeeder extends BaseSeeder {
  constructor(protected readonly crearUsuarioCommandHandler: CrearUsuarioCommandHandler) {
    super();
  }

  async seed(): Promise<void> {
    console.log('Seeding users...');
    try {
      const users = await axios.get(API_USERS);
      for (const user of users.data.results) {
        const name = String(user.name.first + ' ' + user.name.last);

        const command = new CrearUsuarioCommand(
          user.login.uuid,
          name,
          user.email,
          user.login.password
        );
        await this.crearUsuarioCommandHandler.run(command);
      }
      const countries = await axios.get(API_COUNTRIES);
      const arrayCountries: Array<object> = [];
      for (const country of countries.data) {
        const countryDao = {
          name: country.name.common,
          oficialName: country.name.official,
          capital: country.capital,
          region: country.region,
          subregion: country.subregion,
          area: country.area,
          population: country.population,
          flag: country.flags.png,
          mapGoogle: country.maps.googleMaps,
          mapOpenStreetMap: country.maps.openStreetMaps
        };
        arrayCountries.push(countryDao);
      }
      console.log(arrayCountries, arrayCountries.length); // Log the array of countries
    } catch (error) {}
  }
}

new DatabaseSeeder().seed();
