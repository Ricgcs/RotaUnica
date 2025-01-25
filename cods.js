import { conexao } from "./conexao.js";

const con = await conexao();

export const cadastro = async (valor) => {
  console.log("teste: ", valor);
  const inicio = valor[0];
  const quant = valor.length;
  const val = quant - 1;
  console.log(inicio);
  console.log(quant);
  console.log(val);
  let sql = `INSERT INTO ${inicio} VALUES (`;
  for (let i = 1; i < quant; i++) {
    if (i != val) {
      sql += "?, ";
      console.log(i);
    } else {
      sql += "?)";
    }
  }
  console.log("texto: ", sql);
  const env = valor.shift();
  console.log(valor);
  try {
    const result = await con.query(sql, valor);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const vizualizar = async (valor) => {
  //primeiro elemento o que quer;
  //segundo elemento nome da tamela;
 
  const campo = valor[0];
  const tabela = valor[1];
  const tamanho = valor.length;
    console.log(tamanho)
  let sql = `SELECT ${campo} FROM ${tabela} `;

  if (tamanho > 2) {
    sql += "WHERE ";
    for (let i = 2; i < tamanho; i++)   {
        console.log(i)
        console.log(sql)
      if (i != tamanho) {
        if (valor[i] % 2 != 0) {
          sql += `${valor[i]} = `;
        } else {
          sql += ` ${valor[i]} AND WHERE`;
        }


      } else {
        console.log("fim"); 
        sql += `${valor}`;
        console.log(sql)
        return sql;
      }
    }
  } else {
    console.log(sql)
    return sql;
  }
};
