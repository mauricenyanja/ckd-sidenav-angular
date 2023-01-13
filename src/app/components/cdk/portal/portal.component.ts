import { AfterViewInit, Component ,ElementRef,OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {ComponentPortal, DomPortal, Portal, TemplatePortal} from '@angular/cdk/portal';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent  implements OnInit ,AfterViewInit{

  @ViewChild('templatePortalContent')
  templatePortalContent!: TemplateRef<unknown>;

  selectedPortal!: Portal<any>;
  componentPortal!: ComponentPortal<PortalComponent>;
  templatePortal!: TemplatePortal<any>;

  constructor(private _viewContainerRef:ViewContainerRef) { }

  ngOnInit():void {
  }

  ngAfterViewInit(){
    this.componentPortal = new ComponentPortal(PortalComponent);
    this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
  }

}
