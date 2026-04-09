const agora = new Date()

console.log(agora)

console.log('Ano:', agora.getFullYear()) // retorna o ano atual
console.log('Mês:', agora.getMonth() + 1) // retorna o mês atual (0-11, por isso adicionamos 1) 0 é Janiero
console.log('Dia do mês:', agora.getDate()) // retorna o dia do mês atual (1-31)    
console.log('Dia da semana:', agora.getDay()) // retorna o dia da semana atual (0-6, onde 0 é Domingo)
console.log('Horas:', agora.getHours()) // retorna a hora atual (0-23)
console.log('Minutos:', agora.getMinutes()) // retorna os minutos atuais (0-59)
console.log('Segundos:', agora.getSeconds()) // retorna os segundos atuais (0-59)

const nascimento = new Date(1993, 3, 24) // mês é 0-indexado, então 3 representa abril

console.log('Data de nascimento:', nascimento)

// forma correta e padrão para escrever datas é usando o formato ISO 8601: 'YYYY-MM-DD'
const dataISO = new Date('1993-04-24T03:00:00.000Z')

console.log('Data de nascimento (ISO):', dataISO)

// formatar para o pais ou localidade usando toLocaleDateString
console.log('Data de nascimento (formato local):', nascimento.toLocaleDateString('pt-BR')) // formato para Brasil
console.log('Data de nascimento (formato local):', nascimento.toLocaleDateString('en-US')) // formato para Estados Unidos