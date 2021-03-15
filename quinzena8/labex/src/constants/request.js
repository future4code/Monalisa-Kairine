const aluno = "monalisa-pereira-dumont";

export const baseUrl =
"https://us-central1-labenu-apis.cloudfunctions.net/labeX/" + aluno ;

export const axiosConfig = {
  headers: { auth: window.localStorage.getItem("token") },
};