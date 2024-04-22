"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersSeeder = exports.DatabaseSeeder = exports.API_COUNTRIES = exports.API_USERS = void 0;
const axios_1 = __importDefault(require("axios"));
const CrearUsuarioCommand_1 = require("../../Admin/Usuarios/Escritura/CrearUsuario/Application/CrearUsuarioCommand");
const CrearUsuarioCommandHandler_1 = require("../../Admin/Usuarios/Escritura/CrearUsuario/Application/CrearUsuarioCommandHandler");
const ValidadorUsuario_1 = require("../../Admin/Usuarios/Escritura/CrearUsuario/Domain/Service/ValidadorUsuario");
const UsuarioRepository_1 = require("../../Admin/Usuarios/Escritura/CrearUsuario/Infrastructure/UsuarioRepository");
const BaseSeeder_1 = require("../Base/BaseSeeder");
exports.API_USERS = "https://randomuser.me/api/?results=100";
exports.API_COUNTRIES = "https://restcountries.com/v3.1/all";
const usuarioRepository = new UsuarioRepository_1.UsuarioRepository();
const validadorUsuario = new ValidadorUsuario_1.ValidadorUsuario(usuarioRepository);
const crearUsuarioCommandHandler = new CrearUsuarioCommandHandler_1.CrearUsuarioCommandHandler(usuarioRepository, validadorUsuario);
class DatabaseSeeder {
    seed() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Database seeding...");
            yield new UsersSeeder(crearUsuarioCommandHandler).seed();
        });
    }
}
exports.DatabaseSeeder = DatabaseSeeder;
class UsersSeeder extends BaseSeeder_1.BaseSeeder {
    constructor(crearUsuarioCommandHandler) {
        super();
        this.crearUsuarioCommandHandler = crearUsuarioCommandHandler;
    }
    seed() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Seeding users...");
            try {
                const users = yield axios_1.default.get(exports.API_USERS);
                for (const user of users.data.results) {
                    const name = String(user.name.first + " " + user.name.last);
                    const command = new CrearUsuarioCommand_1.CrearUsuarioCommand(user.login.uuid, name, user.email, user.login.password);
                    yield this.crearUsuarioCommandHandler.run(command);
                }
                const countries = yield axios_1.default.get(exports.API_COUNTRIES);
                const arrayCountries = [];
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
                        mapOpenStreetMap: country.maps.openStreetMaps,
                    };
                    arrayCountries.push(countryDao);
                }
                console.log(arrayCountries, arrayCountries.length); // Log the array of countries
            }
            catch (error) { }
        });
    }
}
exports.UsersSeeder = UsersSeeder;
new DatabaseSeeder().seed();
