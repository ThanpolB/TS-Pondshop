( function( api ) {

	// Extends our custom "fse-book-store" section.
	api.sectionConstructor['fse-book-store'] = api.Section.extend( {

		// No events for this type of section.
		attachEvents: function () {},

		// Always make the section active.
		isContextuallyActive: function () {
			return true;
		}
	} );

} )( wp.customize );