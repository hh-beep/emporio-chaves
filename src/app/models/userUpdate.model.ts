export interface UserUpdateModel {
  nome: string,
  login: string,
  perfil: "DONO" | "FUNCIONARIO",
  ativo: boolean,
  senha?: string | null,        //  ~ String ou null pois a senha pode ser vazia (sem ser preenchida), oq pode dar erro (isso q nn e nescessaria)...
}
