class TableList {
  constructor(elemento) {
    this._list = elemento;
  }

  _template(model) {
    return `<table class="table table-hover table-bordered">
    <thead>
    <tr>
    <th>DATA</th>
    <th>QUANTIDADE</th>
    <th>VALOR</th>
    <th>VOLUME</th>
    </tr>
    </thead>
    
    <tbody>
    ${model.negociacoes
      .map((item) => {
        return `
      <tr>
        <td>${DateHelper.dataParaTexto(item.data)}</td>
        <td>${item.quantidade}</td>
        <td>${item.valor}</td>
        <td>${item.volume}</td>
      </tr>`;
      })
      .join("")}</tbody>
    
    <tfoot>
      <td colspan='3'></td>
      <td>${model.negociacoes.reduce((acc, cur) => acc + cur.volume, 0)}</td>
    </tfoot>
    </table>`;
  }

  update(model) {
    this._list.innerHTML = this._template(model);
  }
}
