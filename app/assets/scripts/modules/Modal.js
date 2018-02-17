import $ from 'jquery';

class Modal{
  constructor(){
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }

  events(){
    //clicking the open modal button
    this.openModalButton.click(this.openModal.bind(this));

    //clicking the x close modal button
    this.closeModalButton.click(this.closeModal.bind(this));

    //pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));

  }

  //si la touche appuyée et relachée est ESCAPE
  keyPressHandler(e){
    if(e.keyCode == 27){ //27 est le code pour ESCAPE
      this.closeModal();
    }
  }

  openModal(){
    this.modal.addClass("modal--is-visible");
    return false; // annule le comportement de "lien" d'un lien (aller vers une anchre en l'occurence)
  }

  closeModal(){
    this.modal.removeClass("modal--is-visible");
  }
}

export default Modal;
