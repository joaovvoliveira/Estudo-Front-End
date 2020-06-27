class NegociacaoController {
  constructor() {
    const $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    this._ListaNegociacoes = new ListaNegociacoes();
    this._TableList = new TableList($("#tableList"));
    this._TableList.update(this._ListaNegociacoes);
  }

  adicionar(event) {
    event.preventDefault();

    const data = DateHelper.textoParaData(this._inputData.value);
    console.log(data);
    this._ListaNegociacoes.adicionar(this._criaNegociacao());
    this._TableList.update(this._ListaNegociacoes);
    this._limpaFormulario();
    alert("Concluido com Sucesso");
  }
  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }
  _limpaFormulario() {
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0;

    this._inputData.focus();
  }
}
