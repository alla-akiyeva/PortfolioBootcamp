$('#exampleModalCenter').on('show.bs.modal', function (event) {
    var card = $(event.relatedTarget) // Button that triggered the modal
    var image = card.data('image') // Extract info from data-* attributes
    var title = card.find('.card-title').text()
    // var description = card.find('.card-text').text()
    var summary = card.data('summary')
    var tech = card.data('tech')
    var link = card.data('link')
    var github = card.data('github')

    var modal = $(this)
    modal.find('.modal-title').text(title);
    modal.find('#modalSummary').text(summary);
    modal.find('#modalTech').append(tech);
    modal.find('img').attr('src', image);
  })