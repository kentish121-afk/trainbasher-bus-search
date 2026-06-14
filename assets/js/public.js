jQuery(document).ready(function($) {
    const form = $('#tb-search-form');
    const resultsContainer = $('#tb-search-results');
    const resultsGrid = resultsContainer.find('.tb-results-grid');
    const countEl = resultsContainer.find('.tb-results-count');

    function performSearch(paged = 1) {
        const data = {
            action: 'tb_search_buses',
            nonce: tbSearchPublic.nonce,
            paged: paged,
            operator: $('#tb-filter-operator').val(),
            fleet: $('#tb-filter-fleet').val(),
            reg: $('#tb-filter-reg').val(),
            date_from: $('#tb-filter-date-from').val(),
            date_to: $('#tb-filter-date-to').val(),
            s: $('#tb-filter-keyword').val()
        };

        resultsGrid.html('<p style="text-align:center; padding:40px;">Searching...</p>');

        $.post(tbSearchPublic.ajax_url, data, function(response) {
            if (response.success) {
                resultsGrid.html(response.data.html);
                countEl.html(response.data.found + ' buses found');

                resultsContainer.find('.tb-page-btn').on('click', function() {
                    const page = $(this).data('page');
                    performSearch(page);
                    $('html, body').animate({ scrollTop: resultsContainer.offset().top - 80 }, 400);
                });
            } else {
                resultsGrid.html('<p>Error loading results.</p>');
            }
        });
    }

    form.on('submit', function(e) {
        e.preventDefault();
        performSearch(1);
    });

    $('#tb-clear-filters').on('click', function() {
        form[0].reset();
        resultsGrid.empty();
        countEl.empty();
    });
});