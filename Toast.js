const DEFAULT_OPTIONS = {
  autoClose: 5000,
  position: 'top-right',
  onClose: () => {},
  canClose: true,
}

export default class Toast {
  #toastElem
  #autoCloseTimeout
  #removeBinded

  constructor(options) {
    this.#toastElem = document.createElement('div');
    this.#toastElem.classList.add('toast');
    requestAnimationFrame(() => {
      this.#toastElem.classList.add('show');
    });
    this.#removeBinded = this.remove.bind(this);
    this.update({...DEFAULT_OPTIONS, ...options});
  }

  set position(position) {
    const currentContainer = this.#toastElem.parentElement;
    const selector = `.toast-container[data-position="${position}"]`;
    const container = document.querySelector(selector) || createContainer(position);
    container.append(this.#toastElem);
    if(currentContainer == null || currentContainer.hasChildNodes()) return;
    currentContainer.remove();
  }

  set text(toastTitle) {
    this.#toastElem.textContent = toastTitle;
  }

  set autoClose(time) {
    if(time === false) return;
    if(this.#autoCloseTimeout != null) clearTimeout(this.#autoCloseTimeout);    
    this.#autoCloseTimeout = setTimeout(() => {
      this.remove();
    }, time)
  }

  set canClose(canCloseValue) {

    this.#toastElem.classList.toggle('can-close', canCloseValue);

    if(canCloseValue === true) {
      this.#toastElem.addEventListener('click', this.#removeBinded);
    } else {
      this.#toastElem.removeEventListener('click', this.#removeBinded);
    }
  }

  update(options) {
    Object.entries(options).forEach(([key, value]) => {
      this[key] = value;
    })
  }

  remove() {
    const container = this.#toastElem.parentElement;
    this.#toastElem.remove();
    this.onClose();
    if(container.hasChildNodes()) return;
    container.remove();
  }

}

function createContainer(position) {
  const container = document.createElement('div');
  container.classList.add('toast-container');
  container.dataset.position = position;
  document.body.append(container);
  return container;
}