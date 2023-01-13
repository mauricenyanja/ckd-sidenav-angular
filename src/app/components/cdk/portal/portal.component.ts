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
  @ViewChild('domPortalContent') domPortalContent: ElementRef<HTMLElement> | undefined;

  selectedPortal!: Portal<any>;
  componentPortal!: ComponentPortal<PortalComponent>;
  templatePortal!: TemplatePortal<any>;
  domPortal!:DomPortal<any>

  constructor(private _viewContainerRef:ViewContainerRef) { }

  ngOnInit():void {
  }

  ngAfterViewInit(){
    this.componentPortal = new ComponentPortal(PortalComponent);
    this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
    this.domPortal = new DomPortal(this.domPortalContent);
  }

}
