import {Component, HostBinding, Inject, OnInit, Optional} from '@angular/core';
import {ANIMATION_MODULE_TYPE} from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {Footer} from '../../shared/footer/footer';
import {RouterLink} from '@angular/router';
import {ComponentPageTitle} from '../page-title/page-title';
import {NavigationFocus} from '../../shared/navigation-focus/navigation-focus';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {GuideItems} from '../../shared/guide-items/guide-items';
import {NgFor} from '@angular/common';

import {Support} from '../../shared/support/support';
import {DocItem, DOCS} from '../../shared/documentation-items/documentation-items';
import {Carousel, CarouselItem} from '../../shared/carousel/carousel';

const TOP_COMPONENTS = ['datepicker', 'input', 'slide-toggle', 'slider', 'button'];

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss'],
  standalone: true,
  imports: [
    NavigationFocus,
    MatButtonModule,
    RouterLink,
    MatDividerModule,
    MatIconModule,
    Carousel,
    NgFor,
    CarouselItem,
    MatCardModule,
    Support,
    Footer,
  ],
})
export class Homepage implements OnInit {
  @HostBinding('class.main-content') readonly mainContentClass = true;
  @HostBinding('class.animations-disabled') readonly animationsDisabled: boolean;

  isNextVersion = location.hostname === 'next.material.angular.io';

  constructor(
    public _componentPageTitle: ComponentPageTitle,
    public guideItems: GuideItems,
    @Optional() @Inject(ANIMATION_MODULE_TYPE) animationsModule?: string) {
    this.animationsDisabled = animationsModule === 'NoopAnimations';
  }

  ngOnInit(): void {
    this._componentPageTitle.title = '';
    this._componentPageTitle.titleCn = '';
  }

  getTopComponents(): DocItem[] {
    // tslint:disable-next-line:no-non-null-assertion
    return TOP_COMPONENTS.map(id => DOCS['components']!!.find(it => it.id === id)!!);
  }
}
