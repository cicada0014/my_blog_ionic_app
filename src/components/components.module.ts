import { NgModule } from '@angular/core';
import { PostCardComponent } from './post-card/post-card';
import { IonicModule } from 'ionic-angular';
import { MediumEditorComponent } from './medium-editor/medium-editor';
// import { EditorComponent } from './editor/editor';
@NgModule({
	declarations: [
		PostCardComponent,
    // EditorComponent,
    // MediumEditorComponent,
		// PostingModalComponent
	],
	imports: [
		IonicModule
	],
	entryComponents:
		[
			// PostingModalComponent
		],
	exports: [
		PostCardComponent,
    // EditorComponent,
    // MediumEditorComponent,
	]
})
export class ComponentsModule { }
