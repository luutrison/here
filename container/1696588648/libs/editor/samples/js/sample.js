/**
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* exported initSample */

if ( X_EDITOR_DJE2OTY3MDAYNJK4MTA.env.ie && X_EDITOR_DJE2OTY3MDAYNJK4MTA.env.version < 9 )
	X_EDITOR_DJE2OTY3MDAYNJK4MTA.tools.enableHtml5Elements( document );

// The trick to keep the editor in the sample quite small
// unless user specified own height.
X_EDITOR_DJE2OTY3MDAYNJK4MTA.config.height = 150;
X_EDITOR_DJE2OTY3MDAYNJK4MTA.config.width = 'auto';

var initSample = ( function() {
	var wysiwygareaAvailable = isWysiwygareaAvailable(),
		isBBCodeBuiltIn = !!X_EDITOR_DJE2OTY3MDAYNJK4MTA.plugins.get( 'bbcode' );

	return function() {
		var editorElement = X_EDITOR_DJE2OTY3MDAYNJK4MTA.document.getById( 'editor' );

		// :(((
		if ( isBBCodeBuiltIn ) {
			editorElement.setHtml(
				'Hello world!\n\n' +
				'I\'m an instance of [url=https://ckeditor.com]CKEditor[/url].'
			);
		}

		// Depending on the wysiwygarea plugin availability initialize classic or inline editor.
		if ( wysiwygareaAvailable ) {
			X_EDITOR_DJE2OTY3MDAYNJK4MTA.replace( 'editor' );
		} else {
			editorElement.setAttribute( 'contenteditable', 'true' );
			X_EDITOR_DJE2OTY3MDAYNJK4MTA.inline( 'editor' );

			// TODO we can consider displaying some info box that
			// without wysiwygarea the classic editor may not work.
		}
	};

	function isWysiwygareaAvailable() {
		// If in development mode, then the wysiwygarea must be available.
		// Split REV into two strings so builder does not replace it :D.
		if ( X_EDITOR_DJE2OTY3MDAYNJK4MTA.revision == ( '%RE' + 'V%' ) ) {
			return true;
		}

		return !!X_EDITOR_DJE2OTY3MDAYNJK4MTA.plugins.get( 'wysiwygarea' );
	}
} )();

