export interface UserResponseModel {
  id: number,
  nome: string,
  login: string,
  perfil: "DONO" | "FUNCIONARIO",
  ativo: boolean
}
