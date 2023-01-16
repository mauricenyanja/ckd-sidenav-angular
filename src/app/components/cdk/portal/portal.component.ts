import { AfterViewInit, Component ,ElementRef,OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {ComponentPortal, DomPortal, Portal, TemplatePortal} from '@angular/cdk/portal';
import {FormControl} from '@angular/forms';
import {MatDrawerMode} from '@angular/material/sidenav';


import {TrialComponent} from '../../trial/trial.component'

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
  componentPortal!: ComponentPortal<TrialComponent>;
  templatePortal!: TemplatePortal<any>;
  domPortal!:DomPortal<any>

  constructor(private _viewContainerRef:ViewContainerRef) { }

  // this is sidenav Push that is used to move the blocks to the left for easier and intuitive editing
  mode = new FormControl('push' as MatDrawerMode);
  shouldRun = /(^|.)().(|)$/.test(window.location.host);

  ngOnInit():void {
  }

  ngAfterViewInit(){
    this.componentPortal = new ComponentPortal(TrialComponent);
    this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
    this.domPortal = new DomPortal(this.domPortalContent);
  }

}
