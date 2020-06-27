class DateHelper {
  constructor() {
    throw new Error("Classe Estática");
  }
  static dataParaTexto(data) {
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }

  static textoParaData(texto) {
    if (!/\d{4}-\d{2}-\d{2}/.test(texto)) {
      throw new Error("Data inválida - Deve ser no formato yyyy-mm-dd");
    }
    return new Date(
      ...texto.split("-").map((data, index) => data - (index % 2))
    );
  }
}
