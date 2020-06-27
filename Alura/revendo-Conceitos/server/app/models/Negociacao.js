class Negociacao {
  constructor(data = new Date(), quantidade = 3, valor = 2) {
    this._data = new Date(data.getTime());
    this._quantidade = quantidade;
    this._valor = valor;
    this._volume = 0;
  }

  get data() {
    return new Date(this._data.getTime());
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }
  get volume() {
    return this._quantidade * this._valor;
  }
}
