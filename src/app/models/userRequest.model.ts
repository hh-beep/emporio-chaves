export interface UserRequestModel {
  nome: string,
  login: string,
  perfil: "DONO" | "FUNCIONARIO",
  ativo: boolean,
  senha: string,
}
