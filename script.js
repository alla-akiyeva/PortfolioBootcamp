$('#exampleModalCenter').on('show.bs.modal', function (event) {
    var card = $(event.relatedTarget) // Button that triggered the modal
    var image = card.data('image') // Extract info from data-* attributes
    var title = card.find('.card-title').text();
    var description = card.find('.card-text').text();
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text(title);
    modal.find('#description').text(description);
    modal.find('img').attr('src', image);
    console.log(image);
  })

  /* 
  Find out how to grap the homework's title from the card and display it in the modal
  Title
  Description
  Two links
  Possibly, an image 


  Create two columns in modal: for the image and description
  Add description data, technologies, image and links to the card
  */