export const htmlForgotEmail = ({ email, link }) => {
  return `<strong>Modificando senha</strong>
  <p>Olá, esses são seus dados para efetuar seu login:</p> 
  
  <p>E-mail: ${email}</p>


  <p>Para continuar com a modificação da senha, utilize o endereço <i>"${link}"</i> no navegador ou clique no link abaixo:</p>
  
  
  <a href="${link}">Criar nova senha</a>

  
  
  <p>Atenciosamente,</p>
  <p><strong>Equipe EducaIO</strong></p>`
}
